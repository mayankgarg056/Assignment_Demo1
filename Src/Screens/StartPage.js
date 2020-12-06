
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from "react-native";

// constant declare
const window = Dimensions.get("screen");

class StartPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
         
        }

    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableOpacity style={[Styles.button,{marginTop:20}]} onPress={this.onPressNextAssignMent1}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Assignment 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.button,{marginTop:20}]} onPress={this.onPressNextAssignMent2}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Assignment 2</Text>
                </TouchableOpacity>
            </View>
        )
    }

  
    // on press next assignment
    onPressNextAssignMent1=()=>{
        this.props.navigation.navigate("AssignMent_1")
    }

    // on press next assignment
    onPressNextAssignMent2=()=>{
        this.props.navigation.navigate("AssignMent_2")
    }


}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400'
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
    },
    hoursContainer: {
        marginLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: 90
    },
    button: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1
    }


})

export default StartPage;

