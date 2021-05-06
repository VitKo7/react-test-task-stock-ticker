import React from 'react';
import TickersChart from './TickersChart';
import SingleTicker from './SingleTicker';

const TickersContainer = () => {
    return (
        <div className="mainPart">
            <div className="sidebarLeft">
                <h4>Single Ticker:</h4>
                <div className="stock-ticker">
                    <SingleTicker />
                </div>
            </div>

            <div className="sidebarRight">
                <TickersChart />
            </div>
        </div>
    );
};

export default TickersContainer;
