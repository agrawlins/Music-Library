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
        this.state = {
        songNumber: 0,
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
                {/* <NameForm /> */}
                <div class="center, background">
            {this.state.songs.map((Song, index) => (
            <p>{Song.id}: "{Song.title}", {Song.artist}, <i>{Song.album}</i>, {Song.releaseDate}, {Song.genre}</p>
            ))}
        </div>       
                {/* <SongViewer song={this.songs[this.state.songNumber]} nextSong={() => this.goToNextSong} previousSong={() => this.goToPreviousSong}/> */}
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
                <Footer />
            </div>
        );
    }
}

function BoilingVerdict(props){
    if(props.search >="Drive My Car") {
        return <p>You found the Beatles!</p>;
    }
    return <p>The water would not boil...</p>;
}   

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            userInput: ''
        };
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        });
        console.log(this.state.userInput)
    }

    render(){
        const userInput = this.state.userInput;
        return(
            <fieldset>
                <legend>Search the Song Database!</legend>
                <input value={userInput} onChange={this.handleChange} />
                <BoilingVerdict search={(userInput)} />
            </fieldset>
        );
    }
}
export default App;