import React, { Component } from 'react'
import {Card, Row, Col} from 'antd';

class TopLanguages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            repositories : [],
            error : ""
        }
    }

    componentDidMount () {
               
        fetch(`https://api.github.com/users/${this.props.username}/repos`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                repositories : data,
                loading : false,
            })
        }).catch(err => {
            this.setState({
                loading : false,
                error : err
            })
        })
    }

    render() {

        if (this.state.loading) {
            return <Card loading={this.state.loading}>
            </Card>
        }

        if(this.state.repositories.length <= 0) {
            return <p>No repositories found</p>
        }

        let repos = this.state.repositories.map(repo => {
            return <Col span={8} style={{marginTop: "10px"}} key={repo.id}>
                <Card>
                <h5><a href={repo.html_url} target="_blank">{repo.name}</a></h5>
                <p>{repo.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p><i class="bi bi-star"></i> {repo.stargazers_count}</p>
                    <p><i class="bi bi-share"></i> {repo.forks}</p>
                    <p><i class="bi bi-bounding-box"></i> {repo.size} KB</p>
                </div>
                </Card>
            </Col>
        })

        return (
            <div>
                <h3>Repositories</h3>
                <Row gutter={16}>
                    {repos}
                </Row>

            </div>
        )
    }
}

export default TopLanguages;