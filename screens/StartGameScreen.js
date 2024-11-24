import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, //box Shadow for android
    shadowColor: 'black', //box Shadow for ios
    shadowOffset: { width: 0, height: 2 }, //box Shadow for ios
    shadowRadius: 6, //box Shadow for ios
    shadowOpacity: 0.25, //box Shadow for ios
  },
});
