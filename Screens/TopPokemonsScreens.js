import React, {useContext,useState} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PokeContext} from '../context/PokeContext';

export default function TopPokemonsScreen() {
    const {topPokemons}= useContext(PokeContext);
    
   
    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'Top 10 Pokemones', style: { color: '#fff'}}}
                containerStyle={{borderBottomColor:'black',borderBottomWidth: 2 }}
            />
            <View style={styles.container}>
            {topPokemons.map((e,i)=>{

                return(
                    <Card key={i} containerStyle={{width:"90%", marginBottom:5}}>
                     <Card.Title style={{textTransform:'capitalize'}}>{e.nombre}</Card.Title>
                     <Card.Divider/>
                     <Card.Image source={{
                        uri: e.img
                     }}
                     resizeMode="contain"
                     />
                    <View style={styles.containerStats}>
                        <Text style={styles.marginText}>
                            Peso: {e.peso}
                        </Text>
                        <Text style={{textTransform:'capitalize'}}>
                            Tipo: {e.tipo}
                        </Text>
                        <Text style={styles.marginText}>
                            Exp: {e.experiencia}
                        </Text>
                    </View>
                    <View style={styles.containerStats}>
                        <Text style={styles.marginText}>
                            Ataque: {e.ataque}
                        </Text>
                        <Text style={styles.marginText}>
                            Defensa: {e.defensa}
                        </Text>
                        <Text style={styles.marginText}>
                            Especial: {e.especial}
                        </Text>
                    </View>
                    </Card>
                    );
                })
            }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerStats: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },   
    marginText:{
        margin:5,
        textAlign:'center'
    },
});