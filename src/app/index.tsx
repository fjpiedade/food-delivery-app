import { View, ScrollView } from "react-native";
// export without default

import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import TrendingFoods from "../components/trending";
import Restaurants from "../components/restaurants";
import RestaurantVerticalList from "../components/restaurants-list";
// export default

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    // <View className="w-full h-full flex justify-center items-center">
    //   {/* <Text className="text-3xl text-red-600 font-extrabold">
    //     Programming world
    //   </Text> */}
    // </View>
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        name="Top Foods"
        label="see more"
        action={() => console.log("Pressed see more")}
        size="text-2xl"
      />

      <TrendingFoods />

      <Section
        name="Top Restaurants"
        label="see all"
        action={() => console.log("Pressed see all restaurants")}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Restaurants"
        label="see all"
        action={() => console.log("Pressed see all restaurants")}
        size="text-xl"
      />

      <RestaurantVerticalList />
    </ScrollView>
  );
}
