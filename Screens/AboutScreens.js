import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AboutScreen({route}) {

    const {nombre,url}= route.params;
    
    return (
        <View style={styles.container}>
            <Card containerStyle={{width:"65%"}}>
              
              <Card.Title><Ionicons name={"logo-github"} size={20} color='black'/>{nombre}</Card.Title>
              <Card.Divider/>
              {
                  url== "../assets/Roberto.jpg" ?
                    <Card.Image 
                    source={require('../assets/Roberto.jpg')}
                    resizeMode="contain"
                    />
                  :
                  <Card.Image 
                    source={require('../assets/Oscar.jpg')}
                    resizeMode="contain"
                    />
              }
              
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent: 'center',
    },
});