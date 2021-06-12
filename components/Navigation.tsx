import React from 'react';
import { StyleSheet } from 'react-native';
import { 
  Footer, FooterTab, 
  Text, Button, Icon, Container,
} from 'native-base';

export default function Navigation() {

  return(
    <Footer>
      <FooterTab>
        <Button full>
          <Icon name="barbell-outline"/>
          <Text>Train</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button full>
          <Icon name="chatbox-ellipses-outline"/>
          <Text>Message</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button full>
          <Icon name="globe-outline"/>
          <Text>Discover</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button full>
          <Icon name="person-circle-outline"/>
          <Text>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
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