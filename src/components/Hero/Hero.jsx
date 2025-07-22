import React from 'react'
import Slider from 'react-slick'
import {MdSpeed } from "react-icons/md"
import { TbManualGearbox } from "react-icons/tb"
import s from './Hero.module.sass'
import Container from '../Container/Container'
import { Link } from 'react-router'
import Button from '../Button/Button'
import { BsArrowUpRight } from 'react-icons/bs'
import {LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia'
import { PiGasPump } from 'react-icons/pi'

const NextArrow = ({onClick}) => {
  return <div
 className={`${s.arrow} ${s.next}`}
    onClick={onClick}>
      <LiaAngleRightSolid/>
  </div>
}
const PrevArrow = ({onClick}) => {
  return <div
  className={`${s.arrow} ${s.prev}`}
    onClick={onClick}>
      <LiaAngleLeftSolid/>
  </div>
}

const Slide = ({ price, model, fuel, transmission, mileage, image }) => {
  return (
    <div className={s.slide} style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <div className={s.content}>
          <div className={s.price}>${price}</div>
          <div className={s.model}>{model}</div>
          <div className={s.details}>
            <div className={`${s.detail} ${s.fuel}`}>
              <PiGasPump />
              <span>{fuel}</span>
            </div>
            <div className={`${s.detail} ${s.mileage}`}>
              <MdSpeed />
              <span>{mileage} Miles</span>
            </div>
            <div className={`${s.detail} ${s.transmission}`}>
              <TbManualGearbox />
              <span> {transmission}</span>
            </div>
          </div>
          <Link to="#">
          <Button type='classic' rounded="normal" dir='rtl' text='Learn More' fill={true} icon={<BsArrowUpRight/>}/>
          </Link>
        </div>
      </Container>
    </div>

  )


}

const slides = [
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: "Automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: "Automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: "Automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: "Automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"
  }
  
]

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  }
  return (
    <Slider {...settings}>
      {
        slides.map(slide => <Slide {...slide} />)
      }
    </Slider>
  )
}

export default Hero