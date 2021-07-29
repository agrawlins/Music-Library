import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className="titlebar-nav">
                    <h1>Music Library</h1> <button class="right" onClick="">Pointless Button</button>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;