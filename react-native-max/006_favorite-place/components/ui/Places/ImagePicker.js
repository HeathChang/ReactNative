import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../../constants/colors";

const ImagePicker = () => {
	const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

	const [pickedImage, setPickedImage] = useState(null);
	const verifyPermission = async () => {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}
		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert('No Permission', 'You need Camera Permission to use the app.');
			return false;
		}
		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermission();
		console.log("hasPermission:: ", hasPermission);
		if (!hasPermission) return;

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: .5,

		});
		setPickedImage(image.uri);

	};

	let imagePreview = <Text> No Image </Text>;

	if (pickedImage) {
		imagePreview = <Image source={ { uri: pickedImage } } style={ styles.image }/>;
	}
	return (
		<View>
			<View style={ styles.imagePreview }>
				{ imagePreview }
				{/*<Image style={styles.image} source={"file:///var/mobile/Containers/Data/Application/A98FF374-8B5D-4627-8825-3F24384A1F46/Library/Caches/ExponentExperienceData/@anonymous/Favorite%20Place-0295b056-97b9-4cf1-9b4c-99a65cb95a2f/ImagePicker/C973A7AD-5641-43F3-B6CB-CC85EE879810.jpg"} />*/ }
			</View>
			<Button title={ "Take Image" } onPress={ takeImageHandler }/>
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({
	imagePreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4
	},
	image: {
		width: '100%',
		height: '100%'
	}
});