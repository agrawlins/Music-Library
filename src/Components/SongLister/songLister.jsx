import React from 'react';
import Song from '../Song/song';
import './songLister.css';

function SongLister(props){
    return(
        <div class="center, background">
            {this.state.songs.map((Song, index) => (
            <h2>{Song.id}: "{Song.title}", {Song.artist}, <i>{Song.album}</i>, {Song.releaseDate}, {Song.genre}</h2>
            ))}
        </div>
    );
}

export default SongLister;