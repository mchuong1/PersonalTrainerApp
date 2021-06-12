import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiscoverTrainers from './pages/DiscoverTrainers';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Container>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size }) => {
              let iconName;

              if (route.name === 'Discover')
                iconName = focused ? 'globe' : 'globe-outline';
              
                return <Icon name={iconName} color={color} fontSize={size} />
            }
          })}
          tabBarOptions={{
            activeTintColor: '#687089',
            inactiveTintColor: 'yellow',
          }}
        >
          <Tab.Screen 
            name="Discover"
            component={DiscoverTrainers}
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
});
