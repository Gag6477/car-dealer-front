import React from 'react'
import Slider from 'react-slick'
import { MdOutlineLocalGasStation, MdSpeed } from "react-icons/md"
import { TbManualGearbox } from "react-icons/tb"
import More from '../../components/More/More'
import s from './Hero.module.sass'



const Slide = ({ price, model, fuel, transmission, mileage, image }) => {
  return (
    <div className={s.slide} style={{backgroundImage: `url(${image})`}}>
      <div className={s.content}>
        <div className={s.price}>${price}</div>
        <div className={s.model}>{model}</div>
        <div className={s.fuel}>
          <MdOutlineLocalGasStation />
          <span>{fuel}</span>
        </div>
        <div className={s.mileage}>
          <MdSpeed />
          <span>{mileage}</span>
        </div>
        <div className={s.transmission}>
          <TbManualGearbox />
          <span> {transmission}</span>
        </div>
        <More />
      </div>
    </div>

  )


}

const slides = [
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: " AMG SPEEDSHIFT TCT 9-speed automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: " AMG SPEEDSHIFT TCT 9-speed automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: " AMG SPEEDSHIFT TCT 9-speed automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  },
  {
    price: 85000,
    model: "Mercedes-AMG C63s",
    fuel: "petrol",
    transmission: " AMG SPEEDSHIFT TCT 9-speed automatic",
    mileage: "3489",
    image: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-109-65d79697e865a.jpg?crop=0.651xw:0.549xh;0.0897xw,0.326xh&resize=1200:*"

  }
]

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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