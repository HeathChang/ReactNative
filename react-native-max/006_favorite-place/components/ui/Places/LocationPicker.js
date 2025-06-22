import { Alert, StyleSheet, View } from "react-native";
import OutlineButton from "../../common/Button/OutlineButton";
import { Colors } from "../../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";


const LocationPicker = () => {
	const [locationPermissionInformation, requestPermission] = useForegroundPermissions();


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
	}

	const getLocationHandler = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) return;


		const location = await getCurrentPositionAsync();
		console.log("location:: ", location)
	}

	const pickOnMapHandler = () => {

	}

	return (
		<View>
			<View style={styles.mapPreview}>

			</View>

			<View style={styles.actions}>
				<OutlineButton onPress={getLocationHandler} icon="location">Locate</OutlineButton>
				<OutlineButton onPress={pickOnMapHandler} icon="map">Pick</OutlineButton>
			</View>
		</View>
	)
}

export  default LocationPicker

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'

	}
})