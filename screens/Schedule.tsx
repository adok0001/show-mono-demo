import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../components/Styles";
import { Match } from "../types";
import { FontAwesome } from "@expo/vector-icons";

const ScheduleScreen = () => {
  const [matches, setMatches] = useState<Match[]>([
    {
      title: "Manchester United vs Chelsea",
      date: "2022-01-01",
      time: "20:00",
      homeTeam: "Manchester United",
      awayTeam: "Chelsea",
      matchType: "Competitive",
    },
    {
      title: "Barcelona vs Real Madrid",
      date: "2022-01-05",
      time: "21:00",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      matchType: "Friendly",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        renderItem={({ item }) => (
          <View style={styles.matchContainer}>
            <Text style={styles.matchTitle}>{item.title}</Text>
            <Text style={styles.matchDetails}>
              {item.date} {item.time}
            </Text>
            <Text style={styles.matchDetails}>
              {item.homeTeam} vs {item.awayTeam}
            </Text>
            <Text style={styles.matchType}>{item.matchType}</Text>
            <TouchableOpacity style={styles.reminderButton}>
                          <FontAwesome name="bell" size={24} color="orange" />
              <Text style={styles.reminderText}>Add Reminder</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default ScheduleScreen;
