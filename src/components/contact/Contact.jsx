import './Contact.css'
import { useForm } from "react-hook-form"
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { squircle } from 'ldrs'

const Contact = () => {
  squircle.register()
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSvg, setShowSvg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const form = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = () => {
      emailjs
        .sendForm('service_e7x8zas', 'template_bdzz1wa', form.current, {
          publicKey: 'ejcMDdG0HzSXhDJhO',
        }, setShowOverlay(true), setShowSvg(true))
        
        .then(
          () => {
            setShowSvg(false)
            setSuccess(true)
            console.log('Message sent successfully')
            reset()
          },
          (error) => {
            setShowSvg(false)
            setFailed(true)
            console.log('Message sending failed', error.text)
          },
        );
        // Show message after sending
        setTimeout(() => {
          setShowOverlay(false)
          setSuccess(false)
          setFailed(false)
        }, 3000);
    }; 
    
  
    return (
      <div className="contact_form max_width">
        
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <h1>Get in Touch</h1>
            {/* Overlay */}
            { showOverlay &&
                <div className="message_sending_overlay"> 
                  {showSvg &&
                  <l-squircle
                    size="32"
                    stroke="4.5"
                    stroke-length="0.15"
                    bg-opacity="0.1"
                    speed="0.9" 
                    color="#f7bf00" 
                  ></l-squircle>}
                  {success && <p>Thank you for reaching out! 
                  <br/>I'll get back to you shortly.</p>}
                  {failed && <p>Oops! Something went wrong. 
                  <br/>Please try again</p>}
                </div> }
            

          {/* Name */}
          <div>
            <label htmlFor="Name">NAME</label>
            <input id="Name" type="text" {...register("Name", { required: true, maxLength: 100, pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/ })}
            aria-invalid={errors.Name ? "true" : "false"}
            />
            {errors.Name?.type === "required" && (
              <p className='alert' role="alert">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="Email">EMAIL</label>
            <input id="Email" type="email" {...register("Email", { required: true, maxLength: 254 })} 
            aria-invalid={errors.Email ? "true" : "false"}
            />
            {errors.Email?.type === "required" && (
              <p className='alert' role="alert">Email is required</p>
            )}
          </div>

          {/* Message */}
          <div className="message_and_submit_button">
            <div>
                <label htmlFor="Message">DROP ME A MESSAGE</label>
                <textarea id="Message" type="text" {...register("Message",{ required: true, maxLength: 500 })} 
                aria-invalid={errors.Message ? "true" : "false"}
                />
                {errors.Message?.type === "required" && (
                  <p className='alert' role="alert">Message is required</p>
                )}
              </div>

            <input className='submit_button' type="submit" value="SEND MESSAGE" />
          </div>

        </form>
      </div>
    )
}

export default Contact