import React from 'react';
import FilterLink from '../containers/FilterLink.js';

const Footer = ({
    store
}) => {
    return (
        <div>
            Show:
            <FilterLink store={store} filter="SHOW_ALL">All</FilterLink>
            {", "}
            <FilterLink store={store} filter="SHOW_ACTIVE">Active</FilterLink>
            {", "}
            <FilterLink store={store} filter="SHOW_COMPLETED">Completed</FilterLink>
        </div>
    )
}

export default Footer;