import React from 'react';

const Link = ({
    active,
    onClick,
    children
}) => {

    const aStyle = {
        textDecoration: active?'none':''
    }
    return (
        <a href=""
           style={aStyle}
           onClick={onClick}
        >{children}</a>
    )
}

export default Link;
