import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children, style }) {
  //infront of the default style if you want to ensure that the default styles override the incoming styles
  //last item can override the predefined style (this case)
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.yellow2,
    fontSize: 24,
  },
});
