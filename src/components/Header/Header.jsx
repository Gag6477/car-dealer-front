import React from 'react'
import s from './Header.module.sass'
import Container from '../Container/Container'
import { Link } from 'react-router'
import { FaUser } from 'react-icons/fa6'
import Button from '../Button/Button'
import { BsArrowUpRight } from 'react-icons/bs'

const navlinks = [
  { path: '/', title: "Home" },
  { path: '/Listings', title: "Listings" },
  { path: '/Blog', title: "Blog" },
  { path: '/Pages ', title: "Pages" },
  { path: '/About', title: "About" },
  { path: '/Contact', title: "Contact" },
]

const ListItems = ({ path, title }) => {
  return (
    <li className={s.list_item}>
      <Link to={path}>{title}</Link>
    </li>
  )
}



const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <div className={s.wrap}>
          <div className={s.logo}><Link>{import.meta.env.VITE_COMPANY_NAME}</Link></div>
          <nav className={s.nav}>
            <menu className={s.menu}>
              {
                navlinks.map((nav, i) => <ListItems key={i} path={nav.path} title={nav.title} />
                )
              }
              <li className={s.signIn}>
                <FaUser />
                <Link>Sign In</Link>
              </li>
            </menu>
          </nav>
          <Button type='classic' rounded="normal" dir='rtl' text='Submit Listing' icon={<BsArrowUpRight/>}/>
        </div>
      </Container>
    </div>
  )
}

export default Header