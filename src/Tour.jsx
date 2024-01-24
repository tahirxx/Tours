import React, { useState } from 'react'; 

export default function Tour({ id, name, summary,image , removeTour }) {
const [readMore, setReadMore] = useState(false);




  return (
    <div className='container'>
    <article className='single-tour'>
      <img src={image.medium}  alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <p className='summary'>{readMore ? summary : `${summary.substring(0, 200)}...`}
          <button className="read" onClick={() => setReadMore(!readMore)}> {readMore ? 'show less' : 'read more'}
            </button></p> 
          <button className='delete-btn' onClick={() => removeTour(id)}>Delete Show</button>
        </div>
       
      </footer>
    </article>
    </div>
  )
}
