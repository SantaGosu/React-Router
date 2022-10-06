// import React, { useEffect, useState  } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CharacterInfo from '/CharacterInfo/CharacterInfo';
// import { useParams } from 'react-router-dom'

// const Person_Info = () => {

//     id = useParams;

//     const [person, getPerson] = useState([]);

//     const getPeople = () => {
//         fetch(`https://swapi.dev/api/people/${id}`)
//         .then(response => response.json())
//         .then(response => getPerson(response.results))
//         .catch(err => console.log("ERROR FOR GET: " + err.message))
//     }

// 	useEffect(() => {
// 		getPeople()	
// 	}, );

//     return(
//         <>
//              <div>
//                 {person.map((person, index) => {
//                     return (
//                         <CharacterInfo key={index} person={person} />
//                     );
//                 })}
//             </div>
//         </>
//     )
// }

// export default Person_Info;