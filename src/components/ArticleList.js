import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
  return (
    <main>
        {
            props.components.map(component => {
                console.log(component)
                return (
                    <Article key={component.id} title={component.title} date={component.date} preview={component.preview} minutes={component.minutes}></Article>
                )
            })  
        }
    </main>
  )
}
