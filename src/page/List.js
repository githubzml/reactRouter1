import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <h2>List-Page</h2>
            </div>
        )
    }
}

export default List;