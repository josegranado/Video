import React, {Component} from 'react';
import Media from '../Media/Media';
import './Playlist.css';
import Play from '../Icons/play';
import Pause from '../Icons/pause';
import Volumen from '../Icons/volumen';
import FullScreen from '../Icons/fullScreen';
function Playlist (props)
{
    return (
        <div> 
            <div className="icons">
                <Play
                    size={50}
                    color="red"
                />
                <Pause
                    size={50}
                    color="green"
                />
                <Volumen
                    size={50}
                    color="yellow"
                />
                <FullScreen
                    size={50}
                    color="orange"
                />
            </div>
            <div className="Playlist">
            {
                props.playlist.map( item => <Media {...item} key={item.id}/> )
            }
            </div>
        </div>
    );  
}

export default Playlist;