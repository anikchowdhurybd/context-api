import React from 'react';
import Categories from '../Categories/Categories';
import '../Home/Home.css'
const Home = (props) => {
    const { count } = props;
    return (
        <div className="home-page">
            <h3>This is Home:{count}</h3>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;