import React from 'react'
import PostCard from './PostCard'
import axios from 'axios'
import lodash from 'lodash'
import {Card} from 'semantic-ui-react'




class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        var thisComponent = this
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(function(res) {
                var data = res.data
                thisComponent.setState({
                    posts: data
                
                })
            })
    }



    render() {
        const count = this.props.count ||25
        const perRow = this.props.perRow ||5
        console.log(this.state)
        var posts = lodash.take(this.state.posts,33)
        return<Card.Group itemsPerRow={perRow}>
            {posts.map(function(currentPost){
                return <PostCard title={currentPost.title} text={currentPost.body}/>
            })}
            <PostCard title='test title' text='test text'/>
            

            </Card.Group>
        
            
        
    }
}

export default PostList