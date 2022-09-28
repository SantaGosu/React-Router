import { useParams } from "react-router-dom";
import React from "react";

const CharacterInfo = () => {
    const {id} = useParams();

    return( 
        <div className="CharacterInfo">
            <h2>CharacterInfo - {id} </h2>
        </div>
    )
}

export default CharacterInfo;