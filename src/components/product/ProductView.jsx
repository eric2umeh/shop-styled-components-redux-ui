import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import { useDispatch } from 'react-redux'

import { addItem } from '../../redux/shopping-cart/cartItemsSlide'
import { remove } from '../../redux/product-modal/productModalSlice'

import { Button } from '../../ui'
import numberWithCommas from '../../utils/numberWithCommas'
import styled from 'styled-components'

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            alert('Please choose color!')
            return false
        }

        if (size === undefined) {
            alert('Please choose a size!')
            return false
        }

        return true
    }

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                alert('Success')
            } else {
                alert('Fail')
            }
        }
    }

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(remove())
                props.history.push('/cart')
            } else {
                alert('Fail')
            }
        }
    }

    return (
        <Container>
            <div className="product">
                <div className="product__images">
                    <div className="product__images__list">
                        <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                            <img src={product.image01} alt="" />
                        </div>
                        <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                            <img src={product.image02} alt="" />
                        </div>
                    </div>
                    <div className="product__images__main">
                        <img src={previewImg} alt="" />
                    </div>
                    <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                        <div className="product-description__title">
                            Product details
                        </div>
                        <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                        <div className="product-description__toggle">
                            <Button size={7} bg="blue" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                                {
                                    descriptionExpand ? 'Collapse' : 'More'
                                }
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <h1 className="product__info__title">{product.title}</h1>
                    <div className="product__info__item">
                        <span className="product__info__item__price">
                            {numberWithCommas(product.price)}
                        </span>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Colour
                        </div>
                        <div className="product__info__item__list">
                            {
                                product.colors.map((item, index) => (
                                    <div key={index} className={`product__info__item__list__item ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                        <div className={`circle bg-${item}`}></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Size
                        </div>
                        <div className="product__info__item__list">
                            {
                                product.size.map((item, index) => (
                                    <div key={index} className={`product__info__item__list__item ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
                                        <span className="product__info__item__list__item__size">
                                            {item}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <div className="product__info__item__title">
                            Quantity
                        </div>
                        <div className="product__info__item__quantity">
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product__info__item__quantity__input">
                                {quantity}
                            </div>
                            <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                                <i className="bx bx-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="product__info__item">
                        <Button size={7} bg="blue" onClick={() => addToCart()}>Add To Cart</Button>
                        <Button size={7} bg="blue" onClick={() => goToCart()}>Buy Now</Button>
                    </div>
                </div>
                <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Product details
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                    <div className="product-description__toggle">
                        <Button size={7} onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Collapse' : 'See more'
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default withRouter(ProductView)


const Container = styled.div`
    .product {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .product__images {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            width: 60%;
            flex-wrap: wrap;

            @media only screen and (max-width: 1024px) {
                width: 80%;
            }

            @media only screen and (max-width: 600px) {
                width: 100%;
            }

            .product__images__list {
                width: 20%;

                .product__images__list__item {
                    cursor: pointer;
                }
            }

            .product__images__main {
                flex-grow: 1;
                padding-top: 100%;
                position: relative;

                img {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    height: 100%;
                    transform: translateX(-50%);
                }
            }
        }

        .product__info {
            flex-grow: 1;
            position: sticky;
            top: 70px;
            padding-top: 2rem;

            @media only screen and (max-width: 600px) {
                position: relative;
                top: unset;
            }

            .product__info__title {
                font-size: 2.5rem;
                font-weight: normal;
            }

            .product__info__item {
                margin-top: 2rem;

                .product__info__item__price {
                    color: var(--main-color);
                    font-size: 2rem;
                    font-weight: 600;
                }

                .product__info__item__title {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .product__info__item__list {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    .product__info__item__list__item {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 3px solid var(--txt-second-color);
                        cursor: pointer;
                        margin-right: 1rem;

                        @media only screen and (max-width: 600px) {
                            width: 40px;
                            height: 40px;
                        }

                        &.active {
                            border-color: var(--main-color);
                        }

                        &:hover {
                            border-color: var(--main-color);
                        }

                        .circle {
                            width: 40px;
                            height: 40px;
                            border-radius: 50%;

                            @media only screen and (max-width: 600px) {
                                width: 30px;
                                height: 30px;
                            }
                        }

                        .product__info__item__list__item__size {
                            font-size: 1.5rem;
                            text-transform: uppercase;
                        }
                    }
                }

                .product__info__item__quantity {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;

                    .product__info__item__quantity__btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 30px;
                        border: 2px solid var(--txt-second-color);
                        font-size: 1.5rem;
                        cursor: pointer;
                    }

                    .product__info__item__quantity__input {
                        display: flex;
                        align-items: center;
                        justify-content: center;;
                        height: 30px;
                        width: 90px;
                        font-size: 1.5rem;
                        border-top: 2px solid var(--txt-second-color);
                        border-bottom: 2px solid var(--txt-second-color);
                    }
                }

                button {
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                }
            }
        }
    }

    .product-description {
        width: 100%;
        padding: 2rem 2rem 3rem;
        height: 400px;
        overflow: hidden;
        position: relative;

        @media only screen and (max-width: 600px) {
            display: none;
        }

        &.mobile {
            display: none;

            @media only screen and (max-width: 600px) {
                display: block;
            }
        }

        &.expand {
            height: max-content;
        }

        .product-description__title {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 2rem 0;
        }

        .product-description__content {
            font-size: 1.25rem;
            line-height: 1.5rem;
            text-align: justify;
        }

        .product-description__toggle {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;