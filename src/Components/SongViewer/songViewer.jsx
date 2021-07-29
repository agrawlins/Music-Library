import React from 'react';
import Song from '../Song/song';
import './songViewer.css';

function SongViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousSong()}>Previous Song</button>
        </div>
        <div className="col-md-4">
            <Song song={props.song}/>
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextSong()}>Next Song</button>
        </div>
    </div>
    )
}

export default SongViewer;