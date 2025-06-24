import { Alert, Image, StyleSheet, View, Text } from "react-native";
import OutlineButton from "../../common/Button/OutlineButton";
import { Colors } from "../../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useEffect, useState } from "react";
import { getAddress, getMapPreview } from "../../../util/location";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";


const LocationPicker = ({ onPickLocation }) => {
	const [pickedLocation, setPickedLocation] = useState(null);
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
	const navigation = useNavigation();
	const route = useRoute();
	const isFocused = useIsFocused();


	useEffect(() => {
		if (isFocused && route.params) {
			setPickedLocation({
				lat: route.params.pickedLocation.latitude,
				lng: route.params.pickedLocation.longitude
			});
		}

	}, [route, isFocused]);

	useEffect(() => {
		const handleLocation  = async () => {
			if(pickedLocation){
				const address =  await getAddress(pickedLocation.lat, pickedLocation.lng)
				onPickLocation({...pickedLocation, address: address});
			}
		}
		handleLocation();

	}, [pickedLocation, onPickLocation]);


	// const  mapPickedLocation = route.params ? {lat: route.params.}
	const verifyPermissions = async () => {
		if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (locationPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert('No Permission', 'You need Location Permission to use the app.');
			return false;
		}
		return true;
	};

	const getLocationHandler = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) return;

		const location = await getCurrentPositionAsync();
		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
		console.log("location:: ", location);
	};

	const pickOnMapHandler = () => {
		console.log(1, 'pickOnMapHandler');
		navigation.navigate('Map');

	};

	let locationPreview = <Text>NO Place</Text>;

	if (pickedLocation) {
		locationPreview =
			<Image style={ styles.image } source={ { uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) } }/>;
	}

	return (
		<View>
			<View style={ styles.mapPreview }>
				{ locationPreview }
			</View>

			<View style={ styles.actions }>
				<OutlineButton onPress={ getLocationHandler } icon="location">Locate</OutlineButton>
				<OutlineButton onPress={ pickOnMapHandler } icon="map">Pick</OutlineButton>
			</View>
		</View>
	);
};

export default LocationPicker;

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4,
		overflow: 'hidden'
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
	}
});