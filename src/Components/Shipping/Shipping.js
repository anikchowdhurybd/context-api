import React from 'react';

const Shipping = (props) => {
    const { count } = props;
    return (
        <div>
            <h3>this is shipping: {count} </h3>
        </div>
    );
};

export default Shipping;