import React from 'react'

export default function Tour({ id, name, summary,image }) {
  return (
    <article className='single-tour'>
      <img src={image} height={200} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className=''>{summary}</h4>
        </div>
      </footer>
    </article>
  )
}
