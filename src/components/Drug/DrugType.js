import React from 'react'
import DrugsList from './DrugsList'

const DrugType = (props) => {

    const {drugTypes, onAdd} = props

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