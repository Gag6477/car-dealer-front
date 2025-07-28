import React from 'react'
import Slider from 'react-slick'
import Container from '../Container/Container'
import s from "./Reviews.module.sass"
import Title from '../Title/Title'
import { FaCircleCheck, FaStar } from 'react-icons/fa6'
import Arrow from '../Arrow/Arrow'

const reviews = [
    {
        rate: 4,
        isVerified: true,
        title: "Sales process was simple and easy",
        text: "Sales process was simple and easy. Maximillion was friendly and I didn’t feel...",
        author: "Gagik Yeghiazaryan"
    },
     {
        rate: 3,
        isVerified: true,
        title: "Sales process was simple and easy",
        text: "Sales process was simple and easy. Maximillion was friendly and I didn’t feel...",
        author: "Gagik Yeghiazaryan"
    }, 
    {
        rate: 5,
        isVerified: true,
        title: "Sales process was simple and easy",
        text: "Sales process was simple and easy. Maximillion was friendly and I didn’t feel...",
        author: "Gagik Yeghiazaryan"
    },
     {
        rate: 1,
        isVerified: true,
        title: "Sales process was simple and easy",
        text: "Sales process was simple and easy. Maximillion was friendly and I didn’t feel...",
        author: "Gagik Yeghiazaryan"
    },
]

const ReviewItem = ({review}) => {
    return(
        <article className={s.item}>
            <div className={s.rate}>
                <div className={s.stars}>
                {
                Array.from({length: 5 }).map((_, i) => {
                return <div  key={i} className={`${s.star} ${i < review.rate ? s.active : ""}`}>
                    <FaStar/>
                </div>
                })
            }
            </div>
            <div className={s.verified}>
                <FaCircleCheck/>
                <span>Verified</span>
            </div>
            </div>
            <h3 className={s.heading}>Sales process was simple and easy</h3>
            <blockquote className={s.comment}>Sales process was simple and easy. Maximillion was friendly and I didn't feel...</blockquote>
            <cite className={s.author}>Ali Tufan</cite>

        </article>
    )
}

const Reviews = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Arrow dir="right"/>,
        prevArrow: <Arrow dir="left"/>
    }
    return (
        <section className={s.reviews}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.top}>
                        <Title text="What our customers say" />
                        <p className={s.text}>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
                    </div>
                    <Slider {...settings}>
                        {
                            reviews.map((r, i) => {
                                return<ReviewItem key={i} review={r}/>
                            }
                        )
                        }
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Reviews

