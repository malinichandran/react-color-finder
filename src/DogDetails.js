import React from "react";
import { useParams } from "react-router-dom";


const DogDetails = ({dogs}) => {
    const { name } = useParams();
    let dog = {}
    if (name) {
        dog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
            
    )
    return dog;
}
    return(
        
        <div>
       
            <div>
                <h1>Hi I am {dog.name}</h1>
                <img src={dog.src}/>
                <h4>{dog.name}</h4>
                <h5>{dog.age}</h5>
                <ul>
                {dog.details.map(fact => {
                    <li>{fact}</li>
                })}
                </ul>
            </div>
        ))}
       
            
        </div>

    )

}

export default DogDetails;