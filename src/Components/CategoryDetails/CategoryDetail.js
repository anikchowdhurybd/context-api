import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const category = useContext(CategoryContext);

    const { count } = props
    return (
        <div>
            <h2>this is category Details: {count}</h2>
            <h6>Selected Category:{category}</h6>
        </div>
    );
};

export default CategoryDetail;