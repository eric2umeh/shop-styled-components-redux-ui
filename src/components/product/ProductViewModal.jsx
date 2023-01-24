import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'

import { Button } from '../../ui'

import { remove } from '../../redux/product-modal/productModalSlice'

import productData from '../../assets/fake-data/products'
import styled from 'styled-components'

const ProductViewModal = () => {

    const productSlug = useSelector((state) => state.productModal.value)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug]);

    return (
        <Container>
            <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
                <div className="product-view__modal__content">
                    <ProductView product={product}/>
                    <div className="product-view__modal__content__close">
                        <Button
                            size={6} 
                            bg="blue"  
                            onClick={() => dispatch(remove())}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductViewModal


const Container = styled.div`
    .product-view__modal {
        position: fixed;
        z-index: 101;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        .product-view__modal__content {
            margin: auto;
            padding: 2rem;
            background-color: var(--color-light);
            width: 50%;
            opacity: 0;
            transform: translateY(-250px);
            transition: transform 0.6s ease;
            position: relative;

            .product-view__modal__content__close {
                position: absolute;
                right: 0;
                top: 0;
            }
        }

        &.active .product-view__modal__content {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
