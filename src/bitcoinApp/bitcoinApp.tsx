import { useState, useEffect } from 'react';
import './style.scss'

import DatePicker from './datePicker/datePicker';
import BitcoinChart from './bitcoinChart/bitcoinChart';
import CoinButtons from  './coinButtons/coinButtons';
import FavoriteButton from './favoriteButton/favoriteButton';

const BitcoinApp = () => {
    const [date, setDate] = useState <Date | null >(null);
    const [selectedCoin, setSelectedCoin] = useState <string>('USD');
    const [isFavorite, setIsFavorite] = useState <boolean>(false);
    const [values, setValues] = useState <(number | null)[]>([])
 
    // QYGK2PVB327ONSO2
    useEffect(() => {
        //get values from db according to new date
        //if coin = shekel => calaulate    
    }, [date]);

    const updateSelectedCoin = () => {
        const coin = selectedCoin === 'USD' ? 'ILS' : 'USD'
        setSelectedCoin(coin);
        // get money rate
        // change values according to money change
    }

    const updateIsFavorite = () => {
        setIsFavorite(!isFavorite)
        //add to DB
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
