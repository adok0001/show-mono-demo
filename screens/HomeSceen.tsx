import React, { useState } from "react";
import { Button, View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../components/Styles";
import { data } from "../Data";
import { Video } from "expo-av";

const HomeScreen = ({navigation, route}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
 
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Live Shows
          </Text>
          <ScrollView horizontal={true} style={styles.liveShows}>
            {
              /* Render the live streams here using a map function */
              data.map((item) => (
                <View key={item.id} style={{ marginBottom: 14 }}>
                  <Video
                    source={{ uri: item.link }}
                    ref={video}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  />
                  <Button
                    title={item.homeTeam + " vs " + item.awayTeam}
                    onPress={() =>
                      navigation.navigate("MatchInfo", {
                        id: item.id,
                        match: item,
                      })
                    }
                  />
                  <Text style={styles.instructions}>
                    Comp: {item.matchType} Time: {item.matchTime}
                  </Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested Shows</Text>
          <ScrollView horizontal={true} style={styles.suggestedShows}>
            {
              /* Render the live streams here using a map function */
              data.map((item) => (
                <View key={item.id} style={{ marginBottom: 14 }}>
                  <Video
                    source={{ uri: item.link }}
                    ref={video}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                  />
                  <Button
                    title={item.homeTeam + " vs " + item.awayTeam}
                    onPress={() =>
                      navigation.navigate("Match", {
                        id: item.id,
                        match: item,
                      })
                    }
                  />
                  <Text style={styles.instructions}>
                    Comp: {item.matchType} Time: {item.matchTime}
                  </Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
