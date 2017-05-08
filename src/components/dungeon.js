import React, {Component} from 'react';
import Node from './node';

// minimum and maximum sizes for dungeon
const D_MAX_WIDTH = 50;
const D_MIN_WIDTH = 25;
const D_MAX_HEIGHT = 50;
const D_MIN_HEIGHT = 25;

// minimum and maximum sizes for room
const R_MAX_WIDTH = 7;
const R_MIN_WIDTH = 2;
const R_MAX_HEIGHT = 7;
const R_MIN_HEIGHT = 2;

class Dungeon extends Component {

    constructor(props) {
        super(props);

        // Get the height and width of the dungeon
        //
        // We are starting the map at the center of
        // the grid, so also make the height and width
        // odd if it is not already. This simplifies
        // things later
        let rows = this.makeOdd(this.getRandom(D_MIN_HEIGHT, D_MAX_HEIGHT));
        let cols = this.makeOdd(this.getRandom(D_MIN_WIDTH, D_MAX_WIDTH));

        this.state = {
            cols,
            rows,
            rooms: {}
        };
    }

    makeOdd(num) {
        return num%2===0?(num + 1):num;
    }

    renderNodes() {
        const width = this.state.cols;
        const height = this.state.rows;
        const theGrid = [];

        for(let i = 0; i < height; i++) {
            theGrid.push(<div key={'row' + (i)} className="room-row">{ this.getRow(width, i) }</div>);
        }

        console.log(this.refs);
        return theGrid;
    }

    componentDidMount() {
        this.buildMap();
    }

    getRow(cols, row) {
        let theTiles = [];

        for(let i = 0; i < cols; i++) {
            theTiles.push(<Node key={ row*cols + i }
                                ref={ row*cols + i + 1 } />);
        }

        return theTiles;
    }

    refFromCoord(row, col) {
        return row * this.state.cols + col + 1;
    }

    refToCol(ref) {
        return this.doRefCalc(ref, this.state.rows);
    }

    refToRow(ref) {
        return this.doRefCalc(ref, this.state.cols);
    }

    doRefCalc(ref, divisor) {
        ref -= 1;
        return Math.floor(ref / divisor)
    }

    buildMap() {

        this.refs[this.findCenter()].makeOpen();

        //this.carveRoom(this.findCenter());
    }

    getRoomSize() {
        const rows = this.makeOdd(this.getRandom(R_MIN_HEIGHT, R_MAX_HEIGHT));
        const cols = this.makeOdd(this.getRandom(R_MIN_WIDTH, R_MAX_WIDTH));

        return [rows, cols];
    }

    findCenter() {
        const col = Math.floor(this.state.cols/2);
        const row = Math.floor(this.state.rows/2);

        let ref = this.refFromCoord(row, col);
        let testCol = this.refToCol(ref);
        let testRow = this.refToRow(ref);
        console.log("ref is " + ref + "\n",
                    "col is " + col + "\n",
                    "row is " + row + "\n",
                    "testCol is " + testCol + "\n",
                    "testRow is " + testRow);

        return this.refFromCoord(row, col);
    }

    carveRoom(ref) {
        //const roomDimensions = this.getRoomSize();


    }

    getRandom(start, end) {
        return Math.floor(Math.random() * (end-start+1) ) + start;
    }

    getRandomCol() {
        return this.getRandom(1, this.state.cols - 2);
    }

    getRandomRow() {
        return this.getRandom(1, this.state.rows - 2);
    }


    render() {
        return (
            <div className="dungeon">
                { this.renderNodes()}
            </div>
        );
    }
}

export default Dungeon;
