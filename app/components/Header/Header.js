import React from 'react';
import ChooseInterval from './ChooseInterval';

const Header = () => {
    return (
        <div className="headerPart">
            <h1 className="col-md-4 text-center">Stock Blotter</h1>
            <ChooseInterval />
        </div>
    );
};

export default Header;
