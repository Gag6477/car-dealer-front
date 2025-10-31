import React from 'react'
import Container from '../../components/Container/Container'
import s from './Details.module.sass'
import Title from '../../components/Title/Title'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ActionLabel from '../../components/ActionLabel/ActionLabel'
import CardLabel from '../../components/CardLabel/CardLabel'
import { TbBrandSpeedtest, TbCar, TbEngine, TbManualGearbox } from 'react-icons/tb'
import { MdOutlineDateRange, MdOutlineLocalGasStation, MdOutlineLocalOffer } from 'react-icons/md'
import Button from '../../components/Button/Button'
import audi from '../../assets/img/audi.jpg'
import Text from '../../components/Text/Text'
import { PiSteeringWheel } from 'react-icons/pi'
import { CgProfile } from 'react-icons/cg'
import { GiCarDoor } from 'react-icons/gi'
import { IoColorFillSharp } from 'react-icons/io5'
import { LiaNewspaper } from 'react-icons/lia'
import { FaCheck, FaRegFilePdf, FaStar } from 'react-icons/fa'
import More from '../../components/More/More'
import Input from '../../components/Input/Input'
import { BsArrowUpRight } from 'react-icons/bs'
import profileImg from '../../assets/img/dero.jpg'
import Textarea from '../../components/Textarea/Textarea'
import Checkbox from '../../components/Checkbox/Checkbox'
import VehicleCard from '../../components/VehicleCard/VehicleCard'
import Pagination from '../../components/Pagination/Pagination'


