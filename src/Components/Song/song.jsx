import React from 'react';
import './song.css';

function Song(props){
    return(
        <div className="song">
            <div className="cover">
                <h4 className="id">{props.song.id}</h4>
                <h1 className="title">{props.song.title}</h1>
                <h2 className="artist">{props.song.artist}</h2>
                <h4 className="album">{props.song.album}</h4>
            </div>
        </div>
    );
}

export default Song;