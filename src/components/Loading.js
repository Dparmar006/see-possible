import React from 'react'

const Loading = ({ isLoadig, data }) => {
  return (
    <div className='loading '>
      {isLoadig &&
        [1, 2, 3, 4, 5, 6, 7, 8].map(ele => (
          <div className='addresscard loading__card' key={ele} />
        ))}
    </div>
  )
}

export default Loading
