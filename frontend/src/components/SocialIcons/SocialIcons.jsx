import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaGlobe,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';


const SocialIcons = ({contact}) => {

  return (
    <div className="flex flex-row justify-evenly">
      {contact.email && (
        <a
          className="text-primary"
          href={`mailto:${contact.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope color="primary" size={'2em'} />
        </a>
      )}
      {contact.linkedin && (
        <a
          className="text-primary"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={'2em'} />
        </a>
      )}
      {contact.facebook && (
        <a
          className="text-primary"
          href={contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color="primary" size={'2em'} />
        </a>
      )}
      {contact.instagram && (
        <a
          className="text-primary"
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="primary" size={'2em'} />
        </a>
      )}
      {contact.tikTok && (
        <a
          className="text-primary"
          href={contact.tikTok}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok color="primary" size={'2em'} />
        </a>
      )}
      {contact.website && (
        <a
          className="text-primary"
          href={contact.website}
          target="_blank"
          rel="follow"
        >
          <FaGlobe color="primary" size={'2em'} />
        </a>
      )}
    </div>
  );
}

export default SocialIcons


