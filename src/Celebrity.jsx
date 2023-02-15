import React from 'react'

function Celebrity(props) {
    console.log(props, "conts")

  return (
    <div>
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img className='image'
          src={props.img}
          alt="avatar_img"
        />
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