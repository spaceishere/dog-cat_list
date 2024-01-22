import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const DogDetail = ({ route }: any) => {
  const { params } = route;
  const [dog, setDog] = useState<any>();
  const [dogImage, setDogIamge] = useState<any>();
  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${params.Id}`)
      .then((res) => res.json())
      .then((data) => {
        setDog(data);
        fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`)
          .then((res) => res.json())
          .then((data) => {
            setDogIamge(data);
          });
      });
  }, []);
  if (!dog) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View>
        {dogImage ? <Image source={{ uri: dogImage?.url }} width={450} height={300} style={{ marginTop: 10 }} /> : <Text>Picture is loading...</Text>}
      </View>
      <Text style={styles.text}>Name : {dog.name}</Text>
      <Text style={styles.text}>{dog.bred_for}</Text>
      <Text style={styles.text}>{dog.breed_group}</Text>
      <Text style={styles.text}>{dog.life_span}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
});
