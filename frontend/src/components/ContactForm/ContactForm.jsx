'use client'
import React, {useState, useRef} from 'react'
import ApiClient from '@/Classes/ApiClient';
import toast from 'react-hot-toast';
import Router from 'next/navigation';
// de facut ty page pt tracking
const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath)

const inputClassName = 'input input-bordered';
const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const formRef = useRef(null); // referința către elementul form
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const sendData = async () =>{
    try {
      const response = await api.post('/form-send', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        phone: phone
      });
      console.log(response);
      toast.success(response.message);
      resetState()
    } catch (error) {
      console.log(error);
      toast.error('Mesajul nu a fost trimis!');
      resetState();
    }
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    console.log(lastName);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   sendData()

    try {
      const data = api.post('/form-send', data);
      console.log(data);
      toast.success(data.message);
      resetState();
    } catch (error) {
      console.log(error);
      resetState();
    }
  };

  const resetState = () => {
    setEmail('');
    setPhone('')
    setMessage('');
    setFirstName('');
    setLastName('');
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className=" form-control">
          <input
            className={inputClassName}
            name="firstName"
            placeholder="nume"
            onInput={handleFirstNameChange}
          />
          <input
            className={inputClassName}
            name="lastName"
            placeholder="Prenume"
            onInput={handleLastNameChange}
          />
          <input
            type="email"
            className={inputClassName}
            name="email"
            placeholder="Email"
            onInput={handleEmailChange}
            required
          />
          <input
            placeholder="Telefon format: 123-456-7890"
            className={inputClassName}
            type="tel"
            id="phone"
            name="phone"
            onInput={handlePhoneChange}
            required
          />
        </div>
        <textarea
          placeholder="Lasa-ne un mesaj si te contactam noi "
          className="textarea textarea-bordered textarea-lg w-full "
          onInput={handleMessageChange}
        ></textarea>
        <button
          onSubmit={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Trimite
        </button>
      </form>
    </div>
  );
}

export default ContactForm