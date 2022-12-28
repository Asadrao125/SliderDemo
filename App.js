import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";

const images = [
  {
    image:
      "https://cdn.pixabay.com/photo/2018/02/22/14/58/nature-3173180_960_720.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_960_720.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_960_720.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/06/07/09/01/emotions-3459666_960_720.jpg",
  },
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const activeColor = "yellow";
const inActiveColor = "red";

export default function App() {
  const DATA = [
    {
      id: 1,
      title: "One",
      bgColor: "#994F14",
    },
    {
      id: 2,
      title: "Two",
      bgColor: "#FFCD00",
    },
    {
      id: 3,
      title: "Three",
      bgColor: "#7C878E",
    },
    {
      id: 4,
      title: "Four",
      bgColor: "#8A004F",
    },
    {
      id: 5,
      title: "Five",
      bgColor: "#00a3e0",
    },
    {
      id: 6,
      title: "Six",
      bgColor: "#4CC1A1",
    },
    {
      id: 7,
      title: "Seven",
      bgColor: "#8A004F",
    },
    {
      id: 8,
      title: "Eight",
      bgColor: "#10069F",
    },
    {
      id: 9,
      title: "Nine",
      bgColor: "#E74C3C",
    },
    {
      id: 10,
      title: "Ten",
      bgColor: "#E67E22",
    },
  ];

  const DATABN = [
    {
      id: 1,
      title: "Bottom Nav One",
      bgColor: "#994F14",
    },
    {
      id: 2,
      title: "Bottom Nav Two",
      bgColor: "#FFCD00",
    },
    {
      id: 3,
      title: "Bottom Nav Three",
      bgColor: "#7C878E",
    },
    {
      id: 4,
      title: "Bottom Nav Four",
      bgColor: "#8A004F",
    },
  ];

  const Item = ({ title, bgColor }) => (
    <TouchableOpacity onPress={(item) => alert(title)}>
      <Text
        style={[
          {
            fontSize: 18,
            textAlign: "center",
            textAlignVertical: "center",
            color: "white",
            backgroundColor: bgColor,
            borderRadius: 10,
            height: 100,
            width: WIDTH / 2.1,
            margin: 5,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const BNItem = ({ title, bgColor }) => (
    <TouchableOpacity onPress={(item) => alert(title)}>
      <Text
        style={[
          {
            fontSize: 13,
            textAlign: "center",
            textAlignVertical: "center",
            color: "white",
            backgroundColor: bgColor,
            borderRadius: 10,
            height: 40,
            width: WIDTH / 4.5,
            margin: 5,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} bgColor={item.bgColor} />
  );

  const renderItemBN = ({ item }) => (
    <BNItem title={item.title} bgColor={item.bgColor} />
  );

  return (
    <SafeAreaView>
      <View style={{ height: "100%" }}>
        <View // Topbar
          style={{
            justifyContent: "center", // Center Vertical
            alignItems: "center", // Center Horizontal
            backgroundColor: "black",
            height: "8%",
          }}
        >
          <Text style={styles.textStyle}>Home</Text>
        </View>

        <View>
          <View style={{ width: WIDTH, height: "25%" }} /* Slider */>
            <FlatListSlider
              data={images}
              indicatorContainerStyle={{ position: "absolute", bottom: 10 }}
              timer={5000}
              indicatorActiveColor={activeColor}
              indicatorInActiveColor={inActiveColor}
              onPress={(item) => alert(item)}
              contentContainerStyle={{ paddingHorizontal: 0 }}
              indicatorActiveWidth={20}
              animation
              autoscroll={true}
            />
          </View>

          <View style={{ height: "67%" }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </View>

        <View // Bottom Navigation
          style={[styles.bottomViewPosition, { backgroundColor: "white" }]}
        >
          <FlatList
            data={DATABN}
            renderItem={renderItemBN}
            keyExtractor={(item) => item.id}
            numColumns={4}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomViewPosition: {
    flexDirection: "row",
    position: "absolute",
    top: HEIGHT - 55,
  },
  topBar: {
    backgroundColor: "black",
    height: 50,
    width: WIDTH,
    color: "black",
  },
  textStyle: {
    color: "white",
    fontSize: 17,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
});
