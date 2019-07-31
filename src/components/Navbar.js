import React from 'react'
import { Menu } from 'semantic-ui-react'

const colors = 'teal'

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color: []
        }
    }
    // componentWillMount() {
    //     const that = this
    //     .then(function(res){
    //         var data = res.data
    //         that.setState({
    //             color: data
    //         })
    //     })
    // }
    



render() {
    const { color } = this.props
    return (
        <Menu color={color}>
            <Menu.Item name='home'/>
            <Menu.Item name='messages'/>
            <Menu.Item name='friends'/> 
        </Menu>    
    )
  }
}
export default Navbar