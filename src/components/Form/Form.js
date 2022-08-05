import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className='bg-neutral-200'>
    <div className='flex'>
    <div className=''>
        <h1>Научу жить и работать в кайф без эмоциональных выгораний</h1>
        <p>Нам точно по пути, если ты:</p>
        <ul>
<li><p>Живешь не так, как мечтаеш</p></li>
<li><p>Испитываешь страх или тревожнасть и вокруг только негатив(не видиш просветов)</p></li>
<li><p>Потерял концентрацию, пытаешься охватить все сразу, но не получаешь желаемого результата</p></li>
<li><p>не понимаешт чего хочешь и твои ли ето желания, не знаешь что делать дальше</p></li>
<li><p>Не хочешь работать или что-то делать, но надо</p></li>
<li><p>Хочешь заниматься тем, что приносит удовольствие и доход</p></li>
<li><p>Понимаешь, что новый день похож на предыдущий, застрял в "дне сурка"</p></li>
        </ul>
    </div>
    <div className=''>
    <p>Записывайся сегодня ко мне на первую коуч-сесию</p>
    <p>c 75% скидкой и начни уже завтра жить в кайф</p>
    <form
    className='inline-block bg-current flex-wrap justify-center'
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input className='p-3 m-3' name="name" placeholder="Your Name" type="text" />
      <input className='p-3 m-3' name="email" placeholder="name@name.com" type="email" />
      <input className='p-3 m-3' type="tel" placeholder="tel" minlength="6" pattern="2[0-9]{3}-[0-9]{3}"/>
      <label className='#f8fafc'>I согласен на обработку моих персональних данных
  <input type="checkbox" />

</label>
      <button className='bg-gray-300 rounded-md' >Сделать первый шаг</button>
    </form>
    </div>
    </div>

    <div className=''>
        <ul className='flex'>
            <li className='px-5'><p>15 лет в международном бизнесе</p></li>
            <li className='px-5'><p>6 лет работы с управленцами бизнесов</p></li>
            <li className='px-5'><p>500 часов практики</p></li>
            <li className='px-5'><p>7 лет в продажи и развитии стартапов</p></li>
            <li className='px-5'><p>30+ довольних клиентов</p></li>
            <li className='px-5'><p>Лайф-коуч ICF c 2021 </p></li>
        </ul>
    </div>
  </div>
   
   
)

export default IndexPage