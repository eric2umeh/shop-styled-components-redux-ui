import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from '../ui'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../ui/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../layout/Grid'
import ProductCard from '../components/product/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import banner from '../assets/images/banner.png'
import styled from 'styled-components'

const Home = () => {
    return (
        <Helmet title="Home Page">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={10000}
            />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <PolicyContainer>
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </PolicyContainer>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>     
                    Top selling products of the week
                </SectionTitle>
                <SectionBody>
                    <ProductContainer>
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </ProductContainer>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    new product
                </SectionTitle>
                <SectionBody>
                    <ProductContainer>
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </ProductContainer>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}
            <Section>
                <SectionBody>
                    <Links to="/catalog">
                        <img src={banner} alt="" />
                    </Links>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    popular
                </SectionTitle>
                <SectionBody>
                    <ProductContainer>
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </ProductContainer>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home


const PolicyContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media only screen and (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media only screen and (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Links = styled(Link)`
    padding-left: 30px;

    @media only screen and (max-width: 1024px) {
        /* margin-left: 100px; */
    }

    img {
        max-width: 100%;
    }
`;