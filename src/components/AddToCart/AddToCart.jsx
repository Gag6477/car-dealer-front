import React from 'react'
import s from './AddToCart.module.sass'
import brake from '../../assets/img/brake.jpg'
import Title from '../Title/Title'
import PageButton from '../PageButton/PageButton'


const AddToCart = () => {
    return (
        <div className={s.cart}>
            <div>
                <img src={brake} alt="" />
            </div>
            <div>
                <div>
                    <div>
                    <span>55555</span>
                    <span>(2)</span>
                    </div>
                    <button/>
                </div>
                <div>
                    <Title text='Front and Rear Brake Kit' level={5} />
                    <span></span>
                    <PageButton type='number'/>
                </div>
            </div>
        </div>
    )
}


export default AddToCart