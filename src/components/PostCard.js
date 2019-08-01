import React from 'react'
import { Card } from 'semantic-ui-react'

const PostCard = function(props) {
    const title = props.title
    const text = props.text
    return (
        <Card header={title} description={text}/>
    )
}




export default PostCard