import React from 'react';
import './titleBar.css';

function TitleBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className="titlebar-nav">
                    <h1>Music Library</h1> 
                    {/* <searchbar class="right">Searchbar</searchbar> */}
                    <div class="topnav">
                        <div class="search-container, right">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;