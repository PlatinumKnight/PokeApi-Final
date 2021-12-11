import React, {createContext, useState, useEffect} from 'react';
import { Alert } from 'react-native';

export const PokeContext = createContext();


const PokeProvider = (props)=>{
    const [allPokemons,setallPokemons]= useState([]);
    const [pokemonEncontrado,setPokemonEncontrado]=useState(false);
    const [pokemon,setPokemon]=useState([]);
    const [topPokemons]=useState([]);
    const [Locations] = useState([]);
    const [Items] = useState([]);
    const [Machines] = useState([]);
    const [nombresEvolutions]=useState([]);
    const [evolutions]=useState([]);
    const nombreTopPokemons = ['kyogre','dialga','rayquaza','mewtwo','kyurem','diancie','zygarde','palkia','lugia','necrozma'];
    

    const searchPokemon = async (pokemon)=>{
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res= await fetch (url);
            const data = await res.json();
            const temporal={
                nombre:data.name,
                img:data.sprites.front_default,
                peso: data.weight,
                tipo: data.types[0].type.name,
                experiencia: data.base_experience,
                ataque:data.stats[1].base_stat,
                especial:data.stats[3].base_stat,
                defensa:data.stats[2].base_stat
            }
            const urlPokemonEvolution=data.species.url
            const res2= await fetch (urlPokemonEvolution);
            const data2 = await res2.json();
            const urlPokemonEvolution2=data2.evolution_chain.url   
            setPokemon(temporal);
            setPokemonEncontrado(true);
            searchEvolutions(urlPokemonEvolution2);
            Alert.alert('Se encontro al pokemon');
        }catch(e){
            setPokemonEncontrado(false);
            Alert.alert('No se encontro al pokemon');
        }
    }
    const searchEvolutions = async(url)=>{
      try{
        if(evolutions.length>0){
          nombresEvolutions.length=0;
          evolutions.length=0;
        }
        const res= await fetch (url);
        const data = await res.json();
        
        if(data.chain.species!==undefined){
          nombresEvolutions.push(data.chain?.species.name);
        }
        if(data.chain?.evolves_to.length!==0){
          nombresEvolutions.push(data.chain?.evolves_to[0].species.name);
        }
        if(data.chain?.evolves_to[0].evolves_to.length!==0){
          nombresEvolutions.push(data.chain?.evolves_to[0].evolves_to[0]?.species.name);
        }
        nombresEvolutions.map(async (e,i)=>{
          let url = `https://pokeapi.co/api/v2/pokemon/${e}`;
          const res2= await fetch (url);
          const data2 = await res2.json();
          const temporalData={
            nombre: data2.name,
            img: data2.sprites.front_default,
            peso: data2.weight,
            tipo: data2.types[0].type.name,
            experiencia: data2.base_experience,
            ataque: data2.stats[1].base_stat,
            especial: data2.stats[3].base_stat,
            defensa: data2.stats[2].base_stat
          }
          evolutions.push(temporalData);
        })
      }
      catch(error){
        console.log(error);
      }
    }
    const topPokemonsSearch = async (pokemon) =>{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(async(res)=> await res.json()
        .then(async(data)=> {
            const temporal={
                nombre:data.name,
                img:data.sprites.front_default,
                peso: data.weight,
                tipo: data.types[0].type.name,
                experiencia: data.base_experience,
                ataque:data.stats[1].base_stat,
                especial:data.stats[3].base_stat,
                defensa:data.stats[2].base_stat
            }
            topPokemons.push(temporal);
        })
        )
    } 
    const configurarTopPokemons = ()=>{
        nombreTopPokemons.map((element) => {
            topPokemonsSearch(element);   
        }); 
        
    }

    const searchLocations = async (i = 1) => {
        let url = `https://pokeapi.co/api/v2/location/${i}/`;
        const res = await fetch(url);
        const data = await res.json();
        const Temp = {
          id: data.id,
          name: data.names[1].name,
          region: data.region.name,
        };
        Locations.push(Temp);
      };
    
      const searchItems = async (i = 1) => {
        let url = `https://pokeapi.co/api/v2/item/${i}/`;
        const res = await fetch(url);
        const data = await res.json();
    
        const Temp = {
          name: data.names[5].name,
          cost: data.cost,
          sprites: data.sprites.default,
          effect: data.effect_entries[0].short_effect,
        };
        Items.push(Temp);
      };
      
      const searchMachines = async (i = 1) => {
        let url = `https://pokeapi.co/api/v2/machine/${i}/`;
        const res = await fetch(url);
        const data = await res.json();
        const URLM = [];
        URLM.push(data.item.url);
    
        fetch(URLM)
          .then((response) => response.json())
          .then(function (data) {

            const Temp = {
              id: data.id,
              cost: data.cost,
              name: data.names[5].name,
              sprites: data.sprites.default,
              text: data.flavor_text_entries[1].text,
              effect: data.effect_entries[0]?.short_effect,
            };
            Machines.push(Temp);
          });
      };
    
      const id = () => {
        for (let i = 2; i <= 5; i++) {
          searchLocations(i);
          searchItems(i);
        }
      };
    
      useEffect(() => {
        searchMachines(); 
        searchLocations();
        id();
        searchItems();
        configurarTopPokemons();
      }, []);
    


  return(
    <PokeContext.Provider
    value={{
        searchPokemon,
        allPokemons,
        topPokemonsSearch,
        nombreTopPokemons,
        topPokemons,
        pokemonEncontrado,
        pokemon,
        setPokemon,
        configurarTopPokemons,
        Items,
        Locations,
        Machines,
        evolutions
    }}>
    {props.children}
    </PokeContext.Provider>
  );
}

export default PokeProvider;