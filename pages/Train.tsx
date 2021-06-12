import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';

export default function Train() {

  return(
    <Content>
      <Text>Train Page</Text>
    </Content>
  )
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