import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'

import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartItem = props => {

    const dispatch = useDispatch()

    const itemRef = useRef(null)

    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...item, quantity: quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }

    // const updateCartItem = () => {
    //     dispatch(updateItem({...item, quantity: quantity}))
    // }

    const removeCartItem = () => {
        console.log('removeCartItem')
        dispatch(removeItem(item))
    }

    return (
        <Container>
            <div className="cart__item" ref={itemRef}>
                <div className="cart__item__image">
                    {/* <img src={item.product.image01} alt="" />  */}
                </div>
                <div className="cart__item__info">
                    <div className="cart__item__info__name">
                        <Link to={`/catalog/${item.slug}`}>
                            {/* {`${item.product.title} - ${item.color} - ${item.size}`} */}
                        </Link>
                    </div>
                    <div className="cart__item__info__price">
                        {numberWithCommas(item.price)}
                    </div>
                    <div className="cart__item__info__quantity">
                        <div className="product__info__item__quantity">
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product__info__item__quantity__input">
                                {quantity}
                            </div>
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="cart__item__del">
                        <i className='bx bx-trash' onClick={() => removeCartItem()}></i>
                    </div>
                </div>
            </div>
        </Container>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem


const Container = styled.div`
    .cart__item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;

        .cart__item__image {
            // width: 10%;
            margin-right: 20px;

            img {
                height: 150px;
            }
        }

        .cart__item__info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-grow: 1;

            @media only screen and (max-width: 600px) {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;

                & > * {
                    margin-bottom: 10px;
                }
            }

            .cart__item__info__name {
                width: 40%;

                @media only screen and (max-width: 600px) {
                    width: 100%;
                }
            }

            .cart__item__info__name,
            .cart__item__info__price {
                font-size: 1.25rem;
            }
        }

        .cart__item__del {
            font-size: 1.5rem;

            i {
                cursor: pointer;

                &:hover {
                    color: var(--main-color);
                }
            }
        }
    }
`;