import React, {Component} from 'react';
//import PropTypes from 'prop-types';

class Node extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obstacle: true
        };
    }

    // makeObstacle() {
    //     this.setState({ obstacle: true });
    // }

    makeOpen() {
        this.setState({ obstacle: false });
    }

    render() {
        return (
            <div className={ this.state.obstacle?
                              "wall-tile":"floor-tile"} />
        );
    }
}

//Node.propTypes = {};
//Node.defaultProps = {};

export default Node;
