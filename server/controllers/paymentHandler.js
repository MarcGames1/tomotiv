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
      return
    }
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
    return
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
console.log("Check Endrollment slug -> ",slug)
try {
    const user = await User.findOne({ email }).exec();
    const course = await Course.findOne({ slug }).exec();
    const courseId = course._id
    let ids = [];
    let length = 0 
    if(user && user.courses && user.courses.length){
      length=user.courses.length
    }
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
          calculatedPrice = (defaultPrice * 1.1) / 2; // Adaugă 10% și împarte la 2 rate
          break; // Adăugați această instrucțiune "break" pentru a opri switch-ul

        case 'plataIn6Rate':
          mode = 'subscription';
          calculatedPrice = (defaultPrice * 1.2) / 6; // Adaugă 20% și împarte la 6 rate
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
             success_url: `${process.env.STRIPE_SUCCESS_URL}/v2/${course._id}?userEmail=${email}&s=${metoda_plata}`,
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
            success_url: `${process.env.STRIPE_SUCCESS_URL}/v2/${course._id}?userEmail=${email}&s=${metoda_plata}`,
            cancel_url: process.env.STRIPE_CANCEL_URL,
          };
          }
}
    const session = await stripe.checkout.sessions.create(getSessionParams());
    //update user with session
    await User.updateOne({ email }, { stripeSession: session }).exec();
    // Răspundeți cu sesiunea de plată creată
    res.json({ session });
  } catch (error) {
    console.error(error);
    res.status(400).json({ ok: false, error: error.message });
  }
};
     

export const stripeSuccessNoUser = async(req, res)  => {
    const {courseId } = req.params
    const {userEmail, s} = req.query
    try {
    // Găsirea cursului
    const course = await Course.findById(courseId).exec();
    
    // Obținerea utilizatorului din baza de date pentru a obține ID-ul sesiunii Stripe
    const user = await User.findOne({ email: userEmail }).exec();
        console.log(user, userEmail);
    // Dacă nu există o sesiune Stripe, returnează eroare
    if (!user.stripeSession.id) return res.sendStatus(400);
    
    // Obținerea informațiilor despre sesiunea Stripe
    const session = await stripe.checkout.sessions.retrieve(
      user.stripeSession.id
    );
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription
    );
    console.log('STRIPE session', session);
    console.log('STRIPE subscription', subscription);

    // cream subscriptionScheduale
console.log('SUBSCRIPTION ITEMS => ,', subscription.items)
    let subscriptionScheduale = await stripe.subscriptionSchedules.create({
      from_subscription: session.subscription,
    });

    const getIterations = () =>{
      if (s === 'plataIn2Rate') {
        return 2 
      } else if (s === 'plataIn6Rate'){
        return 6
      }
      else return NaN
    }
     subscriptionScheduale = await subscriptionScheduale.update(
       subscriptionScheduale.id,
       {
         end_behavior: 'cancel',
         phases: [
           {
             items: [
               {
                 price: subscription.items.data[0].price,
                 quantity: subscription.items.data[0].quantity,
               },
             ],
             iterations: getIterations(),
           },
         ],
       }
     );

    
console.log("SESSION Payment Status",session.payment_status);
    // Dacă statusul de plată al sesiunii este "paid", adaugă cursul la lista de cursuri a utilizatorului
    if (session.payment_status === 'paid') {
      await User.findByIdAndUpdate(user._id, {
        $addToSet: { courses: course._id },
        $set: { stripeSession: {} },
      }).exec();
    }

    // Răspuns JSON indicând succesul plății și cursul achiziționat
    res.json({ success: true, course });
  } catch (err) {
    console.log('STRIPE SUCCESS ERR', err);

    // Răspuns JSON indicând eșecul plății
    res.json({ success: false });
  }
};
// plataOData s=1
// plataIn2Rate s=2
// plataIn6Rate s=6
// session.mode: 'subscription',
// session.subscription: 'sub_1Nmtg4ErAFtQn57CESurff4K', id ul 


  