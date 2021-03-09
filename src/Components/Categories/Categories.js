import React from 'react';
import CategoryDetail from '../CategoryDetails/CategoryDetail';

const Categories = (props) => {
    const { count } = props;
    return (
        <div>
            <h2>Select Your category: {count}</h2>
            <CategoryDetail count={count} ></CategoryDetail>
        </div>
    );
};

export default Categories;