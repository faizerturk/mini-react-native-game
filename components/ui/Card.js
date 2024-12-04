import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.purple1,
    borderRadius: 8,
    elevation: 4, //box Shadow for android
    shadowColor: 'black', //box Shadow for ios
    shadowOffset: { width: 0, height: 2 }, //box Shadow for ios
    shadowRadius: 6, //box Shadow for ios
    shadowOpacity: 0.25, //box Shadow for ios
  },
});
