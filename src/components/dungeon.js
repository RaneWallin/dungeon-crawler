import React, {Component} from 'react';
import Node from './node';
import PropTypes from 'prop-types';

class Dungeon extends Component {

    renderNodes() {
        const width = this.getDimension();
        const height = this.getDimension();
        const theGrid = [];

        for(let i = 0; i < height; i++) {
            theGrid.push(<div key={i} className="room-row">{ this.getRow(width) }</div>);
        }
        return theGrid;
    }

    getRow(width) {
        let theTiles = [];
        for(let i = 0; i < width; i++) {
            theTiles.push(<Node key={i} />);
        }

        return theTiles;
    }

    getDimension() {
        return Math.floor(Math.random() * 75 ) + 25;
    }
    render() {
        return (
            <div className="dungeon">
                { this.renderNodes() }
            </div>
        );
    }
}

Dungeon.propTypes = {};
Dungeon.defaultProps = {};

export default Dungeon;
