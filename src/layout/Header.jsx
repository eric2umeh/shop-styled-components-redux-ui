import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/images/Logo-2.png'

const mainNav = [
    {
        display: "Home page",
        path: "/"
    },
    {
        display: "Product",
        path: "/catalog"
    },
    {
        display: "Accessory",
        path: "/accessories"
    },
    {
        display: "Contact",
        path: "/contact"
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);

    const menuLeft = useRef(null) 

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <Container>
            <div className="header" ref={headerRef}>
                <div className="container">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header__menu">
                        <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                            <i className='bx bx-menu-alt-left'></i>
                        </div>
                        <div className="header__menu__left" ref={menuLeft}>
                            <div className="header__menu__left__close" onClick={menuToggle}>
                                <i className='bx bx-chevron-left'></i>
                            </div>
                            {
                                mainNav.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                        onClick={menuToggle}
                                    >
                                        <Link to={item.path}>
                                            <span>{item.display}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="header__menu__right">
                            <div className="header__menu__item header__menu__right__item">
                                <i className="bx bx-search"></i>
                            </div>
                            <div className="header__menu__item header__menu__right__item">
                                <Link to="/cart">
                                    <i className="bx bx-shopping-bag"></i>
                                </Link>
                            </div>
                            <div className="header__menu__item header__menu__right__item">
                                <i className="bx bx-user"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header


const Container = styled.div`
    .header {
        background-color: var(--color-light);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
        height: 130px;
        transition: height 0.3s ease;

        @media only screen and (max-width: 1024px) {
            height: 70px;
            box-shadow: var(--boxshadow-primary);
        }

        @media only screen and (max-width: 600px) {
            height: 40px;
        }

        .container {
            height: 100%;
            width: 100%;
            max-width: 1620px;
            padding: 0 20px;
            margin: auto;

            @media only screen and (max-width: 1024px) {
                padding: 0 20px;
            }

            @media only screen and (max-width: 600px) {
                padding: 0 10px;
            }
        }

        &.shrink {
            height: 70px;
            box-shadow: var(--boxshadow-primary);
            z-index: 100;

            @media only screen and (max-width: 600px) {
                height: 40px;
            }
        } 

        .header__logo {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset: 0;
            pointer-events: none;

            img {
                height: 28px;
            }
        }

        .header__menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            font-size: 1.2rem;

            .header__menu__item ~ .header__menu__item {
                margin-left: 39px;

                @media only screen and (max-width: 1024px) {
                    margin-left: 20px;
                }

                @media only screen and (max-width: 600px) {
                    margin-left: 10px;
                }
            }

            .header__menu__item.active {
                font-weight: 600;
                color: var(--main-color);
            }

            .header__menu__item:hover {
                color: var(--main-color);
            }

            .header__menu__left,
            .header__menu__right {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }

            .header__menu__right {
                font-size: 1.8rem;

                .header__menu__right__item {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media only screen and (max-width: 1024px) {
                        margin-left: 10px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    font-size: 1.5rem;
                }
            }

            .header__menu__left {
                .header__menu__left__close {
                    display: none;
                }

                @media only screen and (max-width: 1024px) {
                    flex-direction: column;
                    background-color: var(--color-light);
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100vh;
                    justify-content: flex-start;
                    padding-top: 30px;
                    transform: translateX(-100%);
                    transition: transform 0.5s ease;

                    &.active {
                        transform: translateX(0);
                    }

                    .header__menu__left__item ~ .header__menu__left__item {
                        margin-left: unset;
                        margin-top: 20px;
                    }

                    .header__menu__left__close {
                        display: block;
                        position: absolute;
                        left: 20px;
                        font-size: 2.5rem;
                    }
                }
            }

            .header__menu__mobile-toggle {
                display: none;

                @media only screen and (max-width: 1024px) {
                    display: block;
                    font-size: 2.5rem;
                }
            }
        }
    }
`;