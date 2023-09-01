import EmailList from '../models/emailList'

export const  NewSletterSubscribe = async (req, res) =>{
  // avem middleware => inscriereNewsletterMiddleware

  // Răspundem cu succes
  res.status(200).send({ ok: true });
}

export const Unsubscribe = async (req, res) => {
  const { emailListID, emailID } = req.params;

  try {
    // Utilizează agregarea Mongoose pentru a căuta și șterge emailul din lista de emailuri
    await EmailList.updateOne(
      { _id: emailListID },
      { $pull: { emailEntries: { _id: emailID } } }
    );

    // Răspunde cu succes
    res.status(200).send({ ok: true });
  } catch (error) {
    // Răspunde cu eroare
    res.status(500).send('A apărut o eroare la dezabonare.');
  }
};

export const InscriereNewsLetterMiddleware = async (req, res, next) => {
  const { name, email, newsletterGeneral } = req.body;
  console.table({ name, email });
  
  if (!newsletterGeneral) {
    next();
    return;
  }
  // Verificăm dacă există deja o listă de e-mailuri cu numele newsletterSubscribers
  const listAlreadyExists = await EmailList.findOne({
    name: 'newsletterSubscribers',
  });
  // Verificăm dacă adresa de e-mail există deja în listă
  const emaiLEntryAlreadyExists = await EmailList.findOne({
    name: 'newsletterSubscribers',
    emailEntries: {
      $elemMatch: {
        email,
      },
    },
  });
  console.table({ listAlreadyExists, emaiLEntryAlreadyExists });
  // Dacă nu există o listă de e-mailuri, o creăm
  if (!listAlreadyExists) {
    const emailList = new EmailList({
      name: 'newsletterSubscribers',
      emailEntries:[{name, email}]
    });
    emailList.save();
    next();
    return
  }

  // Dacă adresa de e-mail nu există în listă, o adăugăm
  if (!emaiLEntryAlreadyExists) {
    await EmailList.updateOne(
      { name: 'newsletterSubscribers' },
      { $push: { emailEntries: [{ name, email }] } }
    );
  }

  // Iesim din middleware
  next();
}

export const InscriereListaAsteptareCurs = async (req, res) =>{
  const { name, email, numeCurs } = req.body;

  // Verificăm dacă există deja o listă de e-mailuri cu numele cursului
  const alreadyExist = await EmailList.findOne({
    name: numeCurs,
  });
  // Dacă nu există o listă de e-mailuri, o creăm
  if (!alreadyExist) {
    const newsletterList = new EmailList({ name: numeCurs });
    await newsletterList.save();
  } 
  // Verificăm dacă adresa de e-mail există deja în listă
const emaiLEntryAlreadyExists = await EmailList.findOne({
  name: numeCurs,
  emailEntries: {
    $elemMatch: {
      email,
    },
  },
});

  // Dacă adresa de e-mail nu există în listă, o adăugăm
  if (!emaiLEntryAlreadyExists) {
    await EmailList.updateOne(
      { name: numeCurs },
      { $push: { emailEntries: { name, email } } }
    );
  }
  // Răspundem cu succes
  res.status(200).send({ ok: true });
}

// Modal cu inscriere pe lista de asteptare,