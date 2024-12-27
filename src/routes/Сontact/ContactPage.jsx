import { useState } from "react";
import s from "./ContactPage.module.css"
import { IMaskInput } from 'react-imask';
import { useDispatch } from "react-redux";
import { otp } from "../Contacts/contactsSlice";

export const ContactPage = () => {

  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [mes, setMes] = useState("")
  const [photo, setPhoto] = useState("")

  const disp = useDispatch()

  const handleAdd = () => {
    if (name.trim() && tel.trim() && mes.trim() && photo.trim()) {
      disp(otp({ name, tel, mes, photo }))
      alert("С вами скоро свяжутся")
    } else {
      alert("Пожалуйста, заполните все поля")
    }
  }

  return (
    <div className={s.container}>
      <div className={s.topFlex}>
        <img src="/photos/image.png" alt="" />
        <div className={s.textFlex}>
          <div>
            <h1>О себе</h1>
            <p>Я — фотограф, увлеченный красотой природы. Моя цель — запечатлеть удивительные моменты и атмосферу окружающего мира, от величественных гор до тихих лесов и живописных водоемов. Я верю, что каждая фотография может рассказать свою историю и вызвать эмоции.</p>
          </div>
          <p>Я всегда открыт для новых проектов и сотрудничества. Если вы хотите обсудить идеи или заказать фотосессию, не стесняйтесь связаться со мной!</p>
        </div>
      </div>
      <div className={s.botFlex}>
        <p>Свяжитесь со мной любым удобным способом или заполните форму и я сам выйду с Вами на связь</p>
        <div className={s.inputDiv}>
          <div className={s.inputFlex}>
            <input placeholder="Имя" className={s.input} value={name} onChange={e => setName(e.target.value)} type="text" />
            <IMaskInput placeholder="Телефон" mask={'+{7}(000)000-00-00'} className={s.input} value={tel} onChange={e => setTel(e.target.value)} type="tel" />
            <input placeholder="Ссылка на соц. сеть" className={s.input} value={mes} onChange={e => setMes(e.target.value)} type="text" />
          </div>
          <textarea maxLength={2500} placeholder="Раскажите о своём фото сете" className={s.text} value={photo} onChange={e => setPhoto(e.target.value)} type="text" />
        </div>
        <button className={s.btn} onClick={() => handleAdd()}>сохранить</button>
      </div>
    </div>
  )
};