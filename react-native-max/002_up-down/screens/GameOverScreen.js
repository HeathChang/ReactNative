import { Image, Text, View } from "react-native";
import { gameOverStyle as styles } from "./GameOverScreen.style";
import Title from "../components/ui/Title/Title";
import PrimaryButton from "../components/common/Button/PrimaryButton";

const GameOverScreen = (props) => {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER !</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={ require('../assets/images/success.png')} />
			</View>
			<Text style={styles.summaryText}>
				Your Phone needed <Text style={styles.highlight}>{props.roundNumbers}</Text> rounds
				to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
			</Text>

			<PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;