import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Helmet } from '../ui'
import CartItem from '../components/CartItem'
import { Button } from '../ui'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'
import styled from 'styled-components'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])
 
    return (
        <Helmet title="Cart">
            <Container>
                <div className="cart">
                    <div className="cart__info">
                        <div className="cart__info__txt">
                            <p>
                                You have {totalProducts} products in the cart
                            </p>
                            <div className="cart__info__txt__price">
                                <span>Price:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                            </div>
                        </div>
                        <div className="cart__info__btn">
                            <Button >
                                Order
                            </Button>
                            <Link to="/catalog">
                                <Button>
                                    Continue shopping
                                </Button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="cart__list">
                        {
                            cartProducts.map((item, index) => (
                                <CartItem item={item} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </Helmet>
    )
}

export default Cart


const Container = styled.div`
    .cart {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        @media only screen and (max-width: 600px) {
            flex-wrap: wrap;
        }

        .cart__list {
            width: 60%;

            @media only screen and (max-width: 600px) {
                width: 100%;
            }
        } 

        .cart__info {
            padding: 20px;
            margin-right: 30px;
            margin-top: 30px;
            box-shadow: $box-shadow;
            position: sticky;
            top: calc(70px + 20px);

            @media only screen and (max-width: 600px) {
                width: 100%;
                margin-right: 0;
                margin-bottom: 30px;
                position: unset;
            }

            .cart__info__txt {
                & > * {
                    margin-bottom: 10px;
                }

                p {
                    font-size: 1.25rem;
                }

                .cart__info__txt__price {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                    font-size: 1.25rem;

                    span:nth-child(2) {
                        font-size: 2rem;
                        color: var(--main-color);
                        font-weight: 600;
                    }
                }
            }

            .cart__info__btn__btn {
                & > * {
                    margin-bottom: 20px;
                }
            }
        }
    }
`;