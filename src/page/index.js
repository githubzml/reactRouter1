import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { uid: 123, msg: "今天是个好日子" },
                { uid: 234, msg: "明天是个好日子" },
                { uid: 345, msg: "后天是个好日子" }
            ]
        }
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                <h2>heihei</h2>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item + index}>
                                    <Link to={"/list/" + item.uid}>{item.msg}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;