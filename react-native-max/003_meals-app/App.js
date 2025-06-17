import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./Screen/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import MealsOverviewScreen from "./Screen/MealsOverviewScreen";



const Stack = createNativeStackNavigator()
const BottomStack = createBottomTabNavigator();


export default function App() {
	return (
		<>
			<StatusBar style={ "dark" }/>
			<NavigationContainer>
				<Stack.Navigator id="main-navigator">
					<Stack.Screen name={"MealsCategories"} component={CategoriesScreen}/>
					<Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
