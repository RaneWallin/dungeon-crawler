import React, {Component} from 'react';
//import PropTypes from 'prop-types';

class Node extends Component {

    render() {
        return (
            <div { ...this.props["data-obstacle"] }
                 className={ this.props["data-obstacle"]?
                              "wall-tile":"floor-tile"} />
        );
    }
}

//Node.propTypes = {};
//Node.defaultProps = {};

export default Node;
