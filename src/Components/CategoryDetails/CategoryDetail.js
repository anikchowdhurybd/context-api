import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const { name } = props.product

    return (
        <div>
            <h2>This is category Details:</h2>
            <h6>Selected Product:{name}</h6>
        </div>
    );
};

export default CategoryDetail;