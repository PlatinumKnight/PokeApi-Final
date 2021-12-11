import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header, Card} from 'react-native-elements';
import { PokeContext } from "../context/PokeContext";

export default function Items() {
  const { Items } = useContext(PokeContext);

  return (
    <ScrollView>
      <View>
        <Header
          centerComponent={{ text: 'Pokebolas', style: { color: '#fff'}}}
          containerStyle={{borderBottomColor:'black',borderBottomWidth: 2 }}
        />
        {Items.map((e, i) => {
          return (
            <Card key={i} style={styles.CardContainer}>
              <Card.Title>{`Item: ${e.name}`}</Card.Title>
              <Card.Divider />
              <View style={styles.CardContainer}>
                <View style={styles.CardInfo}>
                  <Card.Image
                    style={styles.CardImg}
                    source={{
                      uri: `${e.sprites}`,
                    }}
                  />
                </View>
                <View style={styles.CardInfo}>
                  <View>
                    <Text style={styles.CardText}>{`The cost of the item is ${e.cost}`}</Text>
                  </View>
                  <View>
                    <Text style={styles.CardText}>{`${e.effect}`}</Text>
                  </View>
                  
                </View>
              </View>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,
    flexDirection: "row",
    margin:10
  },
  CardTitle: {},
  CardText: {
    flex:1,
  },
  CardInfo: {
    flex: 1,
  },
  CardInfoText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CardImg: { width: 50, height: 30 },
});