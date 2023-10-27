import React from 'react'

export default function Article({title,date='January 1, 1970',preview,minutes}) {
    const readTime = (minutes) =>{
        const emojiType = minutes <30 ? '☕️' : '🍱'
        const roundedMinutes = minutes <30 ? 5 : 10
        const countTime = Math.ceil(minutes/roundedMinutes)

        return Array.from({length: countTime}, (_, index)=> emojiType).join('')
    }
  return (
    <div>
        <h3>{title}</h3>
        <small>
            {date}. {minutes && <span>{readTime(minutes)} {minutes} min read</span>}
        </small>
        <p>{preview}</p>
    </div>
  )
}
