import React from 'react';
import CharacterCard from '../component/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardContainer = () => {
    const [id, setId] = useState("")

    const getPeople = () => {
        fetch("https://swapi.dev/api/people",{
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        })
        .then(response => setId(response.data.results))
        .then(json => console.log(json))
        .catch(err => console.log("ERROR FOR GET: " + err.message))
    }

	useEffect(() => {
		getPeople()	
	}, []);

    return(
            <div className="cardHolder scrolling-wrapper">
            {id.map((person) => {
                return (
                    <CharacterCard id={person} />
                );
            })}
	        </div>
        );
}

export default CardContainer;