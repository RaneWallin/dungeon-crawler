import React, {Component} from 'react';
import Node from './node';
const D_MAX_WIDTH = 50;
const D_MIN_WIDTH = 25;
const D_MAX_HEIGHT = 50;
const D_MIN_HEIGHT = 25;

class Dungeon extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderNodes() {
        const width = this.getDimension(D_MIN_WIDTH, D_MAX_WIDTH);
        const height = this.getDimension(D_MIN_HEIGHT, D_MAX_HEIGHT);
        const theGrid = [];

        for(let i = 0; i < height; i++) {
            theGrid.push(<div key={'row' + (i)} className="room-row">{ this.getRow(width, i, height) }</div>);
        }

        //this.setState({theGrid});

        return theGrid;
    }

    getRow(width, row, height) {
        let theTiles = [];

        for(let i = 0; i < width; i++) {
            //theTiles.push(<Node key={i} data-border={(border || i===0 || i===width-1)} />);
            theTiles.push(<Node key={'node' + (i + row*width)}
                                ref={[row, i]}
                                data-obstacle={true}
                                data-cols={width}
                                data-rows={height}/>);
        }

        return theTiles;
    }

    calcRef(row, col, rWidth) {
        return row + rWidth + col + 1;
    }

    getDimension(start, end) {
        return Math.floor(Math.random() * (end-start+1) ) + start;
    }

    buildMap() {
        return;
    }

    render() {
        return (
            <div className="dungeon">
                { this.renderNodes()}
                { this.buildMap() }
            </div>
        );
    }
}

Dungeon.propTypes = {};
Dungeon.defaultProps = {};

export default Dungeon;
