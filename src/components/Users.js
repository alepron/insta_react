import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';

export default class Users extends Component {
    InstaService = new InstaService();

    state = {
        posts: [],
        key: 1,
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostLoad)
        .catch(this.onError);
    }

    onPostLoad = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderUsers(arr) {
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            return (
                <div key={id}>
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                </div>
            )
        })
    }

    renderActiveUser(arr) {
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            if (id === this.state.key.toString()) {
                return (
                    <div key={id}>
                        <User
                            src={photo}
                            alt={altname}
                            name={name}
                        />
                    </div>
                )
            }
        })
    }
    
    render() {
        const {error, posts} = this.state;

        if (error) {
            return <div>Users not avialable</div>
        }

        const items = this.renderUsers(posts);
        const activeUser = this.renderActiveUser(posts);

        return (
            <>
                <div className="right">
                    {activeUser}
                    <div className="users__block">
                        {items}
                    </div>
                </div>
           </>
        )
    }
}