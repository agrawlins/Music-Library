import React from 'react';
import './song.css';

function Song(props){
    return(
        <div className="song">
            <div className="cover">
                <h4 className="id">{props.songs.id}</h4>
                <h4 className="title">{props.songs.title}</h4>
                <h4 className="artist">{props.songs.artist}</h4>
                <h4 className="album">{props.songs.album}</h4>
                <h4 className="releaseDate">{props.songs.album}</h4>
            </div>
        </div>
    );
}

export default Song;