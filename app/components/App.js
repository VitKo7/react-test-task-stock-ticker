import React from 'react';
import Header from './Header/Header';
import TickersContainer from './TickersContainer/TickersContainer';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />

            <TickersContainer />

            <Footer />
        </div>
    );
};

export default App;
