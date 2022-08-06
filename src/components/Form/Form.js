import React, {useState} from 'react'


const IndexPage = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        tel: ""
         })
     
         const handleChange = e =>{
             setFormState({
                 ...formState,
                 [e.target.name]: e.target.value,
     
             })
         }
     const handleSubmit = e => {
        fetch("/",{
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            // body: encode({
            //     "form-name": e.target.getAttribute("formState"),
            //     ...formState,
            //   })
            // body: encodeURI({"form-name": "contact", ...formState})
        })
        .then(()=> alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault()
     }
         return (
         <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
           <input type="hidden" name="form-name" value="contact"/>
           <input 
           id="name" 
           type="text" 
           name="name"
           onChange = {handleChange} 
           value = {formState.name} 
           className='p-3 m-3' 
           placeholder="Your Name" />
     
          <input 
           id="email" 
           type="email" 
           name="email"
           onChange = {handleChange} 
           value = {formState.email} 
           className='p-3 m-3' 
           placeholder="Your email" />
     
           <input 
           id="tel" 
           type="tel" 
           name="tel"
           onChange = {handleChange} 
           value = {formState.tel} 
           className='p-3 m-3' 
           placeholder="Your tel" />

           <input type="checkbox" />
           <button type="submit" className='bg-gray-300 rounded-md' >Сделать первый шаг</button>
         </form>
         )
}
   
   


export default IndexPage