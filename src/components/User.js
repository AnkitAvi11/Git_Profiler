import React, { Component } from 'react';
import {Card, Avatar} from 'antd';
import { Redirect } from 'react-router-dom';
import TopLanguages from './TopLanguages';
import Stats from './Stats';

class User extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            user_found : true,
            user : null
        }
    }

    getUser = () => {
        
        fetch(`https://api.github.com/users/${this.props.location.search.split("=")[1]}`)
        .then(res => {
            if(res.status === 404) {
                return this.setState({user_found : false, loading : false})
            }
            return res.json()
        }).then(data => {
            this.setState({loading : false, user : data});
        }).catch(err => {
            return this.setState({user_found : false, loading : false})
        });
    }

    componentDidMount() {
        
        this.getUser();
    }

    render() {

        if(this.state.loading) {
            return <Card
                loading={this.state.loading}
                style={{width : "50%", margin:"auto"}}
            >

            </Card>
        }

        if(this.state.user_found === false) {
            return <Redirect to="/notfound" />
        }
        

        document.title = this.state.user.login
        const {user} = this.state;
        
        return (

            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-12" style={{margin : "20px auto"}}>
                        <Card loading={this.state.loading} style={{textAlign:"center"}} bordered={false}>
                            <Avatar 
                                src={user.avatar_url}
                                style={{width : "150px", height:"150px"}}
                            />
                            <br/>
                            <br/>
                            <h1>{user.name}</h1>
                            <p><a href={user.html_url} target="_blank" rel="noreferrer">@{user.login}</a></p>
                            <p>{user.bio}</p>
                            <p><i className="bi bi-briefcase"></i> {user.company ? user.company : 'NA'} &nbsp; <i className="bi bi-geo-alt"></i> {user.location ? user.location : 'NA'} &nbsp; <i className="bi bi-calendar"></i> {new Date(user.created_at).toLocaleDateString()} </p>
                        </Card>
                    </div>
                    <div className="col-sm-7" style={{margin:"auto"}}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body" style={{textAlign:"center"}}>
                                        <h1>{user.public_repos}</h1>
                                        <p>Public Respositories</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body" style={{textAlign:"center"}}>
                                        <h1>{user.followers}</h1>
                                        <p>Followers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body" style={{textAlign:"center"}}>
                                        <h1>{user.following}</h1>
                                        <p>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop : "30px"}}>
                    <Stats username={user.login} />
                    <TopLanguages username={user.login} />
                </div>
            </div>
        )
    }
}


export default User;