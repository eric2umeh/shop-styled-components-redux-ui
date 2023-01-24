import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../assets/images/Logo-2.png'
import styled from 'styled-components'

const footerAboutLinks = [
    {
        display: "Introduce",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/about"
    },
    {
        display: "Recruitment",
        path: "/about"
    },
    {
        display: "News",
        path: "/about"
    },
    {
        display: "Shop system",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Warranty Policy",
        path: "/about"
    },
    {
        display: "Refund Policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <Container>
            <div className="container">
                <footer className="footer">
                        <div>
                            <div className="footer__title">
                                Support call center
                            </div>
                            <div className="footer__content">
                                <p>
                                    Contact order <strong>0123456789</strong>
                                </p>
                                <p>
                                Order problems <strong>0123456789</strong>
                                </p>
                                <p>
                                    Comments, complaints <strong>0123456789</strong>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="footer__title">
                            About Yolo
                            </div>
                            <div className="footer__content">
                                {
                                    footerAboutLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className="footer__title">
                                Customer care
                            </div>
                            <div className="footer__content">
                                {
                                    footerCustomerLinks.map((item, index) => (
                                        <p key={index}>
                                            <Link to={item.path}>
                                                {item.display}
                                            </Link>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="footer__about">
                            <p>
                                <Link to="/">
                                    <img src={logo} className="footer__logo" alt="" />
                                </Link>
                            </p>
                            <p>
                                Towards the goal of bringing a new joy of dressing every day to millions of Vietnamese consumers. Join Yolo towards a more active and positive life.
                            </p>
                        </div>
                </footer>
            </div>
        </ Container>
    )
}

export default Footer


const Container = styled.div`
    .container {
        height: 100%;
        width: 100%;
        max-width: 1620px;
        box-shadow: var(--boxshadow-primary);

        padding: 0 20px;
        margin: auto;

        @media only screen and (max-width: 1024px) {
            padding: 0 10px;
        }

        @media only screen and (max-width: 600px) {
            padding: 0 30px;
        }
    }

    .footer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 70px 0;
        font-size: 1.5rem;

        @media only screen and (max-width: 1024px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }

        .footer__title {
            text-transform: uppercase;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .footer__content {
            p {
                margin-bottom: 1.25rem;
                font-size: 0.8rem;
            }
        }

        .footer__about {
            p {
                margin-bottom: 2rem;
                font-size: 1.2rem;

            }
        }

        .footer__logo {
            height: 38px;
        }
    }
`;