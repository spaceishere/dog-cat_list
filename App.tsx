import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CatIcon } from "./Icons/CatIcon";
import { DogIcon } from "./Icons/DogIcon";
import { Cat } from "./screens/Cat";
import { Dog } from "./screens/Dog";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CatDetail } from "./screens/CatDetail";
import { DogDetail } from "./screens/DogDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cat" component={Cat} />
      <Stack.Screen name="CatDetail" component={CatDetail} />
    </Stack.Navigator>
  );
};
const DogStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dog" component={Dog} />
      <Stack.Screen name="DogDetail" component={DogDetail} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Cats"
          component={CatStackNavigator}
          options={{ tabBarIcon: ({ color }) => <CatIcon color={color} />, tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Dogs"
          component={DogStackNavigator}
          options={{ tabBarIcon: ({ color }) => <DogIcon color={color} />, tabBarShowLabel: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
