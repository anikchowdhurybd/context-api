import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);

    return (
        <div>
            <h2>This is category Details:</h2>
            <h6>Selected Category:{category}</h6>
        </div>
    );
};

export default CategoryDetail;