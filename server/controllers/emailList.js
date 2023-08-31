import EmailList from '../models/emailList'

export const  NewSletterSubscribe = async (req, res) =>{
  const { name, email } = req.body;

  // Verificăm dacă există deja o listă de e-mailuri cu numele newsletterSubscribers
  let newsletterList = await EmailList.findOne({
    name: 'newsletterSubscribers',
  });

  // Dacă nu există o listă de e-mailuri, o creăm
  if (!newsletterList) {
    newsletterList = new EmailList({ name: 'newsletterSubscribers' });
  }

  // Adăugăm adresa de e-mail în listă
  newsletterList.emailEntries.push({ name, email });

  // Salvam lista de e-mailuri
  await newsletterList.save();

  // Răspundem cu succes
  res.status(200).send();
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
    res.status(200).send();
  } catch (error) {
    // Răspunde cu eroare
    res.status(500).send('A apărut o eroare la dezabonare.');
  }
};

