import React, { Component } from 'react'

class Stats extends Component {
    render() { 
        return (
            <div style={{textAlign:"center", marginBottom : "50px"}}>
                <img src={`https://github-readme-stats.vercel.app/api?username=${this.props.username}&show_icons=true&count_private=true`} alt="profile state" /> | <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${this.props.username}`} alt="another state" />
            </div>
        )
    }
}


export default Stats;