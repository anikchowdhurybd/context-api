import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>This is Header:{category} </h2>
            <button onClick={() => setCategory(category + 1)}>Increase</button>
        </div>
    );
};

export default Header;