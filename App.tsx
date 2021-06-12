import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiscoverTrainers from './src/pages/DiscoverTrainers';
import Profile from './src/pages/Profile';
import Message from './src/pages/Message';
import Train from './src/pages/Train';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Container>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Discover')
                iconName = focused ? 'globe' : 'globe-outline';
              if (route.name === 'Profile')
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              if (route.name === 'Message')
                iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
              if (route.name === 'Train')
                iconName = focused ? 'barbell' : 'barbell-outline';
              return <Icon style={focused ? styles.active: styles.inactive} name={iconName} />
            }
          })}
          tabBarOptions={{
            activeTintColor: '#414759',
            inactiveTintColor: 'gray',
          }}
        >
          {/* <Tab.Screen 
            name="Train"
            component={Train}
          />
          <Tab.Screen 
            name="Message"
            component={Message}
          /> */}
          <Tab.Screen 
            name="Discover"
            component={DiscoverTrainers}
          />
          <Tab.Screen 
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
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
  active: {
    color: '#414759'
  },
  inactive: {
    color: '#687089'
  }
});
