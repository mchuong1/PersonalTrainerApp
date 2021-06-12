import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import {  
  Text, Button, Content,
  Icon, Card, CardItem,
} from 'native-base';

export default function TrainerCard(props:any) {
  
  const { 
    name, imageUri, distance,
    trainingAreas, hourlyRate 
  } = props.data;

  const areas = trainingAreas.join(', ');

  return(
    <Content padder>
      <Card>
        <CardItem style={styles.cardItem}>
          <Image style={styles.image} source={{uri: imageUri}}/>
        </CardItem>
        <CardItem cardBody style={styles.cardItem}>
          <Content padder>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.label}>
              {distance} <Icon name="star" style={styles.icon}/> 5.0 300 workouts
            </Text>
            <Text style={styles.title}>Training Areas</Text>
            <Text style={styles.label}>{areas}</Text>
            <Text style={styles.title}>Hourly Rate</Text>
            <Text style={styles.label}>{hourlyRate}</Text>
          </Content>
        </CardItem>
        <CardItem style={styles.cardItem}>
          <Button full style={styles.button}>
            <Text>Book Now</Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: '#555555',
    padding: 0,
    borderRadius: 0,
    margin: 0
  },
  content: {

  },
  image: {
    height: 200,
    flex: 1
  },
  button: {
    borderRadius: 5,
    width: '100%',
    color: 'white',
    backgroundColor: '#9DA2B3'
  },
  title: {
    color: '#838691',
    fontSize: 24
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10
  },
  icon: {
    color: '#E4E500',
    fontSize: 16
  }
});