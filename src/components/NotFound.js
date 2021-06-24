import React, { Component } from 'react'

import {Card} from 'antd';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render () {

        document.title = "Page not found"

        return (
            <div className="container" style={{marginTop : "20px"}}>
                <div className="row">
                    <div className="col-sm-7" style={{margin:"auto"}} >
                        <Card
                            style={{textAlign:"center"}}
                            bordered={false}
                        >
                            <img src={process.env.PUBLIC_URL+"resources/404.svg"} alt='not found' style={{width:"300px"}} />
                            <br/>
                            <br/>
                            <br/>
                            <h2>error 404 : Page not found</h2>
                            <p>Click here to go back to <Link to="/">Home</Link></p>
                        </Card>
                        <form action="/user" method="GET" style={{marginTop: "20px"}}>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" placeholder="Enter your GitHub username" name="username" id="username" />
                                    </div>
                                    <div className="col-sm-4">
                                        <button value="Search" className="btn btn-outline-primary" style={{width:"100%"}}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;