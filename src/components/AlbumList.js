import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// type Props = {};
// type State = {};
// class Foo extends React.Component<Props, State> {
//   [...]
// } But this ignores annotations

//AlbumList component
class AlbumList extends Component {
	//class level property
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then( response => this.setState( {albums: response.data} ) );
	}

	renderAlbums() {
		return this.state.albums.map( album => 
			<AlbumDetail key={album.title} data={album}/> 
		);
	}

	render() {
		console.log( this.state );

		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		);
	}
}

export default AlbumList;