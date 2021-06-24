import React, { Component } from 'react'

class Home extends Component {
    
    render() {

        document.title = "Github Profiler"
        
        return (
            <div className='container'>
                <div className="row" style={{marginTop : "50px"}}>
                    <div className="col-sm-6">
                        <img src={process.env.PUBLIC_URL+"/resources/cover.png"} style={{width : "100%"}} alt="Cover" />
                    </div>

                    <div className="col-sm-6">
                        <h3 style={{marginTop : "50px"}}>Github Profiler</h3>
                        <br/>
                        <p>A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</p>
                        <br/>
                        <form action="/user" method="GET">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" placeholder="Enter your GitHub username" name="username" id="username" />
                                    </div>
                                    <div className="col-sm-4">
                                        <button value="Search" className="btn btn-outline-primary">Search</button>
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

export default Home;