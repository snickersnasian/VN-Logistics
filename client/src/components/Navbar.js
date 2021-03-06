import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Logo from '../media/Logos/logotype.svg'

export const Navbar = () => {
    const [searchVal, setSearchVal] = useState('')

    const handleInput = (evt) => {
        setSearchVal(evt.target.value)
    }

    const handleEnter = (evt) => {
        if (evt.key === 'Enter'){
            console.log(searchVal) //action on enter
        }
    }


    return (

        <div className="nav-wrapper">
            <nav>
                <div className="logo">
                    <a href="/profile"><img src={Logo} alt="" /></a>
                </div>

                <div className="search-bar">
                    <input 
                        type="text" 
                        value={searchVal} 
                        name="search"
                        placeholder="Search order"
                        onChange={handleInput}
                        onKeyDown={handleEnter}
                    />
                </div>

                <div className="my-orders">
                    <button>
                    {'Đơn hàng'.toLowerCase()}
                    </button>
                </div>

                <div className="logout">
                    <a className="logout__btn">
                        {'đăng xuất'.toUpperCase()}
                    </a>
                </div>
            </nav>
        </div>
    )
}