import { View, Text } from "react-native";
import { styles } from './styles';

export function CurrentPrice(props) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
      <Text style={styles.textPrice}>Ultima cotação</Text>
    </View>
  )
}