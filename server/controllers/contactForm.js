import { createSendEmailCommand, getParams } from '../AwsEmailHelper/Index';
import Form from '../models/form';
import { ValidateFormFields } from './helpers';
import { SESClient, CloneReceiptRuleSetCommand } from '@aws-sdk/client-ses';
import { awsConfig } from '../awsConfig/awsConfig';


const client = new SESClient(awsConfig);


export const sendTestEmail = async (req, res) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: { ToAddresses: ['george.marcu20@gmail.com'] },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
                <html>
                <h1>Reset password link </h1>
                <p>Foloseste acest Link pentru resetarea parolei</p>
                </html>
                `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Link Resetare Parola`,
      },
    },
  };

  const sendEmailCommand = createSendEmailCommand(params);
  try {
    const emailSent = await client.send(sendEmailCommand);
    console.log(emailSent);
    res.json({ ok: true });
  } catch (error) {
    console.error(error.message);
  }
};

export const createForm = async (req, res) => {

  
  try {
    const { nume, email, phone, content, status } = req.body;
    const params = getParams(
      [
        'george.marcu20@gmail.com',
        'alexandru@tomotiv.ro',
        'laura.iaurum20@gmail.com',
        'laura@tomotiv.ro',
      ],
      `TOMOTIV - ${nume} a completat formularul`,
      `<html>
  <head>
    <meta charset="UTF-8">
    <title>Formular de contact</title>
  </head>
  <body>
    <h1>Formular de contact</h1>
    <p><strong>Nume:</strong> ${nume}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${content}</p>
    <p><strong>Statut:</strong> ${status}</p>
  </body>
</html>`
    );
    const errors = ValidateFormFields(nume, email,phone, content );
    if (errors.length > 0) {
    return res.status(400).json({ errors });
}
    const form = new Form({ nume, email, content, phone, status });
    await form.save();
    //trimite email catre noi

    const emailFormular = createSendEmailCommand(params)
    try {
      const emailSend = await client.send(emailFormular);
      console.log(emailSend);
      res.json({ ok: true });
    } catch (error) {
      console.error(error.message);
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(502).send(error.message);
  }
  
};



export const readAllForms = async (req, res) => {

   try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Obține un formular după id

export const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ msg: 'Form not found' });
    }
    res.json(form);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const updateForm = async (req, res) => {
  try {
    
    let form = await Form.findById(req.params.id);
    const updated = await Form.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    ).exec();
    res.json(updated);
    if (!form) {
      return res.status(404).json({ msg: 'Form not found' });
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// Șterge un formular

export const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndRemove(req.params.id);
    if (!form) {
      return res.status(404).json({ msg: 'Form not found' });
    }
    res.json({ msg: 'Form removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteAllForms = async (req, res) => {
  try {
    const { selectedForms } = req.body;

    let deleteQuery = {};
    if(selectedForms && selectedForms.length > 0) {
      deleteQuery = { _id: { $in: selectedForms } };
    }

    const result = await Form.deleteMany(deleteQuery);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}
