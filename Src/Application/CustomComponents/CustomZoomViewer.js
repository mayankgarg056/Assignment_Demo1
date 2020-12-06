import React from 'react';
import { View, StyleSheet, Modal, TextInput, Text, Dimensions, TouchableOpacity, Platform, Image } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

// local variable declare
const { width } = Dimensions.get("window")
const icon_cancel=require("../Assets/Images/icon_cancel.png")

const CustomZoomViewer = props => {
    const { images, isShowImage, enableSwipeDown, loadingRender, failImageSource, menus, renderHeader, onClick, onDoubleClick } = props;
    return (
        <View style={{ flex: 1, }}>
            <Modal visible={isShowImage} animationType={'slide'} transparent={false} style={{ flex: 1, margin: 100 }}>
                <ImageViewer
                    imageUrls={images}
                    enableSwipeDown={enableSwipeDown}
                    useNativeDriver={true}
                    loadingRender={loadingRender}
                    failImageSource={failImageSource}
                    menus={menus}
                    onDoubleClick={onDoubleClick}
                    onClick={onClick}
                    backgroundColor={'black'}
                />
                <TouchableOpacity onPress={() => props.closeModel()} style={{ height:40, width: 40, marginTop: 50, alignItems: 'center', justifyContent: 'center',right: 5, alignSelf: 'flex-end', position: 'absolute' }}>
                    <Image source={icon_cancel} style={{ resizeMode: 'contain', height: 20, width: 20, }} />
                </TouchableOpacity>
            </Modal>
        </View>
    )
}



export default CustomZoomViewer;