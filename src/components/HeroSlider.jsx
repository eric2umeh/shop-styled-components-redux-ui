import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Button } from '../ui'
import styled from 'styled-components'

const HeroSlider = props => {
    
    const data = props.data

    const timeOut = props.timeOut ? props.timeOut : 3000

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(
        () => {
            const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
            setActiveSlide(index)
        },
        [activeSlide, data],
    )

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1
        setActiveSlide(index)
    }
 
    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide()
            }, timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    }, [nextSlide, timeOut, props])

    return (
        <Container>
            <div className="hero-slider">
                {
                    data.map((item, index) => (
                        <HeroSliderItem key={index} item={item} active={index === activeSlide}/>
                    ))
                }
                {
                    props.control ? (
                        <div className="hero-slider__control">
                            <div className="hero-slider__control__item" onClick={prevSlide}>
                                <i className="bx bx-chevron-left"></i>
                            </div>
                            <div className="hero-slider__control__item">
                                <div className="index">
                                    {activeSlide + 1}/{data.length}
                                </div>
                            </div>
                            <div className="hero-slider__control__item" onClick={nextSlide}>
                                <i className="bx bx-chevron-right"></i>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </Container>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

const HeroSliderItem = props => (
    <ContainerItem>
        <div className={`hero-slider__item ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className={'hero-slider__item__info__title'}>
                    <span>{props.item.title}</span>
                </div>
                <div className="hero-slider__item__info__description">
                    <span>{props.item.description}</span>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <Button
                            icon="bx bx-cart"
                            animate={true}
                            size={7}
                        >
                            See Details
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={'shape'}></div>
                <img src={props.item.img} alt="" />
            </div>
        </div>
    </ContainerItem>
)

export default HeroSlider


const Container = styled.div`
    .hero-slider {
        height: 100vh;
        max-height: 1080px;
        overflow: hidden;
        position: relative;
        margin-bottom: 50px;
        margin-top: calc(var(--header-height) * -1);

        @media only screen and (max-width: 1024px) {
            margin-top: calc(var(--header-tablet-height) * -1);
        }

        @media only screen and (max-width: 600px) {
            margin-top: calc(var(--header-mobile-height) * -1);
        }
        .hero-slider__control {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);

            @media only screen and (max-width: 1024px) {
                bottom: 20px;
            }

            .hero-slider__control__item ~ .hero-slider__control__item {
                margin-left: 10px;
            }

            .hero-slider__control__item {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                cursor: pointer;

                &:hover {
                    color: var(--main-color);
                }

                .index {
                    font-size: 1.5rem;
                }
            }
        }
    }
`;


// Hero-Slide Item

const ContainerItem = styled.div`
    .hero-slider__item {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        position: absolute;
        inset: 0;
        
        @media only screen and (max-width: 1024px) {
            flex-direction: column-reverse;
            padding-top: var(--header-tablet-height);
        }

        @media only screen and (max-width: 600px) {
            padding-top: unset;
            padding-bottom: 40px;
        }

        &.active {
            opacity: 1;
            visibility: visible;
            pointer-events: visible;
        }

        .hero-slider__item__info {
            width: 58.33%;

            @media only screen and (max-width: 1024px) {
                width: 100%;
                flex-grow: 1;
            }

            .hero-slider__item__info__title,
            .hero-slider__item__info__description {
                margin-bottom: 30px;
                display: flex;

                @media only screen and (max-width: 1024px) {
                    margin-bottom: 5px;
                }
            }

            .hero-slider__item__info__title {
                font-family: "M PLUS Rounded 1c", sans-serif;
                font-weight: 600;
                font-size: 2rem;
                line-height: 3.75rem;
                overflow: hidden;
                color: #4267b2;

                @media only screen and (max-width: 600px) {
                    font-size: 1.5rem;
                    line-height: 1.75rem;
                }
            }

            .hero-slider__item__info__description {
                color: var(--txt-second-color);
                font-size: 1.2rem;
                line-height: 2.25rem;
                overflow: hidden;

                @media only screen and (max-width: 600px) {
                    font-size: 1.2rem;
                    line-height: 1.5rem;
                }
            }

            .hero-slider__item__info__btn {
                overflow: hidden;

                @media only screen and (max-width: 1024px) {
                    margin: 40px 0px;
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    justify-content: center;
                }
            }

            .hero-slider__item__info__title > span,
            .hero-slider__item__info__description > span,
            .hero-slider__item__info__btn button {
                display: block;
                transform: translateY(-100%);
                transition: transform 0.5s ease;
            }
        }

        &.active .hero-slider__item__info {
            .hero-slider__item__info__title > span,
            .hero-slider__item__info__description > span,
            .hero-slider__item__info__btn button {
                transform: translateY(0);
            }
        }

        .hero-slider__item__image {
            flex-grow: 1;
            position: relative;
            height: 100%;
            z-index: 99;
            pointer-events: none;

            @media only screen and (max-width: 1024px) {
                width: 100%;
                height: 60%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-grow: unset;
                z-index: 98;
            }

            img {
                height: 100vh;
                position: absolute;
                bottom: 0;
                right: 0;
                transform: scale(0) rotate(65deg);
                transition: transform 0.5s
                    cubic-bezier(0.175, 0.885, 0.32, 1.275);

                @media only screen and (max-width: 1024px) {
                    height: 100%;
                    position: relative;
                }
            }

            .shape {
                height: 442px;
                width: 442px;
                position: absolute;
                right: 0;
                top: 50%;
                border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
                transform: translate(0, -50%);
                transition: border-radius 13s ease;
                animation: border 10s infinite;

                @keyframes border {
                    0% {
                        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
                        background-color: #4267b2;
                    }
                    50% {
                        border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
                        background-color: #fe7e73;
                    }
                    100% {
                        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
                        background-color: #4267b2;
                    }
                }
                @media only screen and (max-width: 1024px) {
                    height: 250px;
                    width: 250px;
                    right: 50%;
                    transform: translate(50%, -50%);

                    @keyframes border {
                    0% {
                        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
                        background-color: #4267b2;
                    }
                    50% {
                        border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
                        background-color: #fe7e73;
                    }
                    100% {
                        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
                        background-color: #4267b2;
                    }
                }
                }
            }
        }

        &.active .hero-slider__item__image > img {
            transform: scale(1) rotate(0);
        }
    }
`;

