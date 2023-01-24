import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = props => {

    const style = {
        gap: props.gap ? `${props.gap}px` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : ''
    const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : ''
    const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : ''

    return (
        <Container className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
            {props.children}
        </Container>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    mdCol: PropTypes.number,
    smCol: PropTypes.number,
    gap: PropTypes.number
}

export default Grid


const Container = styled.div`
  
`;