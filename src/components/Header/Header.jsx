import React from 'react'
import s from './Header.module.sass'
import Container from '../Container/Container'
import { Link } from 'react-router'
import { FaUser } from 'react-icons/fa6'
import Button from '../Button/Button'

const navlinks = [
  { path: '/', title: "Home" }
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
          <div className={s.logo}><Link>McCars</Link></div>
          <nav className={s.nav}>
            <menu className={s.menu}>
              {
                navlinks.map(nav => <ListItems path={nav.path} title={nav.title} />
                )
              }
              <li>
                <FaUser />
                <Link>Sign In</Link>
              </li>
            </menu>
          </nav>
          <Button type='classic' rounded="full" dir='ltr' text='Submit Listing' />
        </div>
      </Container>
    </div>
  )
}

export default Header