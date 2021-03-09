import React, { useContext } from 'react';
import { CategoryContext } from '../../App';




const Shipping = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is shipping: {category} </h3>
            <button onClick={() => setCategory(category + 1)}>Increment from Category </button>
        </div>
    );
};

export default Shipping;