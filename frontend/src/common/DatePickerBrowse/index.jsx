import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';

export default function ResponsiveDatePickers(props) {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack >
        <DesktopDatePicker
         label={props.label}
         value={(props.label ==="Pick-Up-Date")?localStorage.getItem("pickUpDate"):localStorage.getItem("returnDate")}
         minDate={new Date('2017-01-01')}
         onChange={(newValue) => {
          (props.label ==="Pick-Up-Date")?localStorage.setItem("pickUpDate",newValue):localStorage.setItem("returnDate",newValue)
             setValue(newValue);
         }}
         renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}