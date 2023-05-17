import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { CurrentPrice } from './src/components/CurrentPrice';
import { HistoryGraphic } from './src/components/HistoryGraphic';
import { QuotationsList } from './src/components/QuotationsList';

function addZero(number) {
  if(number <= 9) {
    return '0' + number;
  }
  return number;
}

const url = (qtdDays) => {
  const date = new Date();
  const listLastDays = qtdDays;
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

async function getListCoins(url) {
  const response = await fetch(url);
  const result = await response.json();
  const selectListQuotations = result.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key]
    }
  })

  const data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  const responseG = await fetch(url);
  const resultG = await responseG.json();
  const selectListQuotationsG = resultG.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key];
  })
  const dataG = queryCoinsList;
  return dataG;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsListGraphic] = useState([0]);
  const [days, setDays] = useState(320);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState();

  function updateDay(day) {
    setDays(day);
    setUpdateData(true);
  }

  function priceCotation() {
    setPrice(coinsGraphicList.pop());
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsListGraphic(dataG);
    });
    priceCotation();

    if(updateData) {
      setUpdateData(false);
    }

  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      
      <CurrentPrice lastCotation={price} />
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
