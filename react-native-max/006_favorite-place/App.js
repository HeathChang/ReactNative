import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/common/Icon/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

const globalStyle = {
	headerStyle: { backgroundColor: Colors.primary500 },
	headerTintColor: Colors.gray700,
	contentStyle: { backgroundColor: Colors.gray700 }
}

export default function App() {
	return (
		<>
			<StatusBar style="dark"/>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={globalStyle}
				>
					<Stack.Screen
						name="AllPlaces"
						component={ AllPlaces }
						options={ ({ navigation }) => ( {
							title: "Your Favorite Place",
							headerRight: ({ tintColor }) => (
								<IconButton
									icon="add"
									size={ 18 }
									color={ tintColor }
									onPress={ () => navigation.navigate('AddPlace') }
								/>
							),
						} ) }
					/>
					<Stack.Screen name={ "AddPlace" } component={ AddPlace } options={ { title: "Set New Place" } }/>
					<Stack.Screen name={ "Map" } component={ Map } />
				</Stack.Navigator>
			</NavigationContainer>
		</>


	);
}

