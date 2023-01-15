import React from "react"
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BeerContext = createContext();

export const BeerController = ({ children }) => {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);


  const fetchData = async () => {
    try {
      const callData = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
     setData(callData.data);
      setLoad(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {

    fetchData()

  } , []  )

    return (
        <BeerContext.Provider

            value={{
              value : [data, setData], 
              value1 : [load, setLoad], 

          }}>

                { load && children }
        </BeerContext.Provider>
      );


}
