import React, { Component } from 'react';
import TitleBar from './Components/TitleBar/titleBar';
import SongLister from './Components/SongLister/songLister';
// import SongViewer from './Components/SongViewer/songViewer';
import SongCreator from './Components/SongCreator/songCreator'
// import NameForm from './Components/SearchFeature/searchFeature';
import Footer from './Components/Footer/footer';
// import data from './Components/data';
import Song from './Components/Song/song'
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
        songNumber: 0,
        songs: [],
        userInput: ""
        }
    }

    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try {
            let response = await axios.get("http://localhost:9000/api/songs");
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

    handleChange(e){
        this.setState({
            userInput: e.target.value
        });
        console.log(e.target.value)          
    }

    render() {
        const userInput = this.state.userInput;
        return(
            <div className="container-fluid">
                <TitleBar/>
                <fieldset>
                    <legend>Search the Song Database!</legend>
                    <input value={userInput} onChange={this.handleChange} />
                 </fieldset>
                <ul>
                    {
                    (this.state.songs.filter((song) => song.title === this.state.userInput).map((song) => <li key={song.id}>"{song.title}", {song.artist}, <i>{song.album}</i>, {song.releaseDate}, {song.genre}</li>))               
                    } 
                </ul>
                <ul>
                    {
                (this.state.songs.filter((song) => song.album === this.state.userInput).map((song) => <li key={song.id}>"{song.title}", {song.artist}, <i>{song.album}</i>, {song.releaseDate}, {song.genre}</li>))
                    }
                </ul>
                <ul>
                    {
                    (this.state.songs.filter((song) => song.artist === this.state.userInput).map((song) => <li key={song.id}>"{song.title}", {song.artist}, <i>{song.album}</i>, {song.releaseDate}, {song.genre}</li>))
                    }
                </ul>
                <ul>
                    {
                    (this.state.songs.filter((song) => song.genre === this.state.userInput).map((song) => <li key={song.id}>"{song.title}", {song.artist}, <i>{song.album}</i>, {song.releaseDate}, {song.genre}</li>))
                    }
                </ul>
                <ul>
                    {
                    (this.state.songs.filter((song) => song.releaseDate === this.state.userInput).map((song) => <li key={song.id}>"{song.title}", {song.artist}, <i>{song.album}</i>, {song.releaseDate}, {song.genre}</li>))    
                    }
                </ul>
                <p1>
                    {/* <div>
                        {this.state.songs.map((Song, index) => (
                        <p>{Song.id}: "{Song.title}", {Song.artist}, <i>{Song.album}</i>, {Song.releaseDate}, {Song.genre}</p>))}
                    </div> */}
                </p1>
                    <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                    <Footer />
            </div>
        );
    }
}

export default App;