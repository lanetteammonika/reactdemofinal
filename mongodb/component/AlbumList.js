import React,{ Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component{
    state={users:[]};
    componentWillMount(){
        axios.get('http://localhost:4000')
            .then(response =>this.setState({users:response.data}));
    }
    renderUsers(){
        return this.state.users.map(user => <AlbumDetail key={user.name} user={user} />)
    }
    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderUsers()}
            </ScrollView>
        );
    }
}
export default AlbumList;