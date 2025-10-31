import React from 'react'
import s from './LoanCalculator.module.sass'
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { BsArrowUpRight } from 'react-icons/bs'


const LoanCalculator = () => {
    return (
        <div className={s.wrap}>
            <div className={s.firstHalf}>
                <div className={s.header}>
                    <Title text="Auto Loan Calculator" />
                    <p className={s.use}>Use our loan calculator to calculate payments over the life of your loan. Enter your information to see how much your monthly payments could be. You can adjust length of loan, down payment and interest rate to see how those changes raise or lower your payments.</p>
                </div>
                <div className={s.calc}>
                    <div className={s.inputDollar}>
                        <Input label="Price ($)" />
                        <Input label="Interest Rate" />
                        <Input label="Loan Time(year)" />
                        <Input label="Down Peyment" />
                    </div>
                    <Button text="Calculate" type='bluebutt' dir="rtl" icon={<BsArrowUpRight />} />
                </div>
            </div>
            <div className={s.secondHalf}>
                <div className={s.pricediv}>
                <div className={s.totalprice}>
                      <Title text='Monthly Payment' level={6}/>
                      <span className={s.priceNumber}>0$</span>
                </div>
                <div className={s.totalprice}>
                      <Title text='Total Interest' level={6}/>
                      <span className={s.priceNumber}>0$</span>
                </div>
                <div className={s.totalprice}>
                      <Title text='Total Payment' level={6}/>
                      <span className={s.priceNumber}>0$</span>
                </div>
                </div>
            </div>
        </div>
    )
}


export default LoanCalculator