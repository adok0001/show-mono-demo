/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/NotificationsModal";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeSceen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MatchDetails from "../screens/MatchDetails";
import TeamDetails from "../screens/TeamDetails";
import PlayerDetails from "../screens/PlayerDetails";
import BroadcastScreen from "../screens/BroadcastScreen";
import Settings from "../screens/SettingsScreen";
import CustomHeader from "../components/CustomHeader";
import { styles } from "../components/Styles";
import ScheduleScreen from "../screens/Schedule";
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} options={{headerShown: false}} />
      <Drawer.Screen name="MatchInfo" component={MatchDetails} />
      <Drawer.Screen name="TeamInfo" component={TeamDetails} />
      <Drawer.Screen name="PlayerInfo" component={PlayerDetails} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Notifications" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}        // options={({ navigation }: RootTabScreenProps<'Home'>) => ({
        //   //title: 'Match Day',
        //   //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        //   headerRight: () => (
        //     <>
        //     <Pressable
        //       onPress={() => navigation.navigate('Modal')}
        //       style={({ pressed }) => ({
        //         opacity: pressed ? 0.5 : 1,
        //       })}>
        //       <FontAwesome
        //         name="bell"
        //         size={25}
        //         color={Colors[colorScheme].text}
        //         style={{ marginRight: 15 }}
        //       />
        //     </Pressable>
        //       </>
        //   ),
        // })}
      />

      <BottomTab.Screen
        name="Broadcast"
        component={BroadcastScreen}
        options={{
          title: "Broadcast",
          tabBarIcon: ({ color }) => <TabBarIcon name="tv" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Menu"
        component={Settings}
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (<Image
            style={styles.profileImg}
            source={require("../assets/images/kabelo-leputu-9e-NcbXIuYI-unsplash.jpg")} />),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen}
        options={{
          header: ({ navigation }) => (
            <CustomHeader navigation={navigation}/>
          )
          
        }}
        />
      <HomeStack.Screen name="MatchInfo" component={MatchDetails} />
      <HomeStack.Screen name="TeamInfo" component={TeamDetails} />
      <HomeStack.Screen name="PlayerInfo" component={PlayerDetails} />
    </HomeStack.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
