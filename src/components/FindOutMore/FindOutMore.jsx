import React from 'react'
import Container from '../Container/Container'
import s from "./FindOutMore.module.sass"
import Button from '../Button/Button'
import { BsArrowUpRight } from 'react-icons/bs'
import bgImage from '../../assets/img/bgImage.jpg'

const FindOutMore = () => {
  return (
    <section className={s.main} style={{ background: `url(${bgImage}) no-repeat center center / cover`}}>
      <Container>
        <div className={s.wrap}>
         <h1 className={s.findOutMore}>We Make Finding The <br /> Right Car Simple</h1>
          <Button type='clear-btn' rounded="normal" dir='rtl' text='Find Out More' fill={true} icon={<BsArrowUpRight/>}/>
        </div>
      </Container>
    </section>
  )
}

export default FindOutMore