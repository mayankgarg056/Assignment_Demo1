import React, { } from "react";
import { View, Dimensions, LogBox, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// class declared
import StartPage from './StartPage';
import AssignMent_1 from './AssignMent_1';
import AssignMent_2 from './AssignMent_2';
// local class variable
const Stack = createStackNavigator();


const Index = props => {
    React.useEffect(() => {
        LogBox.ignoreAllLogs(true)
    }, []);


    return (
            <View style={{ flex: 1, }}>
                <NavigationContainer >
                    <NavigationStack />
                </NavigationContainer>
            </View>
    );
}


const NavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen name="StartPage" component={StartPage}  />
            <Stack.Screen name="AssignMent_1" component={AssignMent_1}  />
            <Stack.Screen name="AssignMent_2" component={AssignMent_2}  />

            
        </Stack.Navigator>
    );

}

export default Index;