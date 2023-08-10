'use client'
import React, {useState} from 'react'


const inputClassName = 'input input-bordered';
const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


     const handleFirstNameChange = (event) => {
       setFirstName(event.target.value);
       console.log(firstName);
     };

     const handleLastNameChange = (event) => {
       setLastName(event.target.value);
       console.log(lastName);
     };

     const handleEmailChange = (event) => {
       setEmail(event.target.value);
       console.log(email);
     };

     const handleMessageChange = (event) => {
       setMessage(event.target.value);
       console.log(message);
     };

     const handleSubmit = (event) => {
       event.preventDefault();
       const  data ={ firstName, lastName, email, message };

       console.log(data)
     };




  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <textarea
          placeholder="Lasa-ne un mesaj si te contactam noi "
          className="textarea textarea-bordered textarea-lg w-full "
          onInput={handleMessageChange}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
}

export default ContactForm