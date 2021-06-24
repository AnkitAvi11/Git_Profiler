import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navigation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/user/${this.state.username}`);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/" exact={true}><i className="bi-github" role="img" aria-label="GitHub"></i></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact={true}>Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about" exact>About</NavLink>
                        </li>
                        
                    </ul>
                    <form className="d-flex" action="/user">
                        <input className="form-control me-sm-2" type="text" placeholder="GitHub Username" onChange={this.handleChange} name='username' autoFocus={true} />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
            </div>
        </nav>
        )
    }
}


export default withRouter(Navigation);
