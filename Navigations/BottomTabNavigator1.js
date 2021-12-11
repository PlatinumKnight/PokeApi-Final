import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Navigations/StackNavigation1';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopTabNavigator1 from './TopTabNavitagor1';
import TopPokemonesScreen from '../Screens/TopPokemonsScreens';
import PokeballsScreen from '../Screens/PokeballsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12,
                },
                style:{
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                 name="Top"
                 component={TopPokemonesScreen}
                 options={{
                     tabBarLabel:"Top Pokemones",
                     tabBarIcon:()=>(
                         <Ionicons name={"flame"} size={20} color="red"/>
                     )
                }}
            />
            <Tab.Screen
                 name="Pokeballs"
                 component={PokeballsScreen}
                 options={{
                     tabBarLabel:"Pokeballs",
                     tabBarIcon:()=>(
                         <Ionicons name={"disc"} size={20} color="red"/>
                     )
                }}
            />

            <Tab.Screen
                name="About"
                component={TopTabNavigator1}
                options={{
                    tabBarLabel:"Nosotros",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person"} size={20} color={color}/>
                    )
                }}
            />
            
             
        </Tab.Navigator>
    )
}