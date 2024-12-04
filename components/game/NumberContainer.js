import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numbersText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow2,
    padding: 24,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbersText: {
    color: Colors.yellow2,
    fontSize: 36,
    fontWeight: 'bold',
  },
});