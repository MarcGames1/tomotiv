import User from "../models/user";
import  Course from "../models/course";
const stripe = require('stripe')(process.env.STRIPE_SECRET);

import { registerUser } from "./auth"
/**
 * Funcția `handleUserRegistration` este un middleware care se ocupă de procesul de înregistrare a utilizatorilor și efectuează acțiuni suplimentare, cum ar fi verificarea înregistrării și crearea sesiunii Stripe, în funcție de metoda de plată.
 *
 * @param {Object} req - Obiectul cererii HTTP.
 * @param {Object} res - Obiectul răspunsului HTTP.
 * @param {function} next - Funcția middleware următoare pentru a continua cu următoarea etapă a procesului.
 *
 * @throws {Error} - Aruncă erori în cazul în care înregistrarea utilizatorului eșuează sau dacă apare o eroare în proces.
 *
 * @returns {void}
 */
export const handleUserRegistration= async (req, res, next) => {

    const { nume, preNume, email, password } = req.body;
    
    let userExist = await User.findOne({ email }).exec();
    if(userExist){
        console.log('userul exista deja, ...')
        next()
        return
    }
  // creaza cont

  try {
    const registrationResult = await registerUser(
      nume,
      preNume,
      email,
      password
    );
    if (registrationResult) {
        console.log('user registered')
      next(); //check enrollment
    } else {
      res.status(400).json({ ok: false, error: 'Înregistrarea a eșuat' });
    }
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
  //check enrollment
  //create stripe session in functie de metoda de plata
}


/**
 * Funcția `handleCheckEnrollment` este un middleware care verifică dacă un utilizator este deja înscris într-un curs specific sau nu. Dacă utilizatorul nu este înscris, se trece la etapa următoare a procesului, care ar putea fi crearea sesiunii de plată.
 *
 * @param {Object} req - Obiectul cererii HTTP.
 * @param {Object} res - Obiectul răspunsului HTTP.
 * @param {function} next - Funcția middleware următoare pentru a continua cu următoarea etapă a procesului.
 *
 * @throws {Error} - Aruncă erori în cazul în care apare o eroare în procesul de verificare a înregistrării.
 *
 * @returns {void}
 */
export const handleCheckEnrollment = async (req, res, next) => {
const {email} = req.body
const { slug } = req.params;
try {
    const user = await User.findOne({ email }).exec();
    const course = await Course.findOne({ slug }).exec();
    const courseId = course._id
    let ids = [];
    let length = user.courses && user.courses.length;
    for (let i = 0; i < length; i++) {
      ids.push(user.courses[i].toString());
    }
    
    if (!ids.includes(courseId)) {
      next()
      console.log('Enrollment status false mergem catre checkout...')
      return
    }
    console.log('CURSUL ESTE DEJA CUMPARAT!')
   return
} catch (error) {
    console.error(error)
    res.status(400).json({ ok: false, error: error.message });
}

};


export const handlePaidEnrollment = async (req, res) => {
  try {
    const { email } = req.body;
    const { metoda_plata } = req.body;
    const { slug } = req.params;
    const course = await Course.findOne({ slug }).exec();

    // Verificați dacă cursul este cu plată
    if (!course.paid) {
      throw new Error('Cursul nu este cu plata');
    }

    // Funcție pentru a calcula prețul și modul de plată
    const getPriceAndPaymentMode = () => {
      let calculatedPrice = undefined;
      let mode = metoda_plata;

      const getPrice = () => {
        const discountedPrice = course.discountedPrice;
        const price = course.price;

        if (discountedPrice > 0 && discountedPrice < price) {
          return discountedPrice;
        }

        return price;
      };

      calculatedPrice = getPrice();

      if (calculatedPrice === null || calculatedPrice === undefined) {
        throw new Error('Prețul nu poate fi calculat'); // Aruncați o excepție în cazul unei valori nevalide
      }

      const defaultPrice = getPrice();

      switch (metoda_plata) {
        case 'plataIn2Rate':
          mode = 'subscription';
          calculatedPrice = ((defaultPrice * 1.1) / 2) // Adaugă 10% și împarte la 2 rate
          break; // Adăugați această instrucțiune "break" pentru a opri switch-ul

        case 'plataIn6Rate':
          mode = 'subscription';
          calculatedPrice = ((defaultPrice * 1.2) / 6) // Adaugă 20% și împarte la 6 rate
          break; // Adăugați această instrucțiune "break" pentru a opri switch-ul

        default:
          calculatedPrice = defaultPrice; // Plata o singură dată, prețul rămâne neschimbat
          mode = 'payment';
      }

      return { mode, calculatedPrice };
    };

    // Obțineți modul de plată și prețul calculat
    const { mode, calculatedPrice } = getPriceAndPaymentMode();
    console.table({ mode, calculatedPrice, metoda_plata });

    // Creați sesiunea de plată cu parametrii specificați
  
 const getInterval = () =>{
       if (metoda_plata === 'plataIn2Rate') {
         return 'month';
       }else return 'week'
 }
const getSessionParams = () =>{
          if (mode === 'subscription') {
           return {
              line_items: [
                {
                  price_data: {
                    currency: 'ron',
                    product_data: {
                      name: course.name,
                    },
                    unit_amount: Math.round(calculatedPrice * 100), // Nu este nevoie de toFixed() aici
                    recurring: {
                      interval: getInterval(),
                    },
                  },
                  quantity: 1,
                },
              ],
              allow_promotion_codes: true,
              mode: mode,
              customer_email: email,
              success_url: `${process.env.STRIPE_SUCCESS_URL}/${course._id}`,
              cancel_url: process.env.STRIPE_CANCEL_URL,
            };
          } else {
          return {
              line_items: [
                {
                  price_data: {
                    currency: 'ron',
                    product_data: {
                      name: course.name,
                    },
                    unit_amount: Math.round(calculatedPrice * 100), // Nu este nevoie de toFixed() aici
                  },
                  quantity: 1,
                },
              ],
              allow_promotion_codes: true,
              mode: mode,
              customer_email: email,
              success_url: `${process.env.STRIPE_SUCCESS_URL}/${course._id}`,
              cancel_url: process.env.STRIPE_CANCEL_URL,
            };
          }
}
    const session = await stripe.checkout.sessions.create(getSessionParams());
    // Răspundeți cu sesiunea de plată creată
    res.json({ session });
  } catch (error) {
    console.error(error);
    res.status(400).json({ ok: false, error: error.message });
  }
};
     