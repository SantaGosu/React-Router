import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    return(
		<>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
				<h5 className="card-title">Card title</h5>
					This is some text within a card body.
				</div>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-outline-primary card-btn">Go somewhere</a>
			</div>
		</>
    )
}

export default Card;