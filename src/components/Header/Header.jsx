import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router'
import am from "../../assets/img/flags/am.png"
import en from "../../assets/img/flags/en.png"
import ru from "../../assets/img/flags/ru.png"
import Button from '../Button/Button'
import Container from '../Container/Container'
import s from './Header.module.sass'


const ListItems = ({ path, title }) => {
  return (
    <li className={s.list_item}>
      <Link to={path}>{title}</Link>
    </li>
  )
}



const Header = () => {
  const {pathname} = useLocation()
  const [lang, setLang] = useState("en")
  const [isOpen, setIsOpen] = useState(false)
  const  {t} = useTranslation()
  const {i18n} = useTranslation()
  const navlinks = [
    { path: '/', title: t("home")},
    { path: '/blog', title: t("blog") },
    { path: '/about', title: t("about") },
    { path: '/contact', title: t("contact") },
    { path: '/listings', title: t("listings") },
  ]
  const languages = [
    {id: "am", img: am},
    {id: "ru", img: ru},
    {id: "en", img: en},
  ]
const handleChangeLang = (id) => {
  setLang(id)
  i18n.changeLanguage(id)
  setIsOpen(false)
}
  return (
    <div className={s.header} style={{position: pathname === "/" ? "fixed" : "sticky"}}>
      <Container>
        <div className={s.wrap}>
          <div className={s.logo}><Link></Link></div>
          <nav className={s.nav}>
            <ul className={s.menu}>
              {
                navlinks.map((nav, i) => <ListItems key={i} path={nav.path} title={nav.title} />
                )
              }
              <li className={s.langbar}>
                <div className={s.selected} onClick={() => setIsOpen(!isOpen)}><img src={languages.find(i => i.id === lang).img} alt="" /></div>
                <div className={s.lang_list}>
                  { isOpen &&
                    languages
                    .filter(e => e.id !== lang)
                    .map(l =>  <div className={s.option} onClick={() => handleChangeLang(l.id)}><img src={l.img} alt="" /></div>)
                  }
                 
                </div>
              </li>
              <li className={s.signIn}>
                <FaUser />
                <Link>{t("signin")}</Link>
              </li>
            </ul>
          </nav>
          <Button type='classic' rounded="normal" dir='rtl' text={t("submit_listing")} icon={<BsArrowUpRight/>}/>
        </div>
      </Container>
    </div>
  )
}

export default Header