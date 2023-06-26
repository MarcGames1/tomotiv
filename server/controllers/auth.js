import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from 'jsonwebtoken'
require('dotenv').config();
import { nanoid } from 'nanoid';

import { SESClient, CloneReceiptRuleSetCommand } from '@aws-sdk/client-ses';
import { createSendEmailCommand, getParams } from '../AwsEmailHelper/Index';

import { awsConfig } from "../awsConfig/awsConfig";





 const client = new SESClient(awsConfig);

export const register = async (req, res) => {
try{
   
    const { nume, email, password } = req.body

    // validation 

    if(!nume) return res.status(400).send("Numele este obligatoriu")
    if(!password || password.length < 6 ) 
        return res.status(400).send("Parola trebuie sa aiba cel putin 6 caractere")
    let userExist = await User.findOne({ email}).exec();
    if (userExist) return res.status(400).send("Exista un utilizator cu acest Email")

    //hash password
    const hashedPassword = await hashPassword(password);
    const lowercaseEmail = email.toLowerCase();
    const user = new User({
      nume,
      email: lowercaseEmail,
      password: hashedPassword,
    });
    await user.save();

    console.log('saved USER', user)
    res.status(200).json({ok : true})
} catch(err) {
    console.log(err);
    res.status(400).send(err)
}
};


export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const lowercaseEmail = email.toLowerCase();
        // verifica daca in DB exista un User cu adresa de email din req.body
        const user = await User.findOne({ email: lowercaseEmail }).exec();
        if(!user) return res.status(400).send("Utilizatorul nu exista")

        // verificam parola 
        const match = await comparePassword(password, user.password).then(console.log('password matched'))
        if(  !match) return res.status(400).send('Utilizator negasit sau Parola Gresita')
        // Creaza JWT
        try {
          const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
          });
          console.log('TOKEN CREAT', token);
          //send token in cookie\
          res.cookie('token', token, {
            httpOnly: true,
            // secure: true, // cu HTTPS 
          });
        } catch (error) {
            console.log('ERROR => ',error)
        }
        //return user and token to client exclude hashedpassword

        user.password = undefined;

        
        
        
       
        
        // send user JSON Response to client
        res.json(user);

        

    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR Try again");
    }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.json({message: "Te-ai delogat cu succes"})
    } catch (error) {
         console.log(error);
         res.status(400).send('ERROR Try again');
    }
}

export const currentUser = async( req, res) =>{
    console.log(req.auth)
    try {
          const user = await User.findById(req.auth._id)
            .select('-password')
            .exec();
          console.log('current user', user)
          return res.json({ ok: true });
    } catch (error) {
         console.log(error);
          res
            .status(400)
            .json( error );
    }
}



export const forgotPassword =async (req, res) =>{
    try {
        const {email} = req.body;
        // console.log(email);

        const shortCode = nanoid(6).toUpperCase()
        const user = await User.findOneAndUpdate({email}, {passwordResetCode: shortCode});
        if (!user) return res.status(401).send("Nu s-a gasit utilizatorul")
        // trimitem email
        const params = getParams(
          [email],
          'Codul de Resetare a Parolei',
          `  <html>
                <h1>Reset password link </h1>
                <p>Foloseste acest Link pentru resetarea parolei</p>
                <h2 style="color:red;">${shortCode} </h2>
                </html>`
        );
const trimiteEmailResetareParola = createSendEmailCommand(params);
try {
          const emailSent = await client.send(trimiteEmailResetareParola);
          console.log(emailSent);
            res.json({ ok: true });
    
    } catch (error) {
        console.error(error.message)
    }

    } catch (error) {
        console.log(error.message)
    }
}

export const resetPassword = async (req, res) =>{
    try {
        const { email, code, newPassword } = req.body;
        const hashedPassword = await hashPassword(newPassword)
        const user = User.findOneAndUpdate(
          {
            email,
            passwordResetCode: code,
          },
          {
            password: hashedPassword,
            passwordResetCode: undefined,
          }
        ).exec();
        res.json({ ok:true });
        console.table({ email, code });
    } catch (error) {
        console.error(error.message)
        return res.status(400).send("Error! try again");
    }
}