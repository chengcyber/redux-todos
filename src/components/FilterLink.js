import React from 'react';

const FilterLink = ({
    filter,
    store,
    text
}) => {
    const currentFilter = store.getState().visibilityFilter
    const aStyle = {
        textDecoration: currentFilter===filter?'none':''
    }
    return (
        <a href="#"
           style={aStyle}
            onClick={(e) => {
                e.preventDefault()
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })
            }}
        >{text}</a>
    )
}

export default FilterLink;