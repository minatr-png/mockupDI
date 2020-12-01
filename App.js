/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Navegacio } from './components/navegacio/Navegacio';

class App extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <ScrollView>
            <View style={{backgroundColor:'#F7F0E8', height: 45, justifyContent: 'center'}}>
              <Button 
                buttonStyle={styles.filter}
                titleStyle={styles.filterText}
                title='Filter'
              />
            </View>
            <View style={styles.seccion}>
              <Text style={styles.sectionMatch}>COPA DEL REY</Text>
              <View style={styles.container}>
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
            <View style={styles.seccion}>
              <Text style={styles.sectionMatch}>COPA DEL REY</Text>
              <View style={styles.container}>
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
            <View style={styles.seccion}>
              <Text style={styles.sectionMatch}>COPA DEL REY</Text>
              <View style={styles.container}>
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
            <View style={styles.seccion}>
              <Text style={styles.sectionMatch}>COPA DEL REY</Text>
              <View style={styles.container}>
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
          </ScrollView>
          <Navegacio></Navegacio>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height: '100%',
    width: '100%',
  },
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  filter: {
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    borderBottomColor: '#797979',
    fontSize: 12,
    fontWeight: '600',
    color: '#F7F0E8',
    width: '97%',
    height: '90%',
    alignSelf: 'center',
  },
  filterText: {
    color: '#883F39',
    fontSize: 21,
  },
  seccion: {
    flex:2,
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 240,
  },  
  sectionMatch: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Comfortaa',
    marginTop: '5%',
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
  shield: {
    height: '60%',
    width: '37%',
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  vs: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '14%',
    fontFamily: 'Comfortaa',
  },
});

export default App;