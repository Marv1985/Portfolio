import './Contact.css'
import { useForm } from "react-hook-form"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = () => {
      emailjs
        .sendForm('service_e7x8zas', 'template_bdzz1wa', form.current, {
          publicKey: 'ejcMDdG0HzSXhDJhO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        reset()
    };
  
    return (
      <div className="contact_form max_width">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>

          {/* Name */}
          <input type="text" {...register("Name", { required: true, maxLength: 100, pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/ })}
          aria-invalid={errors.Name ? "true" : "false"}
          />
          {errors.Name?.type === "required" && (
            <p role="alert">Name is required</p>
          )}

          {/* Email */}
          <input type="email" {...register("Email", { required: true, maxLength: 254 })} 
          aria-invalid={errors.Email ? "true" : "false"}
          />
          {errors.Email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}

          {/* Message */}
          <textarea type="text" {...register("Message",{ required: true, maxLength: 500 })} 
          aria-invalid={errors.Message ? "true" : "false"}
          />
           {errors.Message?.type === "required" && (
            <p role="alert">Message is required</p>
          )}
          
          <input type="submit" />
        </form>
      </div>
    )
}

export default Contact