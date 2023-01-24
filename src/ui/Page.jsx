import styled from 'styled-components';
import { device } from '../utils/responsive';

const Header = styled.div`
    /* min-height: 38px; */
    padding: 0 24px;
    font-size: 30px;
    font-weight: 500;

    @media ${device.tablet} {
        font-size: 20px;
        font-weight: 400;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: 1620px;
    padding: 0 50px;
    margin: auto;

    @media ${device.laptopS} {
        padding: 0 20px;
    }

    @media ${device.tablet} {
        padding: 0 10px;
    }
`;

function Page({title, children, ...rest}) {
    return (
        <div {...rest}>
            <Header>
                <span>{title}</span>
            </Header>
            <Content>
                {children}
            </Content>
        </div>
    )
}

export default Page;