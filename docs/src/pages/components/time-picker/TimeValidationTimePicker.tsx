import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateFnsAdapter from '@material-ui/lab/dateAdapter/date-fns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';

export default function TimeValidationTimePicker() {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2020-01-01 12:00'),
  );

  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter}>
      <div style={{ width: 300 }}>
        <TimePicker
          renderInput={(params) => (
            <TextField {...params} margin="normal" variant="standard" />
          )}
          value={value}
          label="min/max time"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
        />
        <TimePicker
          renderInput={(params) => (
            <TextField {...params} margin="normal" variant="standard" />
          )}
          label="Disable odd hours"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === 'hours' && timeValue % 2) {
              return true;
            }

            return false;
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
