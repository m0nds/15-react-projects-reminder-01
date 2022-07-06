// index.js
import React, {useState} from 'react'
import {data} from './data.js'
import "./App.css"

const App = () => {

  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    const newPeople = people.filter((person)=> id !== person.id)
    setPeople(newPeople)
  }
  
  return (
    <>
      <div className="container">
        <h2>{people.length} birthdays today</h2>
          {
            people.map(({id, image, name, age}) => {
              return (
                <div className="info" key={id}>
                  <img src={image} alt=""/>
                  <div className="infos">
                    <h3>{name}</h3>
                    <span>{age}</span>
                  </div>
                  <button onClick={()=> removePerson(id)}>Remove</button>
                </div>
              )
            })
          }
        <button className="removePerson" onClick={()=> setPeople([])}>Clear All</button>
      </div>
    </>
  )
}

export default App;