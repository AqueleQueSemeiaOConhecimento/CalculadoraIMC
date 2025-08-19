import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#FF0000',
            headerStyle: {
                backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: '#25292e',
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                textTransform: 'uppercase',
                fontSize: 30,
                letterSpacing: 15,
                borderBottomColor: '#FF0000',
                borderBottomWidth: 2,
                width: 320,
                textAlign: 'center',
            },
        }}
    >
        <Tabs.Screen
            name="index" 
            options={{ 
                title: 'Início',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                ),
            }} 
        />

       <Tabs.Screen
            name="about" 
            options={{ 
                title: 'Sobre',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                ),
            }} 
        />
    </Tabs>
  );
}
