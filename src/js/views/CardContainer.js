import React from 'react';
import Card from '../component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardContainer = () => {
    return(
        <>
            <div className="cardHolder scrolling-wrapper">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
	        </div>
    </>
    );
}

export default CardContainer;