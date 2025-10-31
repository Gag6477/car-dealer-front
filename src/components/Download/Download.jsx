import Container from '../Container/Container';
import Text from '../Text/Text';
import Title from '../Title/Title';
import { Link } from 'react-router';
import s from "./Download.module.sass"
import { FaApple } from "react-icons/fa"
import { FaGooglePlay } from "react-icons/fa6"
import phone from "../../assets/img/Iphone.png"

const Download = () => {
    return (
        <section className={s.main}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.block}>
                        <Title text="Shop Used Cars, Whether You're Nn The Lot Or On The Go" />
                        <Text text="Download our app to save cars and create alerts, scan window stickers on our lot for more details, and even call dibs on a car by holding it for up to 7 days." />
                        <div className={s.buttons}>
                            <Link className={s.button}>
                                <FaApple />
                                <div className={s.line}>
                                </div>
                                <div className={s.heading}>

                                    <div className={s.subtitle}>Download on the</div>
                                    <div className={s.title}>Apple Store</div>
                                </div>
                            </Link>
                            <Link className={s.button}>
                                <FaGooglePlay />
                                <div className={s.line}>
                                </div>
                                <div className={s.heading}>

                                    <div className={s.subtitle}>Get in on</div>
                                    <div className={s.title}>Google Play</div>
                                </div>

                            </Link>
                        </div>
                    </div>
                    <div className={s.img}>
                        <img src={phone} alt="phone"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Download