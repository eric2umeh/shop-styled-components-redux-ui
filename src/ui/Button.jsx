import styled, { css } from "styled-components";
import { Loading } from ".";
//v12 15

function Button(props) {

    props = { ...props, loading: Number(props.loading || 0) };

    return ( 
        <ButtonStyled {...{ ...props, disabled: props.loading || props.disabled }}>
            <span className="label">{props.children}</span>
            {props.loading ? (
                <span className="loading">
                <Loading /> 
                </span>
            ) : ""}
            {props.animate ? (
                <span className="btn__icon">
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : ""}
        </ButtonStyled>
    );
}

export default Button;


const ButtonStyled = styled.button.attrs((p) => {

    const animate = p.animate ? 'btn-animate' : ''
    const bg = p.bg || "light";
    const size = p.size || 6;

    return {
        bg,
        color: p.color || `${bg}-contrast`,
        size,
        animate,
    };
})`

    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: var(--color-${(p) => p.bg});
    color: var(--color-${(p) => p.color});
    height: var(--space-${(p) => p.size});
    width: auto;
    padding: 0 calc(var(--space-${(p) => p.size}) * 0.4);
    font-weight: bold;
    border-radius: var(--bradius-2);
    font-size: var(--fsize-${(p) => p.size - 2}, var(--fsize-1));
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;

    &:enabled:hover {
        background-color: var(
        --color-${(p) => p.bg}-hover,
        var(--color-${(p) => p.bg})
        );
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
        transform: translateX(100%);
    }

    &:enabled:hover {
        background-color: var(
        --color-${(p) => p.bg}-hover,
        var(--color-${(p) => p.bg})
        );
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
        transform: translateX(0);
    }

    &:enabled:active,
    &:disabled {
      box-shadow: none;
      box-shadow: inset 0px 2px 6px 1px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      opacity: 0.7;
    }

    ${(props) =>
      props.outline &&
      css`
        border-color: var(--color-${(p) => p.bg});
        background-color: transparent;
        color: var(--color-${(p) => p.bg});

        &:enabled:hover {
            background-color: var(--color-${(p) => p.bg});
            color: var(--color-${(p) => p.bg}-contrast);
        }

        &:enabled:active {
            background-color: var(
            --color-${(p) => p.bg}-hover,
            var(--color-${(p) => p.bg})
            );
        }
    `}

    ${(p) => p.loading && css`
        span.label {
            opacity: 0
        }

        span.loading {
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: var(--fsize-${p => Number(p.size) - 1});
            display: flex;
            align-items: center;
            justify-content: center; 
        }
    `}

    .label, 
    .btn__icon {
        display: block;
        transition: transform 0.5s ease;
    } 

    .label {
        padding: 1rem 2rem;
    }
`;
