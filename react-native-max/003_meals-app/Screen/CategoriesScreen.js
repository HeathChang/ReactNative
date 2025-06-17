import { CATEGORIES } from "../dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";


const CategoriesScreen = (props) => {
	const navigation = useNavigation()




	const renderCategoryItem = (itemData) => {
		const pressHandler = () => {
			// 1번째 방법
			// navigation.navigate("MealsOverview", {categoryId: itemData.item.id})
			// 2 번째 방법
			props.navigation.navigate("MealsOverview", {categoryId: itemData.item.id})
		}

		return (<CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>);
	}



	return (
		<FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2} />
	)
}

export default CategoriesScreen


