import React from 'react';
import './song.css';

function Song(props){
    return(
        <div className="song">
            <div className="cover">
                <h4 className="id">{props.songs.id}</h4>
                <h1 className="title">{props.songs.title}</h1>
                <h2 className="artist">{props.songs.artist}</h2>
                <h4 className="album">{props.songs.album}</h4>
            </div>
        </div>
    );
}

export default Song;