import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useCallback, useState } from "react";
import { Colors } from "../../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import DefaultButton from "../../common/Button/DefaultButton";
import { getAddress } from "../../../util/location";

const PlaceForm = () => {
	const [enteredTitle, setEnteredTitle] = useState("");


	const [selectImage, setSelectImage] = useState();

	const [pickedLocation, setPickedLocation] = useState();

	const takeImageHandler = (uri) => {
		setSelectImage(uri);

	};
	const pickLocationHandler = useCallback((location) => {
		setPickedLocation(location);
	}, []);

	const savePlaceHandler = async () => {
		console.log(1, enteredTitle)
		console.log(2, selectImage)
		console.log(3, pickedLocation)
	};

	return (
		<ScrollView style={ styles.form }>
			<View>
				<Text style={ styles.label }>Title</Text>
				<TextInput style={ styles.input }
									 onChangeText={ (enteredText) => setEnteredTitle(enteredText) } value={ enteredTitle }/>
			</View>
			<ImagePicker onTakeImage={ takeImageHandler }/>
			<LocationPicker onPickLocation={ pickLocationHandler }/>
			<DefaultButton onPress={ savePlaceHandler }>Add Place</DefaultButton>
		</ScrollView>
	);
};

export default PlaceForm;

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 24,

	},
	label: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: Colors.primary500
	},
	input: {
		marginVertical: 8, paddingHorizontal: 4, paddingVertical: 8, fontSize: 16, borderBottomWidth: 2,
		borderBottomColor: Colors.primary700, backgroundColor: Colors.primary100
	}
});