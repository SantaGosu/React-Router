import React from "react";

const CharacterInfo = (props) => {


    return( 
        <div className="card ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG" className="card-img-top"  />
				<div className="card-body">
					<h5>Name: {props.person.name}</h5>
                    <p className="card-text"> Hair Color: {props.person.height} </p>
					<p className="card-text"> Hair Color: {props.person.mass} </p>
                    <p className="card-text"> Hair Color: {props.person.hair_color} </p>
					<p className="card-text"> Eye Color: {props.person.eye_color} </p>
                    <p className="card-text"> Hair Color: {props.person.birth_year} </p>
					<p className="card-text"> Gender: {props.person.gender} </p>
					<p className='card-text'>person {props.person.name} </p>
				</div>
			</div>
    )
}

export default CharacterInfo;