import { Content } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import TrainerCard from '../components/TrainerCard'

export default function DiscoverTrainers() {

  const data = {
    name: 'James Marcus',
    imageUri: 'https://fitnesstrainer.imgix.net/uploads/instructor/picture/23339/img1.jpg?auto=format%2Cenhance%2Credeye',
    distance: '3 miles',
    trainingAreas: ['Gym', 'Home', 'Virtual'],
    hourlyRate: '40.00'
  }


  return(
    <Content>
      <TrainerCard data={data}/>
    </Content>
  );
}

const styles = StyleSheet.create({
  root: {

  },
});