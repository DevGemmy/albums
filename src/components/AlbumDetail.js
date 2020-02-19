import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


// type Props = {};
// type State = {};
// class Foobar extends React.Component<Props, State> {
//   [...]
// } But this ignores annotations

const AlbumDetail = ({ data }) => {
	const { 
		title, 
		artist, 
		thumbnail_image, 
		image, 
		url
	} = data;
	const { 
		headerContentStyle,
		titleTextStyle,
		thumbnailStyle, 
		thumbnailContainerStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle}
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={titleTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={imageStyle}
					source={{ uri: image }}
				/>
			</CardSection>

			<CardSection>
				<Button whenPressed={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
