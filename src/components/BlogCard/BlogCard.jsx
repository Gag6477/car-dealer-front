import React from 'react'
import s from './BlogCard.module.sass'
import Title from '../Title/Title'
import Volvo from '../../assets/img/volvo.jpg'
import CardLabel from '../CardLabel/CardLabel'


const BlogCard = () => {
    return (
        <div className={s.cards}>
            <div className={s.img}>
    
            <img src={Volvo} alt="" />
            </div>
            <div className={s.label}>
                <CardLabel type='types' text="Sound" />
            </div>
            <div className={s.wrap}>
                <div className={s.card_info}>
                    <span className={s.author}>Admin</span>
                    <div className={s.dot}></div>
                    <time className={s.author}>November 22, 2023</time>
                </div>
                <Title text='2024 BMW ALPINA XB7 with exclusive details, extraordinary' level={5} />
            </div>
        </div>
    )
}


export default BlogCard