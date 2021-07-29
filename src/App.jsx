import React, { Component } from 'react';
import TitleBar from './Components/TitleBar/titleBar';
// import SongViewer from './Components/SongViewer/songViewer';
import SongCreator from './Components/SongCreator/songCreator'
import Footer from './Components/Footer/footer';
// import data from './Components/data';
import Song from './Components/Song/song'
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        // songNumber: 0,
        songs: []
        }
    }

    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try {
            let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
            console.log(response.data);
            this.setState({
                songs: response.data
            });
        } catch (er) {
            console.log("Error in API call")
        }
    }
    addNewSong(song){
        this.songs.push(song);
        this.setState({
            songNumber: this.songs.length - 1
        });
    }

    goToNextSong(){
        let tempSongNumber = this.state.songNumber;
        tempSongNumber++;
        if(tempSongNumber === this.songs.length){
            tempSongNumber = 0;
        }
        this.setState({
            songNumber: tempSongNumber
        });
    }

    goToPreviousSong(){
        let tempSongNumber = this.state.songNumber;
        tempSongNumber--;
        if(tempSongNumber < 0)
            tempSongNumber = this.songs.length -1;
        this.setState({
            songNumber: tempSongNumber
        });
    }
    render() {
        return(
            <div className="container-fluid">
                <TitleBar />         
                <div class="center">
                    {this.state.songs.map((Song, index) => (
                    <h2>{Song.id}: "{Song.title}", {Song.artist}, <i>{Song.album}</i>, {Song.releaseDate}</h2>
                    ))}
                </div>
                
                {/* <SongViewer song={this.songs[this.state.songNumber]} nextSong={() => this.goToNextSong()} previousSong={() => this.goToPreviousSong()}/> */}
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default App;