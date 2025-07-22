import React from 'react'
import s from "./Presentation.module.sass"
import Container from '../Container/Container'
import { BsArrowUpRight } from 'react-icons/bs'
import Title from '../Title/Title'
import Button from '../Button/Button'
import Text from '../Text/Text'
import present from "../../assets/img/presentation.jpg"

const Presentation = () => {
  return (
    <div className={s.presentation}>
        <Container>
            <div className={s.wrap}>
        <div className={s.info}>
            <Title text='Online, in-person,everywhere'/>
            <Text text="Choose from thousands of vehicles from multiple brands and buy online with Click & Drive, or visit us at one of our dealerships today."/>
            <Button text='Get Started' rounded='normal' type="info" icon={<BsArrowUpRight/>} dir='rtl' fill={true}/>
        </div>
        <div className={s.img}>
            <img src={present} alt="" />
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Presentation