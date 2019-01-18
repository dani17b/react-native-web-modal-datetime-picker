import React, { Component } from 'react';
import { View } from 'react-native';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';
import moment from 'moment';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import lightBlue from '@material-ui/core/colors/lightBlue';

class DateTimePickerWeb extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedDate: this.props.date
    };

    var primaryColor = this.props.primaryColor || lightBlue['400'];

    this.materialTheme = createMuiTheme({
      overrides: {
        MuiPickersToolbar: {
          toolbar: {
            backgroundColor: primaryColor,
          },
        },
        MuiPickersDay: {
          selected: {
            backgroundColor: primaryColor,
          },
          current: {
            color: "#333333",
          },
        },
        MuiPickersModal: {
          dialogAction: {
            color: primaryColor,
          },
        },
        MuiTabs : {
          flexContainer : {
            backgroundColor: primaryColor
          }
        },
        MuiPrivateTabIndicator : {
          root : {
            backgroundColor : "rgba(255,255,255,0.95)"
          },
          colorSecondary : {
            backgroundColor : "rgba(255,255,255,0.95)"
          }
        },
        MuiPickersClock : {
          pin : {
            backgroundColor : primaryColor
          }
        },
        MuiPickersClockPointer : {
          pointer : {
            backgroundColor : primaryColor
          },
          thumb : {
            backgroundColor : primaryColor,
            borderColor : primaryColor
          }
        },
        MuiPickersClockNumber : {
          selected : {
            backgroundColor : primaryColor
          }
        },
        MuiModal : {
          root : {
            backgroundColor : "rgba(255,255,255,0.25)",
            zIndex : 99999
          }
        }
      },
    });

    if(this.props.locale){
      moment.locale(this.props.locale);
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.isVisible){
      this.refs.picker.open();
    }else{
      this.refs.picker.close();
    }

    if(newProps.date){
      this.setState({
        selectedDate : newProps.date
      })
    }
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date });
    this.props.onConfirm(date.toDate());
  };
  render() {
    return (
      <View style={{opacity : 0}}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider theme={this.materialTheme}>
            {this.props.mode == "datetime" &&
              <DateTimePicker 
                ref="picker" 
                value={this.state.selectedDate} 
                onChange={this.handleDateChange}
                ampm={false}
              />
            }
            {this.props.mode == "time" &&
              <TimePicker
                ref="picker"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                ampm={false}
              />
            }
            {this.props.mode == "date" &&
              <DatePicker
                ref="picker"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                ampm={false}
              />
            }
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </View>
    );
  }

  componentWillUnmount(){
    this.refs.picker.close();
  }
}

export default DateTimePickerWeb;