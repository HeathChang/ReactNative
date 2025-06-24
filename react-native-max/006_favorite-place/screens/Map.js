import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/common/Icon/IconButton";

const Map = (props) => {
	const navigation = useNavigation();
	const [selectedLocation, setSelectedLocation] = useState(null);
	const region = {
		latitude: 37.78,
		longitude: -122.43,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const selectLocationHandler = (event) => {
		const latitude = event.nativeEvent.coordinate.latitude;
		const longitude = event.nativeEvent.coordinate.longitude;
		setSelectedLocation({ latitude: latitude, longitude: longitude });
	};

	const savePickedLocationHandler = useCallback(( () => {
		console.log('go back')
		if (!selectedLocation) {
			Alert.alert('No Location', 'You have to pick a location.');
			return;
		}
		navigation.navigate('AddPlace', { pickedLocation: selectedLocation });
	} ), [navigation, selectedLocation]);


	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => <IconButton icon={ "save" } onPress={ savePickedLocationHandler } color={ tintColor } size={ 24 }/>
		});
	}, [navigation, savePickedLocationHandler]);

	return (
		<MapView initialRegion={ region } style={ styles.map } onPress={ selectLocationHandler }>
			{ selectedLocation && ( <Marker title={ "picked location" } coordinate={ selectedLocation }/> ) }
		</MapView>
	);
};

export default Map;


const styles = StyleSheet.create({
	map: {
		flex: 1
	}
});