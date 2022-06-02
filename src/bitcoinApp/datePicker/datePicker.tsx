import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateInputPicker(Props : props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select a date"
        value={Props.date}
        onChange={(newDate) => Props.setDate(newDate)}
        renderInput={(params) => <TextField {...params} />}
        // shouldDisableDate={isDate > today} to disable futhure date

      />
    </LocalizationProvider>
  );
}

interface props {
  date: Date | null ;
  setDate: React.Dispatch<React.SetStateAction<Date | null >>;
}
