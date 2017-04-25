import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Node extends Component {

    render() {
        return (
            <div { ...this.props["data-border"] }
                 className={ this.props["data-border"]?
                              "wall-tile":"floor-tile"} />
        );
    }
}

Node.propTypes = {};
Node.defaultProps = {};

export default Node;
