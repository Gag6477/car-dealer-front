import React from 'react'
import s from "./VehicleCard.module.sass"
import { FaGasPump } from 'react-icons/fa6'
import More from '../More/More'
import CardLabel from '../CardLabel/CardLabel'

const VehicleCard = () => {
  return (
    <div className={s.card}>
        <div className={s.s=img}>
            <img src="" alt="" />
        </div>
        <div className={s.info}>
            <h3 className={s.heading}>M8 Competition</h3>
            <p className={s.desc}> 3.5 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>
            <hr />
            <div className={s.params}>
             <div className={s.param}>
                <FaGasPump/>
                <spam className={s.value}>20 Mile</spam>
             </div>
             <div className={s.param}>
                <FaGasPump/>
                <spam className={s.value}>20 Mile</spam>
             </div>
             <div className={s.param}>
                <FaGasPump/>
                <spam className={s.value}>20 Mile</spam>
             </div>
            </div>
            <hr />
            <div className={s.MiniFooter}>
                <div className={s.price}>
                    <s className={s.old}>$50,000</s>
                    <div className={s.new}>$40,000</div>
                </div>
                <More outlined={false} type='classic'/>
            </div>
        </div>
      <CardLabel type="low Mileage"/>
    <ActionLable type="save"/>
    </div>
  )
}

export default VehicleCard