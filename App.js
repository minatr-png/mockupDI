/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from './node_modules/react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Navegacio } from './components/navegacio/Navegacio';
import { Event } from './components/event/Event';

class App extends Component {
  render() {
    return (
      <View style={styles.contenidor}>

        <View style={styles.container}>
          <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <Image
              style={styles.shield}
              source={require('./assets/shields/Valencia.png')}
            />
            <Text style={styles.vs}>vs</Text>
            <Image
              style={styles.shield}
              source={require('./assets/shields/Madrid.png')}
            />
          </View>
        </View>

        <Event></Event>
        <View style={styles.titulo}>
          <Text style={styles.tituloText}>DO YOU FEEL IN</Text>
          <Text style={styles.tituloText}>NEED OF HELP?</Text>
        </View>
        <View style={styles.seccion}>
          <View style={styles.sectionText}>
            <Text style={styles.sectionTextText}>CLICK TO FIND</Text>
            <Text style={styles.sectionTextText}>SOME ASSOCIATIONS</Text>
            <Text style={styles.sectionTextText}>THAT WILL HELP YOU</Text>
          </View>
        </View>
        <Navegacio></Navegacio>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  seccion: {
    flex: 2,
    borderBottomWidth: 2,
    backgroundColor: '#E6D6D3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 240,
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  sectionText: {
    marginTop: '20%',
  },
  sectionTextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  /***************************************************************************************COMENTAR */
  shield: {
    aspectRatio: 1,
    width: '25%',
  },
  vs: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    marginTop: '8%',
    marginLeft: '9%',
    marginRight: '9%',
    fontFamily: 'Comfortaa',
  },
  container: {
    flex: 1,
    borderBottomWidth: 2,
    backgroundColor: '#E6D6D3',
    borderBottomColor: '#797979',
    justifyContent: 'center',
  },
});

export default App;