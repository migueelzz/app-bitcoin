import { View, Text, Image } from "react-native";
import { styles } from './styles';

export function QuotationItems(props) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contentLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoBitcoin}
            source={require('../../../img/bitcoin.png')}
          />
          <Text style={styles.dayCotation}>{props.data}</Text>
        </View>
      </View>
        <View style={styles.contentRigth}>
          <Text style={styles.price}>$ {props.valor}</Text>
        </View>
    </View>
  );
}