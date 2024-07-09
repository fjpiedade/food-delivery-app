import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsProps } from "..";

export function RestaurantListItem({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) {
  return (
    <Pressable
      className="flex flex-row items-center justify-start gap-2"
      onPress={() => console.log("pressed image..." + restaurant.name)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View className="flex flex-col gap-2">
        <Text
          className="text-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>
        <View className="flex-row gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.9</Text>
        </View>
      </View>
    </Pressable>
  );
}
