import React, {useState} from 'react'
//ТЕЛЕГРАМ JS
//https://api.telegram.org/bot5479935089:AAH9h44YFDqEz0tZSUhnuyKzIuXrFv25j68/getUpdates
//https://api.telegram.org/bot5479935089:AAH9h44YFDqEz0tZSUhnuyKzIuXrFv25j68/sendMessage?chat_id=-792663712&text=hi_i_am_a_bot


// document.querySelector('button').onc = function (){
//     let message = document.querySelector('.message').value;
//     const token = '5479935089:AAH9h44YFDqEz0tZSUhnuyKzIuXrFv25j68';
//     let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-792663712&text='    ;
//     let xhttp = new XMLHttpRequest();
//     xhttp.open("GET", url + message, true);
//     xhttp.send();
// }
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
            body: encodeURI({"form-name": "contact", ...this.state}),
        })
        .then(()=> alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault()
     }
   
      
         return (
         <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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