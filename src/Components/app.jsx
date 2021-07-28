import React, { Component } from 'react';
import TitleBar from './TitleBar/titleBar';
import SongViewer from './SongViewer/SongViewer';
import SongCreator from './SongCreator/SongCreator';
import Footer from './Footer/footer';
import data from './data'

class App extends Component {
    constructor(props){
        super(props);
        this.songs = [
            data
        ];
    this.state = {
        songNumber: 0
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
                <SongViewer song={this.songs[this.state.songNumber]} nextSong={() => this.goToNextSong()} previousSong={() => this.goToPreviousSong()}/>
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

export default App;