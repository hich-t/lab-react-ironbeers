import React from "react"
import { useContext } from "react"
import {BeerContext} from "../Context/BeerContext"
import {Link} from "react-router-dom"
const AllBeers = () => {

    const {value} = useContext(BeerContext)
    const [data, setData] = value

    return(
        
        <div className="allbeersframe">

        {data.map((e,i) =>
        <div key={i} className='beerslist'>
        <div>
        <img className='beersimg'  src={e.image_url} alt="beer model" />
        </div>
        <div className='beerstext'>
        <h2>{e.name}</h2>
        <p>{e.tagline}</p>
        <Link to={`/allbeers/${e._id}`}>
        <p className="beerdetailbtn">More Details</p>
        </Link>
        </div>
        </div>
        )}
     
        </div>
        
    )
    }
    
    export default AllBeers