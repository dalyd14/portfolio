import React, {useState } from 'react'
import './nav.css'

import Container from '../Container'

const Nav = () => {
    const navOptions = [
        {
            title: 'Bootcamp Projects',
            className: 'bp-menu-item '
        },
        {
            title: 'Personal Projects',
            className: 'pp-menu-item '
        },
        {
            title: 'About',
            className: 'ab-menu-item '
        },
        {
            title: 'Contact',
            className: 'ct-menu-item '
        }
    ]

    const [container, setContainer] = useState(-1)

    const [menuPressed, setMenuPressed] = useState(true)

    const switchContainer = (e) => {
        setMenuPressed(false)
        setContainer(e.target.closest('li').getAttribute('data-id'))
    }
    const pressMenu = (e) => {
        if (!menuPressed) {
            setMenuPressed(true)
        }
    }

    return (
        <nav>
            <ul className="file-cabinet">
                <li className="file-cabinet-menu">
                    <div className="menu-button-div">
                        <span 
                            className="material-icons cursor-pointer" 
                            style={ menuPressed ? {color: 'var(--gunmetal)'} : {color: 'white'}}
                            onClick={pressMenu}>menu</span>
                    </div>

                    <h3>{menuPressed && 'Menu'}</h3>
                </li>
                { navOptions.map((nav, i) => 
                    (<li 
                        onClick={switchContainer} 
                        className={
                            'file-item ' + 
                            nav.className + 
                            (menuPressed ? 'cursor-pointer' : '') +
                            ((!menuPressed && ((Number(container) >= 0) && (Number(container) < i))) ? 'option-down' : '') +
                            ((!menuPressed && ((Number(container) >= 0) && (Number(container) === i))) ? 'option-selected' : '')
                        } 
                        data-id={i}
                        key={i}>
                        <h3>{nav.title}</h3>
                        <div className={ 
                            'component-container ' + 
                            (((!menuPressed) && (Number(container) >= 0) && (Number(container) === i)) ? 'component-visible' : '')
                        }>
                            {
                                !menuPressed &&
                                Number(container) >= 0 &&
                                Number(container) === i && 
                                <Container container={container}></Container>
                            }                            
                        </div>
                    </li>)
                ) }
            </ul>
        </nav>
    )
}

export default Nav