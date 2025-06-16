import { Image, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { gameOverStyle as styles } from "./GameOverScreen.style";
import Title from "../components/ui/Title/Title";
import PrimaryButton from "../components/common/Button/PrimaryButton";

const GameOverScreen = (props) => {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;
	if (width < 380) {
		imageSize = 150;
	}
	if(height < 400){
		imageSize = 80;
	}
	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	}

	return (
		<ScrollView style={styles.screen}>
			<View style={ styles.rootContainer }>
				<Title>GAME OVER !</Title>
				<View style={ [styles.imageContainer, imageStyle] }>
					<Image style={ styles.image } source={ require('../assets/images/success.png') }/>
				</View>
				<Text style={ styles.summaryText }>
					Your Phone needed <Text style={ styles.highlight }>{ props.roundNumbers }</Text> rounds
					to guess the number <Text style={ styles.highlight }>{ props.userNumber }</Text>
				</Text>

				<PrimaryButton onPress={ props.onStartNewGame }>Start New Game</PrimaryButton>
			</View>
		</ScrollView>
	);
};

export default GameOverScreen;