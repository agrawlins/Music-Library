import React, {Component} from 'react';
import './songCreator.css'

class SongCreator extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            artist: '',
            album: '',
            releaseDate: '',
            genre: ''
        }
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const song={
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            releaseDate: this.state.releaseDate,
            genre: this.state.genre

        }
        this.props.addNewSong(song);
        this.setState({
            title: '',
            artist: '',

        });
    }
    render(){
        return (
            <div>
                <hr />
                <center>
                    <h3>Add a New Song!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Artist:</label>
                            <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Album:</label>
                            <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Genre:</label>
                            <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Release Date:</label>
                            <input type="date" name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SongCreator;