import './footer.css';
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <h3>{this.props.footer}</h3>
            </div>
        );
    }
}


export default Footer;