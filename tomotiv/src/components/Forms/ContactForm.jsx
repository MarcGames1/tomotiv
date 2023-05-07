import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { Context } from '../../context';
import { useRouter } from 'next/router';
import { tw } from 'twind';
import { colors } from '../../styles';
import { formStyles, typography } from '../../styles';
import LoadingSpinner from '../ux/Spinner/Spinner';

const ContactForm = () => {
  return <div>ContactForm</div>;
};

export default ContactForm;
