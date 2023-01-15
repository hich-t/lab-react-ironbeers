import React from "react"
import axios from "axios"
import {useEffect, useState} from "react"

const RandomBeer = () => {



const [beer2, setBeer2] = useState([])
const [load, setLoad] = useState(false)

const fetchData2 = async () => {

    try {
        const callData = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
      setBeer2(callData.data);
      setLoad(true)
      } catch (err) {
        console.log(err);
      }
}

useEffect( () => {

        fetchData2()

}, [])



return(

    <div className="allbeersframe">

   
    <div className='beerslist'>
    <div>
    <img className='beersimg'  src={beer2.image_url} alt="beer model" />
    </div>
    <div className='beerstext'>
    <h2>{beer2.name}</h2>
    <p>{beer2.description}</p>
    <p>First brewed on : {beer2.first_brewed}</p>
    <p>Attenuation level : {beer2.attenuation_level}</p>
    <p>Contributed by : {beer2.contributed_by}</p>

    
    </div>
    </div>
   
 
    </div>

)
}

export default RandomBeer