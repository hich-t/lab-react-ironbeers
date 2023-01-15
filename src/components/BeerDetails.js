import {useParams} from "react-router-dom"
import React from "react"
import axios from "axios"
import {useEffect, useState} from "react"

const BeerDetails = () => {

    const {beerid} = useParams()
    console.log(beerid)

const [beer, setBeer] = useState([])
const [load, setLoad] = useState(false)

const fetchData = async () => {

    try {
        const callData = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerid}`
        );
      setBeer(callData.data);
      setLoad(true)
      } catch (err) {
        console.log(err);
      }
}

useEffect( () => {

        fetchData()

}, [])



return(

    <div className="allbeersframe">

   
    <div className='beerslist'>
    <div>
    <img className='beersimg'  src={beer.image_url} alt="beer model" />
    </div>
    <div className='beerstext'>
    <h2>{beer.name}</h2>
    <p>{beer.description}</p>
    <p>First brewed on : {beer.first_brewed}</p>
    <p>Attenuation level : {beer.attenuation_level}</p>
    <p>Contributed by : {beer.contributed_by}</p>

    
    </div>
    </div>
   
 
    </div>

)
}

export default BeerDetails