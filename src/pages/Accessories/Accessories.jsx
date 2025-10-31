import React from 'react'
import s from './Accessories.module.sass'
import Container from '../../components/Container/Container'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Title from '../../components/Title/Title'
import Gor from "../../assets/img/Gor.jpg"
import Bently from "../../assets/img/Bently.jpg"
import { FaCheck, FaFacebookF, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import Volvo from '../../assets/img/Volvo.jpg'
import CardLabel from '../../components/CardLabel/CardLabel'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Profile from '../../assets/img/Profile.jpg'
import Input from '../../components/Input/Input'
import Checkbox from '../../components/Checkbox/Checkbox'
import Button from '../../components/Button/Button'
import Textarea from '../../components/Textarea/Textarea'
import BlogCard from '../../components/BlogCard/BlogCard'




const Accessories = () => {
    return (
        <div className={s.accessories}>
            <Container>
                <BreadCrumbs />
                <div className={s.wrap_top}>
                    <Title text='BMW X6 M50i is designed to exceed your sportiest.' level={2} />
                    <div className={s.top_info}>
                        <div className={s.img_admin}>
                            <img src={Gor} alt="" />
                        </div>
                        <span className={s.author}>Admin</span>
                        <div className={s.dot}></div>
                        <p>Accessories,Exterior</p>
                        <div className={s.dot}></div>
                        <time className={s.author}>November 22, 2023</time>
                    </div>
                    <div className={s.img_bently}>
                        <img src={Bently} alt="" />
                    </div>
                    <div className={s.wrap_mid}>
                        <div className={s.top_text}>
                            <p className={s.disc_img}>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.</p>
                            <p className={s.disc_img}>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>
                        </div>
                        <div className={s.mid_light}>
                            <div className={s.color_mid}></div>
                            <blockquote class={s.blockquote}>
                                <p><em>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.</em></p>
                                <footer className={s.author_text}><cite>Luis Pickford</cite></footer>
                            </blockquote>
                        </div>
                        <div className={s.learning}>
                            <Title text='What you’ll learn' level={3} />
                            <ul className={s.ul}>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Become a UI/UX designer.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> You will be able to start earning money Figma skills.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Build a UI project from beginning to end.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Work with colors & fonts.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> You will create your own UI Kit.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Build & test a complete mobile app.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Learn to design mobile apps & websites.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Design 3 different logos.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Create low-fidelity wireframe.</li>
                                </div>
                                <div className={s.icontext}>
                                    <div className={s.icon}><FaCheck /></div>
                                    <li> Downloadable exercise files.</li>
                                </div>
                            </ul>
                        </div>
                        <div className={s.img_volvo}>
                            <img src={Volvo} alt="" />
                        </div>
                        <div className={s.requirements}>
                            <Title text='Requirements' level={3} />
                            <ul className={s.need}>
                                <li>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</li>
                                <li>A computer with a good internet connection.</li>
                                <li>Adobe Photoshop (OPTIONAL)</li>
                            </ul>
                        </div>
                        <div className={s.share}>
                            <p>Share this post </p>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaPinterest />
                            <div className={s.cardlabel}>
                                <CardLabel style type='share' text='Exterior' />
                                <CardLabel type='share' text='Fuel System' />
                                <CardLabel type='share' text='Sound' />
                            </div>
                        </div>
                        <div className={s.gor_speach}>
                            <div className={s.img_admin}>
                                <img src={Gor} alt="" />
                            </div>
                            <div className={s.text}>
                                <span className={s.author}>Admin</span>
                                <p className={s.admin_speach}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                            </div>
                        </div>
                        <div className={s.slider}>
                            <div className={s.prev}>
                                <div className={s.left}>
                                    <MdKeyboardArrowLeft />
                                    <span className={s.previous_post}> Previous Post</span>
                                </div>
                                <p className={s.xfive}>BMW X5 Gold 2024 Sport Review: Light on Sport</p>
                            </div>
                            <div className={s.next}>
                                <div className={s.right}>
                                    <span className={s.next_post}>Next Post </span>
                                    <MdKeyboardArrowRight />
                                </div>
                                <p className={s.xseven}>2024 BMW ALPINA XB7 with exclusive details,</p>
                            </div>
                        </div>
                        <div className={s.comments}>

                            <Title text='3 Comments' level={3} />
                            <div className={s.big_div}>
                                <div className={s.reply}>
                                    <div className={s.top_info}>
                                        <div className={s.img_admin}>
                                            <img src={Gor} alt="" />
                                        </div>
                                        <span className={s.admin_bold}>Admin</span>
                                        <time className={s.author}>November 22, 2023</time>
                                    </div>
                                    <span className={s.reply_div}>Reply</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam.</p>
                            </div>
                            <div className={s.big_div}>
                                <div className={s.reply}>
                                    <div className={s.top_info}>
                                        <div className={s.img_admin}>
                                            <img src={Gor} alt="" />
                                        </div>
                                        <span className={s.admin_bold}>Ali Tufan</span>
                                        <time className={s.author}>November 22, 2023</time>
                                    </div>
                                    <span className={s.reply_div}>Reply</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam.</p>
                            </div>
                            <div className={s.big_div}>
                                <div className={s.reply}>
                                    <div className={s.top_info}>
                                        <div className={s.img_admin}>
                                            <img src={Gor} alt="" />
                                        </div>
                                        <span className={s.admin_bold}>Dero</span>
                                        <time className={s.author}>January 3, 2024</time>
                                    </div>
                                    <span className={s.reply_div}>Reply</span>
                                </div>
                                <p>سي</p>
                            </div>
                        </div>
                        <div className={s.comm_typebox}>
                            <Title text='Leave a Comment' level={3} />
                            <div className={s.wrap_comm}>
                                <div className={s.inputcomm}>
                                    <div className={s.wrap_imput}>
                                        <div className={s.wrap_form}>
                                            <Input label="Name" />
                                            <Input label="Email" />
                                        </div>
                                        <Input label='website' />
                                    </div>
                                    <Checkbox label="Save my name, email, and website in this browser for the next time I comment." />
                                    <Textarea label="Review" />
                                </div>
                                <Button text="Submit Review" type='bluebutt' />
                            </div>
                        </div>
                    </div>
                    <div className={s.blog_card}>
                            <Title text='Related Posts'/>
                            <div className={s.blogcard}>
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                </div>
            </Container >
        </div >
    )
}


export default Accessories