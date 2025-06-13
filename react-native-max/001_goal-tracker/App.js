import { Button, FlatList, View } from 'react-native';
import { appStyle as styles } from "./App.style";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInputs from "./components/GoalInputs";
import { StatusBar } from "expo-status-bar/build/StatusBar";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isModalVisible, setModalVisible] = useState(false);


	const addGoalHandler = (goal) => {
		setCourseGoals(prev => [...prev, goal]);
	};

	const deleteGoalHandler = (id) => {
		setCourseGoals(prev => prev.filter((item, index) => index.toString() !== id));
	};

	const cancelGoalHandler = () => {
		setModalVisible(false);
	};

	const renderItemFlatList = (itemData) => (
		<GoalItem text={ itemData.item } id={ itemData.index.toString() } onDeleteItem={ deleteGoalHandler }/>
	);

	return (
		<>
			{/*CHECK:: 위에 상태창 (시간, 배터리 등 표시)*/}
			<StatusBar style={ 'light' }/>

			<View style={ styles.appContainer }>
				<Button title={ "Add New Goal" } color={ "#a16fe1" } onPress={ () => setModalVisible(true) }/>
				{
					isModalVisible &&
					<GoalInputs onAddGoal={ addGoalHandler } visible={ isModalVisible } onCancelGoal={ cancelGoalHandler }/>
				}

				<View style={ styles.goalsContainer }>
					{/* CHECK:: ScrollView 는 모든 아이템을 랜더하여 리소스 낭비가 발생할 수 있음 > 대안, FlatList*/ }
					{/*<ScrollView alwaysBounceVertical={ false }>*/ }
					{/*	{ courseGoals.map((goal, index) => (*/ }
					{/*		<View key={ index } style={ styles.goalItem }>*/ }
					{/*			<Text style={ styles.goalText }>{ goal }</Text>*/ }
					{/*		</View>*/ }
					{/*	)) }*/ }
					{/*</ScrollView>*/ }

					<FlatList data={ courseGoals } renderItem={ renderItemFlatList } alwaysBounceVertical={ false }
										keyExtractor={ (item, index) => index.toString() }/>
				</View>

			</View>
		</>
	);
}
