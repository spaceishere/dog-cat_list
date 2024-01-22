import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

export const CatDetail = ({ route }: any) => {
  const { params } = route;
  const [cat, setCat] = useState<any>();
  const [catImage, setCatIamge] = useState<any>();
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/${params.Id}`)
      .then((res) => res.json())
      .then((data) => {
        setCat(data);
        fetch(`https://api.thecatapi.com/v1/images/${data?.reference_image_id}`)
          .then((res) => res.json())
          .then((data) => {
            setCatIamge(data);
          });
      });
  }, []);
  if (!cat) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View>{catImage ? <Image source={{ uri: catImage?.url }} width={393} height={300} /> : <Text>Picture is loading...</Text>}</View>
      <Text>{cat.name}</Text>
    </View>
  );
};
