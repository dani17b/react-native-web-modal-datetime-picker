import React, { Component } from 'react';
import { View } from 'react-native';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import lightBlue from '@material-ui/core/colors/lightBlue';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: lightBlue.A200,
        color: 'white',
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      selected: {
        backgroundColor: lightBlue['400'],
      },
      current: {
        color: lightBlue['900'],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue['400'],
      },
    },
    MuiModal : {
      root : {
        backgroundColor : "rgba(255,255,255,0.25)",
        zIndex : 99999
      }
    }
  },
});

class DateTimePickerWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.date ? this.props.date : new Date()
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.isVisible){
      this.refs.picker.open();
    }else{
      this.refs.picker.close();
    }
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    this.props.onConfirm(date);
  };
  render() {
    return (
      <View style={{opacity : 0}}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider theme={materialTheme}>
            <DateTimePicker 
              ref="picker" 
              value={this.state.selectedDate} 
              onChange={this.handleDateChange} 
            />
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </View>
    );
  }
}

export default DateTimePickerWeb;