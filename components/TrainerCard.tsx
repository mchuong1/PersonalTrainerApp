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
    <Content>
      <Card>
        <CardItem>
          <Image style={styles.image} source={{uri: imageUri}}/>
        </CardItem>
        <CardItem cardBody>
          <Content padder>
            <Text>{name} <Text>{distance}</Text></Text>
            <Text><Icon name="star"/> 5.0</Text>
            <Text>Training Areas</Text>
            <Text>{areas}</Text>
            <Text>Hourly Rate</Text>
            <Text>{hourlyRate}</Text>
          </Content>
        </CardItem>
        <CardItem>
          <Button full>
            <Text>Book Now</Text>
          </Button>
        </CardItem>
      </Card>
      <Text>Content goes here</Text>
    </Content>
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