import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from '../Screens/AboutScreens';
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Usuario"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Usuario"
                initialParams={{
                    nombre:'@RobertoFelixQuintana',
                    url:'../assets/Roberto.jpg'
                }}
                co
                component={AboutScreen}
                options={{
                    tabBarLabel:"Jefe",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Usuario2"
                initialParams={{
                    nombre:'@OscarRuvalcaba',
                    url:'../assets/Oscar.jpg'
                }}
                component={AboutScreen} 
                options={{
                    tabBarLabel:"Chalan",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people"} size={20} color={color}/>
                    )
                }}
            
            />

        </Tab.Navigator>
    )
}