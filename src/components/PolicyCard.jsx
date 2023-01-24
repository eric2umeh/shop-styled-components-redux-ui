import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PolicyCard = props => {
    return (
        <Container>
            <div className="policy-card">
                <div className="policy-card__icon">
                    <i className={props.icon}></i>
                </div>
                <div className="policy-card__info">
                    <div className="policy-card__info__name">
                        {props.name}
                    </div>
                    <div className="policy-card__info__description">
                        {props.description}
                    </div>
                </div>
            </div>
        </Container>
    )
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default PolicyCard


const Container = styled.div`

    .policy-card {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        padding-left: 0;
        box-shadow: var(--boxshadow-primary);
        transition: transform 0.5s ease;
        border-radius: var(--bradius-5);

        &:hover {
            transform: translateY(-20px);
        }

        .policy-card__icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 40%;
            color: var(--main-color);

            i {
                font-size: 2rem;
            }
        }

        .policy-card__info {
            .policy-card__info__name {
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 10px;
            }

            .policy-card__info__description {
                /* font-size: 1rem; */
                color: var(--txt-second-color);
            }
        }
}
`;
