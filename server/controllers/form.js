import { SESClient, CloneReceiptRuleSetCommand } from '@aws-sdk/client-ses';
import { createSendEmailCommand, getParams } from '../AwsEmailHelper/Index';
import { awsConfig } from '../awsConfig/awsConfig';
const client = new SESClient(awsConfig);


export const sendForm = async (req, res) => {
  console.log(req.body);
  try {
   const {firstName, lastName, email, message, phone} = req.body;
   const params = getParams(
     [
       'george.marcu20@gmail.com',
       'alexandru@tomotiv.ro',
       'laura.iaurum20@gmail.com',
       'laura@tomotiv.ro',
     ],
     `FORMULAR TOMOTIV - ${firstName} ${lastName} `,
     `<html>
  <head>
    <meta charset="UTF-8">
    <title>Formular de contact</title>
  </head>
  <body>
    <h1>Formular de contact</h1>
    <p><strong>Nume:</strong> ${firstName} ${lastName}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${message}</p>
    
  </body>
</html>`
   );

    const emailFormular = createSendEmailCommand(params)
    try {
      const emailSend = await client.send(emailFormular);
      console.log(emailSend);
      
    } catch (error) {
      console.error(error.message);
    }

  } catch (error) {
    
  }
  res.send({ message: 'Iti Multumim pentu mesaj, Te vom contacta curand' });
};


