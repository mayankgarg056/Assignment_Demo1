
import React, { Component } from 'react';
import { View, Keyboard, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, TouchableOpacity, Image } from "react-native";
import { connect } from 'react-redux';
import Checkbox from 'react-native-checkbox';

/// custom classes declares
import  CustomZoomViewer  from "../Application/CustomComponents/CustomZoomViewer";

// action define 
import { GetAllMusicData, RemoveAllMusicData } from "../Application/Redux/Assignment.action";


// constant declare
const window = Dimensions.get("screen");

class AssignMent_1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isListViewShown: true,
            imageUrlForShow: [],
            isZoomImageViewerShown: false,
        }

    }
    componentDidMount() {
        this.getAllMusicData()
    }

    componentWillUnmount() {
        this.props.dispatch(RemoveAllMusicData([]))
    }

    render() {
        console.log("getAllMusicResponse " + JSON.stringify(this.props.getAllMusicResponse))
        return (
            <View style={Styles.container}>

                {
                    (this.props.getAllMusicResponse.length > 0) ?
                        <FlatList
                            data={this.props.getAllMusicResponse}
                            renderItem={(this.state.isListViewShown) ? this.renderItemListView : this.renderItemCollectionViewRow}
                            ListHeaderComponent={this.renderListHeader}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            key={(this.state.isListViewShown) ? 1 : 0}
                            numColumns={this.state.isListViewShown ? 1 : 3}
                        />
                        :
                        <View style={{ flex: 1 }}>
                            {this.renderListHeader()}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>No Record Found</Text>
                            </View>
                        </View>

                }
                {
                    this.state.isZoomImageViewerShown && 
                    <CustomZoomViewer
                    images={this.state.imageUrlForShow}
                    isShowImage={this.state.isZoomImageViewerShown}
                    loadingRender={() => <ActivityIndicator color={'green'} size={"large"} />}
                    closeModel={() => this.setState({ isZoomImageViewerShown: false })} />
                }
              

            </View>
        )
    }

    // render item list view row
    renderItemListView = ({ item, index }) => {
        return (
            <View style={{ height: 100, width: window.width - 50, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, flexDirection: 'row', padding: 5 }}>
                <TouchableOpacity onPress={() => this.onPressZoomImageView(item)} activeOpacity={0.65} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                    <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.thumbnailUrl }} />
                </TouchableOpacity>
                <View style={{ marginLeft: 10, flex: 0.9 }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5, }} numberOfLines={1}>{item.title}</Text>
                </View>
            </View>
        );
    }

    // render item row
    renderItemCollectionViewRow = ({ item, index }) => {
        return (
            <View style={{ height: window.width / 3 - 20, width: window.width / 3 - 20, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, padding: 5 }}>
                <TouchableOpacity onPress={() => this.onPressZoomImageView(item)} activeOpacity={0.65} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                    <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.thumbnailUrl }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', textAlign: 'center', paddingTop: 5, paddingLeft: 5, paddingRight: 5 }} numberOfLines={1}>{item.title}</Text>
            </View>
        );
    }

    // render list row
    renderListHeader = () => {
        return (
            <View>
                <View style={{ alignSelf: 'flex-end', marginTop: 5 }}>
                    <Checkbox
                        value={this.state.isListViewShown}
                        onChange={() => { this.setState({ isListViewShown: !this.state.isListViewShown }) }}
                        label={(this.state.isListViewShown) ? "ListView" : "Collection View"}
                    />
                </View>
            </View>

        );
    }

    // get all music data
    getAllMusicData = () => {
        this.props.dispatch(RemoveAllMusicData([]))
        this.props.dispatch(GetAllMusicData())
    }


    // on image zoom action
    onPressZoomImageView = (item) => {
        let imageArray = [];
        imageArray.push({url:item.url})
        this.setState({ isZoomImageViewerShown: true, imageUrlForShow: imageArray })
    }

}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
    },
    button: {
        marginLeft: 10,
        backgroundColor: 'green',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1
    }

})

function mapStateToProps(state) {
    return {
        getAllMusicResponse: (state.AssignMentReducer.getAllMusicResponse) ? state.AssignMentReducer.getAllMusicResponse : []
    }
}
export default connect(mapStateToProps)(AssignMent_1)


