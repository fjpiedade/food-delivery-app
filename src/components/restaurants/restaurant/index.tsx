import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsProps } from "..";

export function RestaurantItem({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) {
  return (
    <Pressable
      className="flex flex-col items-center justify-center rounded-xl"
      onPress={() => console.log("pressed image..." + restaurant.name)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="text-black text-sm w-20 text-center mt-2 leading-4"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
