import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CheckBox = props => {

    const inputRef = React.useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <Container>
            <label className="custom-checkbox">
                <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}/>
                <span className="custom-checkbox__checkmark">
                    <i className="bx bx-check"></i>
                </span>
                {props.label}
            </label>
        </Container>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox


const Container = styled.div`
    .custom-checkbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        cursor: pointer;

        &:hover {
            color: var(--main-color);
        }

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .custom-checkbox__checkmark {
            margin-right: 10px;
            height: 15px;
            width: 15px;
            border: 1px solid var(--txt-second-color);

            i {
                transform: scale(0);
                transition: transform 0.3s ease;
            }
        }

        input:checked ~ .custom-checkbox__checkmark {
            background-color: var(--main-color);
            border: 1px solid var(--main-color);
            color: var(--txt-white);
        }

        input:checked ~ .custom-checkbox__checkmark > i {
            transform: scale(1);
        }
    }
`;