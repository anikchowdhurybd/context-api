import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div className="home-page">
            <h3>This is Home:{category}</h3>
            <Categories></Categories>
        </div>
    );
};

export default Home;