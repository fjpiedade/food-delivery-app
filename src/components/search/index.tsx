import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="w-full flex flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color={"#64748b"} />
      <TextInput
        className="w-full h-full flex-1 bg-transparent text-lg"
        placeholder="Type what do u looking for ..."
      />
    </View>
  );
}
