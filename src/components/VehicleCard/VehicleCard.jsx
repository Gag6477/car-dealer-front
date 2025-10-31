import React from 'react'
import s from "./VehicleCard.module.sass"
import { PiGasPump } from 'react-icons/pi'
import More from '../More/More'
import CardLabel from '../CardLabel/CardLabel'
import ActionLabel from '../ActionLabel/ActionLabel'

const VehicleCard = () => {
  return (
    <div className={s.card}>
      <div className={s.img}>
        <img src="https://hdpic.club/uploads/posts/2022-01/1641096910_8-hdpic-club-p-mersedes-cls-63-13.jpg" alt="" />

      </div>
      <div className={s.info}>
        <h3 className={s.heading}>M8 Competition</h3>
        <p className={s.desc}> 3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
        <hr />
        <div className={s.params}>
          <div className={s.param}>
            <PiGasPump />
            <span className={s.value}>20 Mile</span>
          </div>
          <div className={s.param}>
            <PiGasPump />
            <span className={s.value}>20 Mile</span>
          </div>
          <div className={s.param}>
            <PiGasPump />
            <span className={s.value}>20 Mile</span>
          </div>
        </div>
        <hr />
        <div className={s.footer}>
          <div className={s.price}>
            <s className={s.old}>$50,000</s>
            <div className={s.new}>$40,000</div>
          </div>
          <More outlined={false} text='View Details' type='alt' />
        </div>
      </div>
      <div className={s.label}>
        <CardLabel type='info' text="low Mileage" />
      </div>
      <div className={s.action}>
        <ActionLabel type="save" />
      </div>
    </div>
  )
}

export default VehicleCard