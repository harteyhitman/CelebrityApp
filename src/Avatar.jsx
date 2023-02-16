import React from 'react'

function Avatar(props) {
  return (
    <div>
         <img className='image'
          src={props.img}
          alt="avatar_img"
        />
    </div>
  )
}

export default Avatar