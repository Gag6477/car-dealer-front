import React from 'react'
import s from "./Footer.module.sass"
import Container from '../Container/Container'
import Text from '../Text/Text'
import Title from '../Title/Title'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={s.main}>
      <Container>
        <div className={s.wrap}>
          <section className={s.join}>
            <div className={s.heading}>
              <Title text='Join BoxCar' />
              <Text text='Recive pricing updates, shopping tips & more!' />
            </div>
            <label className={s.label}>
              <input className={s.input} type="text" placeholder='You email address' />
              <button className={s.button} >Sign Up</button>
            </label>
          </section>
          <hr />
          <section className={s.menu}>
            <div className={s.imp}>
              <h3 className={s.text}>Company</h3>
              <ul className={s.ul}>
                <li className={s.link}>About Us</li>
                <li className={s.link}>Blog</li>
                <li className={s.link}>Services</li>
                <li className={s.link}>FAQs</li>
                <li className={s.link}>Terms</li>
                <li className={s.link}>Contact Us</li>
              </ul>
            </div>
            <div className={s.imp}>
              <h3 className={s.text}>Quick Links</h3>
              <ul className={s.ul}>
                <li className={s.link}>Get in Touch</li>
                <li className={s.link}>Help center</li>
                <li className={s.link}>Live chat</li>
                <li className={s.link}>How it works</li>
              </ul>
            </div>
            <div className={s.imp}>
              <h3 className={s.text}>Our Brands</h3>
              <ul className={s.ul}>
                <li className={s.link}>Toyota</li>
                <li className={s.link}>Porsche</li>
                <li className={s.link}>Audi</li>
                <li className={s.link}>BMW</li>
                <li className={s.link}>Ford</li>
                <li className={s.link}>Nissan</li>
                <li className={s.link}>Peugeot</li>
                <li className={s.link}>Volkswagen</li>
              </ul>
            </div>
            <div className={s.imp}>
              <h3 className={s.text}>Vehicles Type</h3>
              <ul className={s.ul}>
                <li className={s.link}>Hatchback</li>
                <li className={s.link}>SUV</li>
                <li className={s.link}>Hybrid</li>
                <li className={s.link}>Electric</li>
                <li className={s.link}>Coupe</li>
                <li className={s.link}>Truck</li>
                <li className={s.link}>Convertible</li>
              </ul>
            </div>
            <div className={s.imp}>
              <h3 className={s.text}>Sale Hours</h3>
              <ul className={s.ul}>
                <li className={s.link}>Monday – Friday: 09:00AM – 09:00 PM</li>
                <li className={s.link}>Saturday: 09:00AM – 07:00PM</li>
                <li className={s.link}>Sunday: Closed</li>
              </ul>
              <div className={s.connectwithus}>
                <h3 className={s.text}>Connect With Us</h3>
                <div className={s.logo}>
                  <IoLogoInstagram />
                  <IoLogoFacebook />
                  <IoLogoLinkedin />
                  <IoLogoTwitter />
                </div>
              </div>
            </div>
          </section>
          <section className={s.copyright}>
            <p className={s.example}>© 2024 exemple.com. All rights reserved.</p>
            <div className={s.right}>
            <p className={s.terms}>Terms & Conditions</p>
            <ul className={s.privacy}>
              <li className={s.notice}>Privacy Notice</li>
            </ul>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  )
}

export default Footer