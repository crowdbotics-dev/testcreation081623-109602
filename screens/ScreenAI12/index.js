import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, Image, View } from "react-native";
const DATA = [{
  id: "1",
  name: "Apple",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "2",
  name: "Banana",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "3",
  name: "Orange",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "4",
  name: "Grapes",
  image: "https://tinyurl.com/42evm3m3"
}, {
  id: "5",
  name: "Mango",
  image: "https://tinyurl.com/42evm3m3"
}];

const Item = ({
  name,
  image
}) => <View style={styles.item}>
    <Image style={styles.image} source={{
    uri: image
  }} />
    <Text style={styles.title}>{name}</Text>
  </View>;

const App = () => {
  const renderItem = ({
    item
  }) => <Item name={item.name} image={item.image} />;

  return <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10
  },
  title: {
    fontSize: 32
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  }
});
export default App;