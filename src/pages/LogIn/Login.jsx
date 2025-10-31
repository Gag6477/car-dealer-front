import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import s from './Login.module.sass'
import Input from '../../components/Input/Input'
import Container from "../../components/Container/Container"
import Button from '../../components/Button/Button'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router'
import Checkbox from '../../components/Checkbox/Checkbox'



const Login = () => {
    const [activeTab, setActiveTab] = useState("login")
    const containerRef = useRef(null)
    const tabRefs = useRef({ login: null, register: null })
    const [underline, setUnderline] = useState({ left: 0, width: 0, visible: false })

    const measure = useCallback(() => {
        const container = containerRef.current
        if (!container) return
        const activeRef = tabRefs.current[activeTab]
        if (!activeRef) return

        const containerRect = container.getBoundingClientRect()
        const btnRect = activeRef.getBoundingClientRect()

        const left = Math.round(btnRect.left - containerRect.left)
        const width = Math.round(btnRect.width)

        setUnderline({ left, width, visible: true })

    }, [activeTab])
    useEffect(() => {
        const container = containerRef.current
        if(!container) return 

        if(typeof ResizeObserver !== "undefined"){
            const ro = new ResizeObserver(measure)
            ro.observe(container)
            return () => ro.disconnect()
        }
        window.addEventListener("resize", measure)
        return () => window.removeEventListener("resize", measure)
    }, [measure])
    useLayoutEffect(() => {
        measure()
    }, [measure])
    return (
        <div className={s.loginPage}>
            <Container>
                <div className={s.wrap}>

                    <form className={s.form}>
                        <div className={s.titles} ref={containerRef} role="tablist">
                            <div style={{transform: `translateX(${underline.left}px)`, width: underline.width ? `${underline.width}px`:0, opacity: underline.visible ? 1 : 0}} className={s.line}></div>
                            <button role="tab" ref={el => (tabRefs.current.login = el)}  onClick={() => setActiveTab("login")} className={s.signin}>Sign in</button>
                            <button role="tab" ref={el => (tabRefs.current.register = el)} onClick={() => setActiveTab("register")} className={s.signin}>Register</button>
                        </div>
                        {activeTab === "login" ? (
                            <div className={s.login}>

                            <div className={s.input}>
                            <Input label="Username Or Email" />
                            <Input label="Password" type='password' />
                        </div>
                        <div className={s.add}>
                            <Checkbox label="Keep me signed in" />
                            <Link className={s.linksupport}>Lost Your Password?</Link>
                        </div>
                        <div className={s.loginbutton}>
                            <Button text="Login" type='bluebutt' dir="rtl" icon={<BsArrowUpRight />} />
                            </div>
                        </div>) : (
                        <div className={s.register}>
                            <div className={s.inputReg}>
                                <Input label="Full Name" type='text' />
                                <Input label="Email" type='email' />
                                <Input label="Phone Number" type='tel' />
                                <div className={s.terms}>
                                    <Checkbox label='I agree to the' />
                                    <Link className={s.linksupport}>Terms & Conditions</Link>
                                </div>
                            </div>
                            <Button text="Create Account" type='bluebutt' dir="rtl" icon={<BsArrowUpRight />} />
                            <div className={s.signinback}>
                                <p>Already have an account?</p>
                                <Link onClick={() => setActiveTab("login")} className={s.signinback}>Sign In</Link>
                            </div>
                        </div>)}
                    </form>
                </div>

            </Container>
        </div>
    )
}


export default Login