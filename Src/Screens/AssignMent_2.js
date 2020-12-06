
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Image } from "react-native";
import Checkbox from 'react-native-checkbox';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

// action file declare
import { AddANewPhotoFile } from "../Application/Redux/Assignment.action";

// constant declare
const window = Dimensions.get("screen");

class AssignMent_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListViewShown: true
        }
    }

    render() {
        console.log("getAllPhotoFileData " + JSON.stringify(this.props.getAllPhotoFileData))
        return (
            <View style={Styles.container}>
                {
                    (this.props.getAllPhotoFileData.length > 0) ?
                        <FlatList
                            data={this.props.getAllPhotoFileData}
                            renderItem={(this.state.isListViewShown) ? this.renderItemListView : this.renderItemCollectionViewRow}
                            ListHeaderComponent={this.renderListHeader}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            key={(this.state.isListViewShown) ? 1 : 0}
                            numColumns={this.state.isListViewShown ? 1 : 3}
                        />
                        :
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                            {
                                this.renderListHeader()
                            }

                        </View>

                }
            </View>
        )
    }

    // render item list view row
    renderItemListView = ({ item, index }) => {
        return (
            <View style={{ height: 100, width: window.width - 50, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, flexDirection: 'row', padding: 5 }}>
                <TouchableOpacity onPress={() => this.onPressZoomImageView(item)} activeOpacity={0.65} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                    <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.url }} />
                </TouchableOpacity>
                <View style={{ marginLeft: 10, flex: 0.9 }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5, }} numberOfLines={1}>{(item.title == "File Name") ? item.title + " " + index : item.title}</Text>
                </View>
            </View>
        );
    }

    // render item row
    renderItemCollectionViewRow = ({ item, index }) => {
        return (
            <View style={{ height: window.width / 3 - 20, width: window.width / 3 - 20, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, padding: 5 }}>
                <TouchableOpacity onPress={() => this.onPressZoomImageView(item)} activeOpacity={0.65} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                    <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.url }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', textAlign: 'center', paddingTop: 5, paddingLeft: 5, paddingRight: 5 }} numberOfLines={1}>{(item.title == "File Name") ? item.title + " " + index : item.title}</Text>
            </View>
        );
    }

    // render list row
    renderListHeader = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginTop: 10, marginRight: 10 }} onPress={this.onPressAddNewImage}>
                    <Text style={[Styles.seprator, { color: 'black', textDecorationLine: 'underline', }]}>Add New Image</Text>
                </TouchableOpacity>
                <Checkbox
                    value={this.state.isListViewShown}
                    onChange={() => { this.setState({ isListViewShown: !this.state.isListViewShown }) }}
                    label={(this.state.isListViewShown) ? "ListView" : "Collection View"}
                    style={{ marginTop: 10 }}
                />
            </View>

        );
    }

    // on press add a new Image
    onPressAddNewImage = () => {
        const options = {
            title: 'Select image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            let imageBundle = {
                "title": (response.fileName != null) ? response.fileName : "File Name",
                "url": response.uri
            };

            this.props.dispatch(AddANewPhotoFile(imageBundle))
        })

    }




}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
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
function mapStateToProps(state) {
    return {
        getAllPhotoFileData: (state.AssignMentReducer.getAllPhotoFileData) ? state.AssignMentReducer.getAllPhotoFileData : []
    }
}
export default connect(mapStateToProps)(AssignMent_2)

