import React, {Component} from 'react';
import Dungeon from './dungeon';

class DungeonCrawler extends Component {

    render() {
        return (
            <div className="dungeon-crawler">
                <Dungeon />
            </div>
        );
    }
}

export default DungeonCrawler;
