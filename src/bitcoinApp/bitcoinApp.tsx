import { useState, useEffect } from 'react';
import './style.scss'

import axios from 'axios';

import DatePicker from './datePicker/datePicker';
import CoinButtons from  './coinButtons/coinButtons';
import BitcoinChart from './bitcoinChart/bitcoinChart';
import FavoriteButton from './favoriteButton/favoriteButton';

const BitcoinApp = () => {
    const [date, setDate] = useState <Date | null >(null);
    const [selectedCoin, setSelectedCoin] = useState <string>('USD');
    const [isFavorite, setIsFavorite] = useState <boolean>(false);
    const [values, setValues] = useState <(number | null)[]>([])
 
    const apikey = 'QYGK2PVB327ONSO2'
    const url = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=ILS&apikey=$(apikey)';

    useEffect(() => {
        getBitCoinRates();
    }, []);
    
    const getBitCoinRates = () => {
        axios.get(url).then((res) => {
            console.log(res.data['Time Series (Digital Currency Daily)']);
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
