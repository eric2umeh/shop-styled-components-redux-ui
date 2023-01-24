import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../../redux/product-modal/productModalSlice'

import { Button } from '../../ui'

import numberWithCommas from '../../utils/numberWithCommas'
import styled from 'styled-components'

const ProductCard = props => {

    const dispatch = useDispatch()

    return (
        <Container>
            <div className="product-card">
                <Link to={`/catalog/${props.slug}`}>
                    <div className="product-card__image">
                        <img src={props.img01} alt="" />
                        <img src={props.img02} alt="" />
                    </div>
                    <h3 className="product-card__name">{props.name}</h3>
                    <div className="product-card__price">
                        {numberWithCommas(props.price)}
                        <span className="product-card__price__old">
                            <del>{numberWithCommas(399000)}</del>
                        </span>
                    </div>
                </Link>
                <div className="product-card__btn">
                    <Button
                        bg="blue"
                        icon="bx bx-cart"
                        animate={true}
                        size={6}
                        onClick={() => dispatch(set(props.slug))}
                    >
                        Purchase
                    </Button>
                </div>
            </div>
        </Container>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard


const Container = styled.div`
    .product-card {
        text-align: center;
        margin-bottom: 30px;

        .product-card__image {
            padding-top: 100%;
            position: relative;
            overflow: hidden;
            margin-bottom: 30px;

            img {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                height: 100%;

                &:nth-child(1) {
                    transform: translateX(-50%) scale(1);
                    transition: transform 0.5s ease;
                }

                &:nth-child(2) {
                    transform: translateX(-50%) scale(0);
                }
            }

            &:hover img {
                &:nth-child(1) {
                    transform: translateX(-50%) scale(0);
                }

                &:nth-child(2) {
                    transform: translateX(-50%) scale(1);
                    transition: transform 0.5s ease;
                }
            }
        }

        .product-card__name {
            margin-bottom: 10px;
            color: var(--txt-second-color);
            font-size: 1.25rem;
            font-weight: normal;
        }

        .product-card__price {
            color: var(--txt-main-color);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 10px;

            .product-card__price__old {
                color: var(--txt-second-color);
                margin-left: 20px;
                font-weight: 300;
            }
        }

        .product-card__btn {
            @media only screen and (max-width: 1024px) {
                display: none;
            }
        }
    }
`;