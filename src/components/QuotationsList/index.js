import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { styles } from './styles';
import { QuotationItems } from "./QuotationItems";

export function QuotationsList(props) {
  const daysQuery = props.filterDay
  return (
    <>
      <View style={styles.filters}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonQuery}
          onPress={() => daysQuery(365)}
        >
          <Text style={styles.textButtonQuery}>1Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonQuery}
          onPress={() => daysQuery(730)}
        >
          <Text style={styles.textButtonQuery}>2Y</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonQuery}
          onPress={() => daysQuery(730+365)}
        >
          <Text style={styles.textButtonQuery}>3Y</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationItems valor={item.valor} data={item.data} />
          }}
        />
      </ScrollView>
    </>
  )
}