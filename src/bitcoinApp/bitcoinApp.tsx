import React, { useState } from 'react';

import DatePicker from './datePicker/datePicker';
import BitcoinChart from './bitcoinChart/bitcoinChart';
// import useStyles from './';


const BitcoinApp = () => {
    // const classes = useStyles();
    let startOfToday = require('date-fns/startOfToday')
    const [date, setDate] = useState<Date>(startOfToday);
 
    return (
        <>
            <h1>BITCOIN APP</h1>
            <DatePicker />
            {/* setDate={setDate} /> */}
            <BitcoinChart date={date} />
        </>
        );
}
export default BitcoinApp;
