import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'


const Header = () => {
  return (
   <header>
            <nav className={style.nav}>
                <h1>Movie APP</h1>
                
                <ul className={style.navUl}>
               <Link to={'/'} style={{textDecoration:'none', color: 'inherit'}}>
                 <li className={style.navli}>Home</li>
                </Link>
                  <li className={style.navli}>Dashboard</li>
                  <li></li>
                </ul>
                <div>
                  <SearchInput/>
                </div>
            </nav>
   </header> 

  )
}

export default Header