import { S3Client, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { awsConfig } from '../awsConfig/awsConfig';
const client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
  },
});


export const getImage = async (req, res) => {
  try {
    
    const { key } = req.params;
    const command = new GetObjectCommand({
      Bucket: 'marwebelearning',
      Key: key,
    });
    const response = await client.send(command);
    const imageStream = response.Body;

    // Setează tipul de conținut și furnizează stream-ul imaginii către frontend
    res.set('Content-Type', 'image/jpeg');
    imageStream.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { key } = req.params;
   
    const command = new DeleteObjectCommand({
            Bucket: 'marwebelearning',
            Key: key,
    });
    await client.send(command);

    res.status(204).end();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};