import './Contact.css'
import { useForm } from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("Name", { required: true, maxLength: 100, pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/ })} />
        <input type="email" {...register("Email", { required: true, maxLength: 254 })} />
        <textarea type="text" {...register("Message",{ required: true, maxLength: 500 })} />
        
        <input type="submit" />
      </form>
    )
}

export default Contact