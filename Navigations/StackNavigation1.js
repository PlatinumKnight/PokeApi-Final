import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import LocationsScreens from '../Screens/LocationsScreens';
import MachineScreen from '../Screens/MachinesScreen';
import EvolutionsScreen from '../Screens/EvolutionsScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="LocationsScreens" component={LocationsScreens}
                options={{headerShow:true, headerTitle:"Locations"}}
            />

            <Stack.Screen name="MachineScreen" component={MachineScreen}
                options={{headerShow:true, headerTitle:"Machine"}}
            />  

             <Stack.Screen name="EvolutionsScreen" component={EvolutionsScreen}
                options={{headerShow:true, headerTitle:"Evoluciones"}}
            />  

        </Stack.Navigator>

    )
}