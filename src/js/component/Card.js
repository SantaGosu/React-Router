import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {

	const getPeopleId = () => {
		fetch(`https://swapi.dev/api/people/`, {
			method: "GET",
        	headers: {"Content-type": "application/json;charset=UTF-8"}
		})
		.then(response => response.json())
      	.then(json => console.log(json))
      	.catch(err => console.log("ERROR FOR GET: " + err.message))
	}

	useEffect(() => {
		getPeopleId()	
	})


    return(
		<>
		<div>
			<div className="card">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
				<h5 className="card-title">Card title</h5>
					This is some text within a card body.
				</div>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-outline-primary card-btn">Go somewhere</a>
			</div>
		</div>
		</>
    )
}

export default Card;