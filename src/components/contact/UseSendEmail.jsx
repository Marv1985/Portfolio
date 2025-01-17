import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const UseSendEmail = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const form = useRef();

  const sendEmail = (data, reset) => {
    emailjs
      .sendForm('service_e7x8zas', 'template_bdzz1wa', form.current, {
        publicKey: 'ejcMDdG0HzSXhDJhO',
      })
      .then(
        () => {
          setShowSvg(false);
          setSuccess(true);
          console.log('Message sent successfully');
          reset(); // Reset the form after successful submission
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
