import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Room from "./room";

class DungeonCrawler extends Component {
    renderRooms() {
        const numRooms = this.numRooms();
        let theRooms = [];

        for(let i = 0; i < numRooms; i++) {
            theRooms.push(<Room />);
        }

        return theRooms;
    }

    numRooms() {
        return Math.floor(Math.random() * 6) + 6;
    }
    render() {
        return (
            <div className="dungeon-crawler">
                { this.renderRooms() }
            </div>
        );
    }
}

DungeonCrawler.propTypes = {};
DungeonCrawler.defaultProps = {};

export default DungeonCrawler;
