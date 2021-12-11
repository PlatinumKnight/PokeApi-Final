import React, {useContext,useState,useEffect} from 'react';
import { ScrollView, Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { Header, Card} from 'react-native-elements';
import {PokeContext} from '../context/PokeContext';

export default function HomeScreen({navigation}) {
    const {searchPokemon,pokemon,pokemonEncontrado} = useContext(PokeContext);
    const [search,setSearch]=useState("");

    const onChange =(palabra)=>{
        let temporal = palabra.toLowerCase();
        setSearch(temporal);
    }
    const onClick = () =>{
        searchPokemon(search);
    }

    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'Buscar Pokemon', style: { color: '#fff'}}}
                containerStyle={{borderBottomColor:'black',borderBottomWidth: 2 }}
            />
            <View style={styles.containerButton}>
                <View style={styles.container}>
                  <TextInput
                  style={styles.input}
                  onChangeText={(text)=>{onChange(text)}}
                  maxLength={40}
                  placeholder="Buscar pokemon"
                  />
                </View>
                <Button
                onPress={onClick}
                title="Buscar"
                />

            </View>
            {pokemonEncontrado==true && pokemon.nombre !== undefined ?
                
                <View style={styles.containerStats}>
                    <Card key="1" containerStyle={{width:"90%", marginBottom:5}}>
                     <Card.Title style={{textTransform:'capitalize'}}>{pokemon.nombre}</Card.Title>
                     <Card.Divider/>
                     <Card.Image source={{
                        uri: pokemon.img
                     }}
                     resizeMode="contain"
                     />
                    <View style={styles.containerStats}>
                        <Text style={styles.marginText}>
                            Peso: {pokemon.peso}
                        </Text>
                        <Text style={{textTransform:'capitalize'}}>
                            Tipo: {pokemon.tipo}
                        </Text>
                        <Text style={styles.marginText}>
                            Exp: {pokemon.experiencia}
                        </Text>
                    </View>
                    <View style={styles.containerStats}>
                        <Text style={styles.marginText}>
                            Ataque: {pokemon.ataque}
                        </Text>
                        <Text style={styles.marginText}>
                            Defensa: {pokemon.defensa}
                        </Text>
                        <Text style={styles.marginText}>
                            Especial: {pokemon.especial}
                        </Text>
                    </View>
                    </Card>
                </View>
    
                :
                <View>
                    <View style={styles.container}>
                      <Text style={styles.texto}>No se ha encontrado al pokemon</Text>
                    </View>
                </View>    
            }
            <View style={styles.containerStats}>
                    <View style={styles.container}>
                      <Text>Ver la evolucion del pokemon encontrado</Text>
                    </View>
                    <View style={styles.container}>
                      {pokemonEncontrado==true?
                      <Button
                      disabled={false}
                      onPress={()=>navigation.navigate('EvolutionsScreen')}
                      title="Ir a evoluciones"
                      />
                      
                      :
                      <Button
                      disabled={true}
                      onPress={()=>navigation.navigate('EvolutionsScreen')}
                      title="Ir a evoluciones"
                      />
                      }
                    </View>
                    
                    </View>
                    <View style={styles.container}>
                      <Text style={styles.texto}>Otras opciones mas para buscar</Text>
                      <View style={styles.containerStats}>
                        <View style={styles.container}>
                          <Button
                          onPress={()=>navigation.navigate('LocationsScreens')}
                          title="Locations"
                          />
                        </View>
                        <View style={styles.container}>
                          <Button
                          onPress={()=>navigation.navigate('MachineScreen')}
                          title="Machine"
                          />
                        </View>
                      </View>
                    </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15,
        marginBottom:5
    },
    texto:{
      textAlign:'center'
    },
    containerStats: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:15
    },
    containerButton:{
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginText:{
        margin:5,
        textAlign:'center'
    },
    input: {
        minWidth:80,
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 5,
      },
  });