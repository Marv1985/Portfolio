import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const UseSendEmail = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const form = useRef();

  const sendEmail = (resetForm) => {
    emailjs
      .sendForm('service_e7x8zas', 'template_bdzz1wa', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY, // Access environment variable,
      )
      .then(
        () => {
          setShowSvg(false);
          setSuccess(true);
          console.log('Message sent successfully');
          if (resetForm) resetForm(); // Reset form fields
        },
        (error) => {
          setShowSvg(false);
          setFailed(true);
          console.log('Message sending failed', error.text);
        },
      );

    setShowOverlay(true);
    setShowSvg(true);

    setTimeout(() => {
      setShowOverlay(false);
      setSuccess(false);
      setFailed(false);
    }, 3000);
  };

  return {
    sendEmail,
    showOverlay,
    showSvg,
    success,
    failed,
    form,
  };
};

export default UseSendEmail;
