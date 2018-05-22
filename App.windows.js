/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';


class TicTacToeButton extends Component{
  constructor(){
    super();
    this.state = {
      buttonTitle: "Hello"
    }
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress(){
    this.setState({
      buttonTitle:"bye!!"
    }
    );
  }
  render(){
    return(
      <Button
        onPress={this.handlePress}
        title={this.state.buttonTitle}
        color="#841584"
      />
    );
  }
}
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.ttt_table}>
        <View style={styles.ttt_row}>
          <TicTacToeButton style={styles.ttt_button} />
          <TicTacToeButton style={styles.ttt_button} />
          <TicTacToeButton style={styles.ttt_button} />
        </View>
        <View style={styles.ttt_row}>
          <TicTacToeButton style={styles.ttt_button} />
          <TicTacToeButton style={styles.ttt_button} />
          <TicTacToeButton style={styles.ttt_button} />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ttt_table: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  ttt_row:{
    flex: 1,
    alignSelf:'stretch',
  },
  ttt_button:{
    flex:1,
    //alignSelf:'stretch',
    flexDirection:'row',
    width: 50,
    height:50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
