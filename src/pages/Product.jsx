import React from 'react'

import { Helmet } from '../ui'
import Section, {SectionBody, SectionTitle} from '../ui/Section'
import ProductCard from '../components/product/ProductCard'
import ProductView from '../components/product/ProductView'

import productData from '../assets/fake-data/products'
import styled from 'styled-components'

const Product = props => {

    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Discover more
                </SectionTitle>
                <SectionBody>
                    <ProductContainer>
                        {
                            relatedProducts.map((item, index) => (
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
        </Helmet>
    )
}

export default Product


const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media only screen and (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;