const Details = () => {
    return (
        <Container>
            <BreadCrumbs />
            <div className={s.wrap}>
                <header className={s.header}>
                    <div className={s.title}>
                        <Title text="Ranger Black - 2021" />
                        <Text text='2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate' />
                    </div>
                    <div className={s.top}>
                        <div className={s.cardlabel}>
                            <CardLabel type='label' text='2021' icon={<MdOutlineDateRange />} />
                            <CardLabel type='label' text='250 miles' icon={<TbBrandSpeedtest />} />
                            <CardLabel type='label' text='Manual' icon={<TbManualGearbox />} />
                            <CardLabel type='label' text='Petrol' icon={<MdOutlineLocalGasStation />} />
                        </div>
                        <div className={s.actionlabel}>
                            <div className={s.save}>
                                <span>Save</span>
                                <ActionLabel type="save" />
                            </div>
                            <div className={s.share}>
                                <span>Share</span>
                                <ActionLabel type="share" />
                            </div>
                            <div className={s.compare}>
                                <span>Compare</span>
                                <ActionLabel type="sheet" />
                            </div>
                        </div>
                    </div>
                </header>
                <div className={s.detailspage}>
                    <div className={s.carmedia}>
                        <div className={s.carwrap}>
                            <img src={audi} alt="Audi A8" className={s.carimag} />
                            <CardLabel type='classic' />
                            <Button type='classic' text='wef' style />
                        </div>

                        <Title text="Car Overview" level={3} />
                        <div className={s.overview}>
                            <div className={s.body}><div className={s.disc}><TbBrandSpeedtest /><span className={s.span}>Body</span></div>Sedan</div>
                            <div className={s.body}><div className={s.disc}><TbCar /><span className={s.span}>Mileage</span></div>250</div>
                            <div className={s.body}><div className={s.disc}><MdOutlineLocalGasStation /><span className={s.span}>Fuel Type</span></div>Petrol</div>
                            <div className={s.body}><div className={s.disc}><MdOutlineDateRange /><span className={s.span}>Year</span></div>2021</div>
                            <div className={s.body}><div className={s.disc}><TbManualGearbox /><span className={s.span}>Transmission</span></div>Manual</div>
                            <div className={s.body}><div className={s.disc}><PiSteeringWheel /><span className={s.span}>Drive Type</span></div>Rear-Wheel Drive</div>
                            <div className={s.body}><div className={s.disc}><CgProfile /><span className={s.span}>Condition</span></div>Used</div>
                            <div className={s.body}><div className={s.disc}><TbEngine /><span className={s.span}>Engine Size</span></div>4.0</div>
                            <div className={s.body}><div className={s.disc}><GiCarDoor /><span className={s.span}>Door</span></div>4 Doors</div>
                            <div className={s.body}><div className={s.disc}><TbEngine /><span className={s.span}>Cylinder</span></div>12</div>
                            <div className={s.body}><div className={s.disc}><IoColorFillSharp /><span className={s.span}>Color</span></div>Black</div>
                            <div className={s.body}><div className={s.disc}><LiaNewspaper /><span className={s.span}>VIN</span></div>FCB123792</div>
                        </div>
                        <div className={s.description}>

                            <Title text="Description" level={4} />
                            <div className={s.text}>
                                <p className={s.quisque}>
                                    Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr convallis enim eget laoreet. Aenean vitae nisl mollis, porta risusvel, dapibus lectus. Etiam ac suscipit eros, eget maximus
                                </p>
                                <p className={s.quisque}>
                                    Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat
                                    pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum
                                    mattis blandit nisl, et tristique elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium scelerisque.
                                </p>
                            </div>
                            <Button text='Car-Brochure.pdf' icon={<FaRegFilePdf />} type='light-blue' fill />
                        </div>
                        <div className={s.features}>
                            <Title text="Features" level={3} />
                            <div className={s.all}>
                                <div className={s.titleall}>

                                    <Title text="Interior" level={4} />
                                    <ul className={s.ul}>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Air Conditioner</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Digital Odometer</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Heater</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Leather Seats</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Panoramic Moonroof</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Tachometer</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className={s.titleall}>

                                    <Title text="Safety" level={4} />
                                    <ul className={s.ul}>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Anti-lock Braking</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Brake Assist</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Child Safety Locks</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Driver Air Bag</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Power Door Locks</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className={s.titleall}>

                                    <Title text="Exterior" level={4} />
                                    <ul className={s.ul}>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Fog Lights Front</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Rain Sensing Wiper</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Rear Spoiler</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Windows - Electric</li>
                                        </div>
                                    </ul>
                                </div>
                                <div className={s.titleall}>
                                    <Title text="Comfort & Convenience" level={4} />
                                    <ul className={s.ul}>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Android Auto</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Apple CarPlay</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Bluetooth</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> HomeLink</li>
                                        </div>
                                        <div className={s.icontext}>
                                            <div className={s.icon}><FaCheck /></div>
                                            <li> Power Steering</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={s.dimensions}>
                            <Title level={3} text='Dimensions & Capacity' />
                            <div className={s.everything}>

                                <div className={s.params}><span className={s.desc}>Length</span> <span>4950m</span></div>
                                <div className={s.params}><span className={s.desc}>Height</span> <span>1776mm</span></div>
                                <div className={s.params}><span className={s.desc}>Wheelbase</span> <span>2984mm</span></div>
                                <div className={s.params}><span className={s.desc}>Height (including roof rails)</span> <span>1876mm</span></div>
                                <div className={s.params}><span className={s.desc}>Luggage Capacity (Seats Up - Litres)</span> <span>450</span></div>
                                <div className={s.params}><span className={s.desc}>Luggage Capacity (Seats Down - Litres)</span> <span>850</span></div>
                                <div className={s.params}><span className={s.desc}>Width</span> <span>2140mm</span></div>
                                <div className={s.params}><span className={s.desc}>Width (including mirrors)</span> <span>2240mm</span></div>
                                <div className={s.params}><span className={s.desc}>Gross Vehicle Weight (kg)</span> <span>1550</span></div>
                                <div className={s.params}><span className={s.desc}>Max. Loading Weight (kg)</span> <span>1200</span></div>
                                <div className={s.params}><span className={s.desc}>Max. Roof Load (kg)</span> <span>350</span></div>
                                <div className={s.params}><span className={s.desc}>No. of Seats</span> <span>5</span></div>
                            </div>
                        </div>
                        <div className={s.map}>
                            <Title text='Location' level={3} />
                            <Text text="990 Metropolitan Ave, Brooklyn" />
                            <More text="Get Direction" type="alt" />
                            <div className={s.yandex_map}>
                                <iframe src="https://yandex.com/map-widget/v1/?ll=-118.258965%2C34.132079&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1ODIwNDQyNjE3EllVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EsIENhbGlmb3JuaWEsIENvdW50eSBvZiBMb3MgQW5nZWxlcywgR2xlbmRhbGUsIFdlc3QgUGFsbWVyIEF2ZW51ZSIKDayE7MIVSocIQg%2C%2C&z=21" allowFullScreen={true} style={{ position: "relative" }}>jh</iframe>
                            </div>
                        </div>
                        <div className={s.calc}>
                            <Title text="Financing Calculator" level={3} />
                            <div className={s.wrap}>
                                <div className={s.inputDollar}>
                                    <Input label="Price ($)" />
                                    <Input label="Price ($)" />
                                    <Input label="Price ($)" />
                                    <Input label="Price ($)" />
                                </div>
                                <Button text="Calculate" type='bluebutt' dir="rtl" icon={<BsArrowUpRight />} />
                            </div>
                        </div>
                        <div className={s.rating}>
                            <Title text='1 Review' level={3} />
                            <div className={s.current_rating}>
                                <div className={s.gradient}>
                                    <div className={s.span}>
                                        <div className={s.overallrating}>Overall Rating</div>
                                        <div className={s.count}>4.0</div>
                                        <div className={s.outof}>Out of 5</div>
                                    </div>
                                </div>
                                <div className={s.rating_items}>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>
                                    <div className={s.rating_item}>
                                        <div className={s.rating_text}>
                                            <div className={s.rating_name}>Comfort</div>
                                            <div className={s.rating_desc}>Perfect</div>
                                        </div>
                                        <div className={s.rating_value}>
                                            <div className={s.rating_star}><FaStar /></div>
                                            <div className={s.rating_number}>5.0</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={s.review}>
                                <div className={s.review_img}><img className={s.img} src={profileImg} alt="" /></div>
                                <div className={s.review_name}>Demo</div>
                                <div className={s.review_date}>November 30, 2023</div>
                            </div>
                            <div className={s.reviewStars}>
                                <div className={s.review_rate}>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p className={s.review_text}>4.8</p>
                                </div>
                                <div className={s.review_paregraph}>
                                    <p>Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis risus nec felis mollis,</p>
                                </div>
                            </div>
                        </div>

                        <div className={s.review_custom}>
                            <Title text='Add a review' level={3} />
                            <div className={s.rate_categories}>
                                <div className={s.each_category}>
                                    <span>Comfort</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={s.each_category}>
                                    <span>Exterior Styling</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={s.each_category}>
                                    <span>Performance</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={s.each_category}>
                                    <span>Interior Design</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={s.each_category}>
                                    <span>Value For The Money</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={s.each_category}>
                                    <span>Reliability</span>
                                    <div className={s.review_stars}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>

                            </div>

                            <div className={s.wrap}>
                                <div className={s.inputDollar}>
                                    <div className={s.form_wrap}>
                                        <Input label="Name" />
                                        <Input label="Email" />
                                    </div>
                                    <Checkbox label="Save my name, email, and website in this browser for the next time I comment." />
                                    <Textarea label="Review" />
                                </div>
                                <Button text="Submit Review" type='bluebutt' />
                            </div>
                        </div>
                    </div>

                    <aside className={s.aside}>
                        <div className={s.prices}>
                            <Title text="Our Price" level={4} />
                            <div className={s.offer}>
                                <div className={s.price}>
                                    <s className={s.old}>$180,000</s>
                                    <div className={s.new}>$165,000</div>
                                </div>
                                <p>Instant Saving: $15,000</p>
                            </div>
                            <Button type='bluebutt' icon={<PiSteeringWheel />} text='Make An Offer Price' />
                            <Button type='test-drive' icon={<MdOutlineLocalOffer />} text='Schedule Test Drive' />
                        </div>
                    </aside>
                </div>
                <section className={s.related_listings}>
                    <div className={s.top}>
                        <Title text="Related Listings" level={2} />
                        <More to='#' type='classic' text="View All" />
                    </div>
                    <div className={s.list}>
                        <VehicleCard />
                        <VehicleCard />
                        <VehicleCard />
                        <VehicleCard />
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default Details