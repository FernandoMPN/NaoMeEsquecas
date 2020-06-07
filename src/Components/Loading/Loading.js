import React from 'react'
import {View,
        ActivityIndicator,
        StyleSheet} from 'react-native'

import colors from '../../Utils/colors'

function Loading(){

    return(
        <View style={ Styles.Container }>
            <ActivityIndicator size="large" color={colors.actionBar}/>
        </View>
    )


}

export default Loading

const Styles = StyleSheet.create({

    Container:{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: "center",
        alignItems: "center"
    }

})