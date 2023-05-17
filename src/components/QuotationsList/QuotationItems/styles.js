import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContent: {
    width: '95%',
    height: 'auto',
    backgroundColor: '#111',
    marginHorizontal: '3%',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  contentLeft: {
    width: '36%',
    height: '100%',
    alignItems: 'flex-start',
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 6,
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentRigth: {
    width: '60%',
    alignItems: 'flex-end',
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});