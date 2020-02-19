import React, { Component } from 'react';
import { View, Text } from 'react-native';


// type Props = {};
// type State = {};
// class Foobar extends React.Component<Props, State> {
//   [...]
// } But this ignores annotations

//Header Component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		paddingTop: 6,
		shadowColor: '#000',
		shadowOffset: { 
			width: 0, 
			height: 2 
		},
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

///Make app available to all parts of the app
export default Header;