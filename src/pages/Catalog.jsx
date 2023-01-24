import React, { useCallback, useState, useEffect, useRef } from 'react'

import { Helmet } from '../ui'
import { CheckBox } from '../ui'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import { Button } from '../ui'
import InfinityList from '../components/InfinityList'
import styled from 'styled-components'

const Catalog = () => {

    const initFilter = {
        category: [],
        color: [],
        size: []
    }

    const productList = productData.getAllProducts()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "COLOR":
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case "SIZE":
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.color.length > 0) {
                temp = temp.filter(e => {
                    const check = e.colors.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }

            if (filter.size.length > 0) {
                temp = temp.filter(e => {
                    const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Product"> 
            <Container>
                <div className="catalog">
                    <div className="catalog__filter" ref={filterRef}>
                        <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                            <i className="bx bx-left-arrow-alt"></i>
                        </div>
                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                product portfolio
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    category.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                label={item.display}
                                                onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                                checked={filter.category.includes(item.categorySlug)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                Colour
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    colors.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                label={item.display}
                                                onChange={(input) => filterSelect("COLOR", input.checked, item)}
                                                checked={filter.color.includes(item.color)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__title">
                                Size
                            </div>
                            <div className="catalog__filter__widget__content">
                                {
                                    size.map((item, index) => (
                                        <div key={index} className="catalog__filter__widget__content__item">
                                            <CheckBox
                                                label={item.display}
                                                onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                                checked={filter.size.includes(item.size)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="catalog__filter__widget">
                            <div className="catalog__filter__widget__content">
                                <Button size={6} bg="blue" onClick={clearFilter}>Remove filter</Button>
                            </div>
                        </div>
                    </div>
                    <div className="catalog__filter__toggle">
                        <Button size={6} bg="blue" onClick={() => showHideFilter()}>Filter</Button>
                    </div>
                    <div className="catalog__content">
                        <InfinityList
                            data={products}
                        />
                    </div>
                </div>
            </Container>
        </Helmet>
    )
}

export default Catalog


const Container = styled.div`

    .catalog {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        @media only screen and (max-width: 1024px) {
            flex-direction: column;
        }

        .catalog__filter {
            width: 20%;

            @media only screen and (max-width: 1024px) {
                width: max-content;
                height: 100vh;
                background-color: var(--color-light);
                padding: 1rem;
                position: fixed;
                left: 0;
                top: 70px;
                z-index: 100;
                box-shadow: $box-shadow;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }

            @media only screen and (max-width: 600px) {
                top: 40px;
            }

            &.active {
                transform: translateX(0);
            }

            .catalog__filter__widget {
                margin-bottom: 2rem;

                .catalog__filter__widget__title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    margin-bottom: 16px;
                }

                .catalog__filter__widget__content {
                    color: var(--txt-second-color);

                    .catalog__filter__widget__content__item {
                        margin-bottom: 13px;
                    }
                }
            }

            .catalog__filter__close {
                display: none;

                @media only screen and (max-width: 1024px) {
                    display: block;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
            }
        }

        .catalog__content {
            flex-grow: 1;

            @media only screen and (max-width: 1024px) {
                width: 100%;
            }
        }

        .catalog__filter__toggle {
            display: none;

            @media only screen and (max-width: 1024px) {
                display: block;
                margin-bottom: 2rem;
            }
        }
    }
`;