import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: Colors.yellow3,
    padding: 12,
    borderRadius: 10,
    maxWidth: '80%',
    width: 300,
  },
});
