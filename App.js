import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Custom Tab Bar Button
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customTabBarButton}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Custom Tab Bar Component
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Profile') {
          iconName = 'people';
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.tabItemFocused]}
          >
            <Icon name={iconName} size={25} color={isFocused ? '#FFADE0' : '#999'} />
            <Text style={{ color: isFocused ? '#FFADE0' : '#999' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <CustomTabBarButton
        onPress={() => {
          Linking.openURL('tel:28710407').catch((err) => console.error('Error opening dialer:', err));
        }}
      >
        <Text style={styles.phoneButton}>ALERT</Text>
      </CustomTabBarButton>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }} // Hide the header for all screens
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 70,
    elevation: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemFocused: {
    // Optional: Add specific styles for focused tab items if needed
  },
  customTabBarButton: {
    position: 'absolute',
    bottom: 0,
    left: '38%',
    backgroundColor: '#FF9D00',
    width: 100,
    height: 100,
    borderRadius: 100, // Correctly making it a circle
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 10,
    borderColor: '#fff',
  },
  phoneButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
