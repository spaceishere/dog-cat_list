import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Dog = ({ navigation }: any) => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds?limit=30")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
      });
  }, []);

  return (
    <FlatList
      data={dogs}
      renderItem={({ item, index }: any) => (
        <TouchableOpacity
          style={{ flexDirection: "row", padding: 16, backgroundColor: "white" }}
          onPress={() => navigation.navigate("DogDetail", { Id: item.id })}
        >
          <View style={{ flex: 1, width: 390 }}>
            <View style={styles.top}>
              <Text>{index + 1}.</Text>
              <Text>{item.name}</Text>
            </View>
            <View style={styles.bottom}></View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  top: {
    width: 390,
    flex: 1,
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
  },
  bottom: {
    width: 360,
    height: 1,
    border: 1,
    backgroundColor: "black",
  },
});
