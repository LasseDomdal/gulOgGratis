import React from 'react';
import './body.css';

//props as a class
class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="bodyDiv">
                <h2>{this.props.body}</h2>
            </div>
        );

    }
}



export default Body;