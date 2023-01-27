import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerLeft}
          onPress={() => navigation.openDrawer()}
        >
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Match Day</Text>
        </View>
        <TouchableOpacity style={styles.headerRight}>
          <FontAwesome
            name="search"
            size={24}
            color="white"
            style={styles.headerRightIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Notifications')}>
          <FontAwesome name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
