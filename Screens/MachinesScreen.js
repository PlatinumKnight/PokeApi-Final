import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { PokeContext } from "../context/PokeContext";

export default function Machines() {
  const { Machines } = useContext(PokeContext);

  return (
    <ScrollView>
      <View>
        {Machines.map((e, i) => {
          return (
            <Card key={i} style={styles.CardContainer}>
              <Card.Title>{`Item: ${e.name}`}</Card.Title>
              <Card.Divider />
              <View style={styles.CardContainer}>
                <View style={styles.CardInfoContainer}>
                  <Card.Image
                    style={styles.CardImg}
                    source={{
                      uri: `${e?.sprites}`,
                    }}
                  />
                </View>
                <View style={styles.CardInfo}>
                  <Text style={styles.CardText}>{`The cost of the item is ${e.cost}`}</Text>
                  <View style={styles.CardContainer}>
                    <View style={styles.CardInfo}>
                          <Text style={styles.CardText}>{`Efecto: ${e.effect}`}</Text>
                    </View>
                    <View style={styles.CardInfo}>
                          <Text style={styles.CardText}>{`Descripcion: ${e.text}`}</Text>
                    </View>
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
  },
  CardText: {
    textAlign: "justify",
  },
  CardInfo: {
    flex: 1,
    // ComentarConXenius
    alignItems: "center",
    margin:10
  },
  CardInfoContainer: {
    flex: 1,
    // ComentarConXenius
    alignItems: "center",
    justifyContent:"center"
  },
  CardInfoText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CardImg: { width: 50, height: 40 },
});