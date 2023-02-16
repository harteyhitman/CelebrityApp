import React from 'react'
import Avatar from './Avatar'

function Celebrity(props) {
    console.log(props, "conts")

  return (
    <div>
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
       <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  </div>
  )
}

export default Celebrity