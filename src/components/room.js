import React, {Component} from 'react';
import Floor from './floor';
import PropTypes from 'prop-types';

class Room extends Component {

    constructor(props) {
        super(props);

        this.renderRoom = this.renderRoom.bind(this);
        this.renderRows = this.renderRows.bind(this);
    }
    renderRoom() {
        const width = this.getDimension();
        const height = this.getDimension();
        let tmpTag = '';
        let theRoom = [];
        let key = 0;

        console.log("test");

        for(let i = 0, v = height; i < v; i++) {
            //theRoom[i]=[];
            console.log("in loop");
            theRoom.push(<div key={i} className="room-row">{this.renderRows(width)}</div>);
        }

        console.log(theRoom);
        return theRoom;
    }

    getDimension() {
        return Math.floor(Math.random() * 25 ) + 15;
    }

    renderRows(width) {
        let theRow = [];

        console.log("test 2");
        for(let i = 0; i < width; i++) {
            theRow.push(<Floor key={i} />);
        }

        return theRow;
    }

    render() {
        return (
            <div className="dungeon-room">
                {this.renderRoom()}
            </div>
        );
    }
}

Room.propTypes = {};
Room.defaultProps = {};

export default Room;
