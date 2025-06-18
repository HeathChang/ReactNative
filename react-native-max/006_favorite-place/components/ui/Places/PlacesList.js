import { FlatList, StyleSheet, View, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../../constants/colors";

const PlacesList = (props) => {
	if (!props.places || props.places.length === 0) {
		return (
			<View style={ styles.fallbackContainer }>
				<Text style={ styles.fallbackText }>No Places Added!</Text>
			</View>

		);
	}


	return (
		<View>
			<Text>
				Hello World
			</Text>
			<FlatList data={ props.places } renderItem={ (itemData) => <PlaceItem place={ itemData.item }/> }
								keyExtractor={ ({ id }) => id }/>
		</View>
	);
};

export default PlacesList;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fallbackText: {
		fontSize: 16,
		color: Colors.primary200
	}
});