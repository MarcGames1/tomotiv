import { SendEmailCommand } from '@aws-sdk/client-ses';

/**
 * Assign the project to a list of employees.
 * @param {Object} config -  Source: string | undefined;
    Destination: {
        ToAddresses: string[];
    };
    ReplyToAddresses: (string | undefined)[];
    Message: {
        Body: {
            Html: {
                Charset: string;
                Data: string;
            };
        };

          const params = {
      Source: process.env.EMAIL_FROM,
      Destination: { ToAddresses: ['george.marcu20@gmail.com'] },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message:{
        Body:{
            Html:{
                Charset: 'UTF-8',
                Data: `
                <html>
                <h1>Reset password link </h1>
                <p>Foloseste acest Link pentru resetarea parolei</p>
                </html>
                `
            }
        },
        Subject: {
            Charset: 'UTF-8',
                Data: `Link Resetare Parola`
        }
      }
    };
 
 * @returns  @alias SendEmailComand


          const params = {
      Source: process.env.EMAIL_FROM,
      Destination: { ToAddresses: ['youremail@domain.xx'] },
      ReplyToAddresses: [process.env.EMAIL_FROM],
      Message:{
        Body:{
            Html:{
                Charset: 'UTF-8',
                Data: `
                <html>
                <h1>Reset password link </h1>
                <p>Foloseste acest Link pentru resetarea parolei</p>
                </html>
                `
            }
        },
        Subject: {
            Charset: 'UTF-8',
                Data: `Link Resetare Parola`
        }
      }
    };
*/
  export const createSendEmailCommand = (params) => {

  return new SendEmailCommand({
    Destination: params.Destination,
    Message: params.Message,
    Source: params.Source,
    ReplyToAddresses: params.ReplyToAddresses,
  });
};

// import { SendEmailCommand } from '@aws-sdk/client-ses';
// import { sesClient } from './libs/sesClient.js';

// const createSendEmailCommand = (toAddress, fromAddress) => {
//   return new SendEmailCommand({
//     Destination: {
//       /* required */
//       CcAddresses: [
//         /* more items */
//       ],
//       ToAddresses: [
//         toAddress,
//         /* more To-email addresses */
//       ],
//     },
//     Message: {
//       /* required */
//       Body: {
//         /* required */
//         Html: {
//           Charset: 'UTF-8',
//           Data: 'HTML_FORMAT_BODY',
//         },
//         Text: {
//           Charset: 'UTF-8',
//           Data: 'TEXT_FORMAT_BODY',
//         },
//       },
//       Subject: {
//         Charset: 'UTF-8',
//         Data: 'EMAIL_SUBJECT',
//       },
//     },
//     Source: fromAddress,
//     ReplyToAddresses: [
//       /* more items */
//     ],
//   });
// };


/**
@param destination_emails :string[] array of emails
@param message :String Mesaj HTML email
@param subject :String Subject
*/
export const getParams = (destination_emails, subject,message) =>{

  return {
    Source: process.env.EMAIL_FROM,
    Destination: { ToAddresses: destination_emails },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `${message}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `${subject}`,
      },
    },
  };
}