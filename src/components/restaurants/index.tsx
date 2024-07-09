import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { RestaurantItem } from "./restaurant";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.1.64:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
