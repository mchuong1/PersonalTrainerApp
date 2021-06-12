import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { 
  Container, Footer, FooterTab, 
  Text, Button, Content,
  Icon, Card, CardItem,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TrainerCard from './components/TrainerCard';
import Navigation from './components/Navigation';

const Stack = createStackNavigator();

export default function App() {

  const data = {
    name: 'James Marcus',
    imageUri: 'https://fitnesstrainer.imgix.net/uploads/instructor/picture/23339/img1.jpg?auto=format%2Cenhance%2Credeye',
    distance: '3 miles',
    trainingAreas: ['Gym', 'Home', 'Virtual'],
    hourlyRate: '40.00'
  }


  return (
    <NavigationContainer>
      <Container>
        <TrainerCard data={data}/>
        <Navigation />
      </Container>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    flex: 1
  },
});
