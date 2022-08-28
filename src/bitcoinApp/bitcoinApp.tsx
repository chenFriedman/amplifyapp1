import { useState, useEffect } from 'react';
import  { API, Auth } from 'aws-amplify';
import axios from 'axios';

import { listBitcoins, getBitcoinByDate } from '../graphql/queries';
import { createBitcoin as creatrBitcoinMution } from '../graphql/mutations';

import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

import DatePicker from './datePicker/datePicker';
import CoinButtons from  './coinButtons/coinButtons';
import BitcoinChart from './bitcoinChart/bitcoinChart';
import FavoriteButton from './favoriteButton/favoriteButton';

import './style.scss'

const BitcoinApp = () => {
    const [date, setDate] = useState <Date | null >(null);
    const [selectedCoin, setSelectedCoin] = useState <string>('USD');
    const [isFavorite, setIsFavorite] = useState <boolean>(false);
    const [values, setValues] = useState <(number | null)[]>([])
 
    const apikey = 'QYGK2PVB327ONSO2' // to move to aws parameters
    const url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=ILS&apikey=$(apikey)';

    useEffect(() => {
        check();
        getBitCoinRates();
    }, []);

     const check = async() =>{
        try {
          const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
          console.log("User info: ",userInfo)
    
        //If there is a user
          if(userInfo){
            
            const data = {
                date: '2019-09-24',
                isFavorite: false,
                ils: { open: "33530.80320000", high: "33851.48544000", low: "26956.80000000", close: "29352.29184000" },
                usd: { open: "9702.20000000", high: "9794.99000000", low: "7800.00000000", close: "8493.14000000" }
            };

            // const oneTodo = await API.graphql({ query: mutations.createBitcoin, variables: data});   
            const oneTodo = await API.graphql({ query: queries.listBitcoins});   
            console.log("one todos: ",oneTodo); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }   
          }
        }
    
        catch (err) {
          console.log('error: ', err)
        }
    }
    
    const getBitCoinRates = async() => {
        axios.get(url).then(async (res) => {
            let bitcoinHistory = res?.data['Time Series (Digital Currency Daily)'];
            console.log('bitcoinHistory: ',bitcoinHistory)
        });
    };

    

    
    
    useEffect(() => {
        //get values from db according to new date
    }, [date]);

    const updateSelectedCoin = () => {
        const coin = selectedCoin === 'USD' ? 'ILS' : 'USD'
        setSelectedCoin(coin);
        // change values according to money change
    }

    const updateIsFavorite = () => {
        setIsFavorite(!isFavorite)
        //update value in DB
    }

    return (
        <div className='app-container'>
            <h1>BITCOIN APP</h1>
            <div>
                <DatePicker date={date} setDate={setDate}/>
                <CoinButtons selectedCoin={selectedCoin} updateSelectedCoin={updateSelectedCoin} />
                <FavoriteButton isFavorite={isFavorite} updateIsFavorite={updateIsFavorite}/>
            </div>
            <div className='chart'>
                <BitcoinChart date={date} data={values}/>
            </div>
        </div>
   );
}
export default BitcoinApp;
