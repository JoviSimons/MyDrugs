import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DrugsList from './DrugsList'

const localUrl = "http://localhost:9000/MyDrugs/"

const DrugType = (props) => {

    const {drugTypes, onAdd} = props
    const [drugs, setDrugs] = useState(null);

    useEffect(() => {
    }, [])

    return(
      <div>
          {
              drugTypes.map(drugType => (
                  <div>
                  <h1>{drugType.name}</h1>
                  <DrugsList onAdd={onAdd} drugType={drugType}/>
                  </div>
              ))
          }
      </div>
    )
}

export default DrugType