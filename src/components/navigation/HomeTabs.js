import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import theme from '../../styles/theme';
import CallsScreen from '../screens/CallsScreen';
import CameraScreen from '../screens/CameraScreen';
import ChatsScreen from '../screens/ChatsScreen';
import StatusScreen from '../screens/StatusScreen';

const Tab = createMaterialTopTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Chats'
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
        style: { backgroundColor: theme.colors.teal_green },
        indicatorStyle: { backgroundColor: theme.colors.light },
        activeTintColor: theme.colors.light,
        inactiveTintColor: theme.colors.light_50,
        showIcon: true,
      }}

    >
      <Tab.Screen name="Camera" component={CameraScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='camera' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs
