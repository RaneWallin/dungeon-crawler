import React, {Component} from 'react';
import Node from './node';
import PropTypes from 'prop-types';

class Dungeon extends Component {

    renderNodes() {
        const width = this.getDimension();
        const height = this.getDimension();
        const theGrid = [];

        for(let i = 0; i < height; i++) {
            theGrid.push(<div key={i} className="room-row">{ this.getRow(width, (i===0 || i===height-1)?true:null) }</div>);
        }
        return theGrid;
    }

    getRow(width, border) {
        let theTiles = [];
        for(let i = 0; i < width; i++) {
            theTiles.push(<Node key={i} data-border={(border || i===0 || i===width-1)} />);
        }

        return theTiles;
    }

    getDimension() {
        return Math.floor(Math.random() * 50 ) + 25;
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
