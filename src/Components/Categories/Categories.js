import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetails/CategoryDetail';



const allProducts = [
    { name: 'Lenovo', category: 'laptop' },
    { name: 'Asus', category: 'laptop' },
    { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' },
    { name: 'Nokia', category: 'mobile' },
    { name: 'Apple', category: 'mobile' },
    { name: 'Nikkon', category: 'camera' },
    { name: 'Canon', category: 'camera' },
    { name: 'Sony', category: 'camera' }
]

const Categories = () => {
    const { category } = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category);
        setProducts(matchProducts);
    }, [category])

    return (
        <div>
            <h2>Select Your category: {category}</h2>

            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;