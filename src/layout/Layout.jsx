import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import { Footer } from '../layout'
import ProductViewModal from '../components/product/ProductViewModal'

import Routes from '../routes/Routes'
import styled from 'styled-components'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <Container>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                    <ProductViewModal/>
                </Container>
            )}/>
        </BrowserRouter>
    )
}

export default Layout


const Container = styled.div`
    /* margin-top: 170px;
    margin-bottom: 2rem;
    min-height: 100vh; */

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
            padding: 0 0px;
        }
    }

    .main {
        margin-top: var(--header-height);
        margin-bottom: 2rem;
        min-height: 100vh;

        @media only screen and (max-width: 1024px) {
            margin-top: calc(var(--header-tablet-height) + 20px);
        }

        @media only screen and (max-width: 600px) {
            margin-top: calc(var(--header-mobile-height) + 10px);
        }
    }
`;