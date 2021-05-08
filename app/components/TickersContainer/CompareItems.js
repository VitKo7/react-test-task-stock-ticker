import React from 'react';

// const CompareItems = ({ currItem, prevItem }) => {
const CompareItems = (currItem, prevItem) => {
    if (currItem > prevItem) {
        return <span className="arrow arrow-up">&#8593;</span>;
    } else if (currItem === prevItem) {
        return <span className="arrow arrow-same">&#8596;</span>;
    }
    return <span className="arrow arrow-down">&#8595;</span>;
};

export default CompareItems;
