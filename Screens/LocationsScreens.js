import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { PokeContext } from "../context/PokeContext";

export default function LocationSreens({navigation}) {
  const { Locations } = useContext(PokeContext);

  return (
    <ScrollView>
      <View>
        {Locations.map((e, i) => {
          return (
            <Card key={i} style={styles.CardContainer}>
              <Card.Title>{`Locacion Numero: ${e.id}`}</Card.Title>
              <Card.Divider />
              <View style={styles.CardContainer}>
                <View style={styles.CardInfo}>
                  <Card.Image
                    style={styles.CardImg}
                    source={{
                      uri: "https://i.blogs.es/eeb459/d0kcdq6wsaahmey/1366_2000.jpg",
                    }}
                  />
                </View>
                <View style={styles.CardInfo}>
                  <Text style={styles.CardText}>{`Ciudad: ${e.name}`}</Text>
                  <Text style={styles.CardText}>{`Region: ${e.region}`}</Text>
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
  },
  CardText: {
    textAlign: "justify",
  },
  CardInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CardInfoText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CardImg: { width: 50, height: 30 },
});
