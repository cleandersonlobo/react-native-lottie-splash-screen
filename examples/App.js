/**
 * SplashScreen
 * from：https:/qgx.digital
 * Author:qgxpagamentos
 * GitHub:https://github.com/qgxpagamentos
 * Email:admin@qgxpagamentos.com.br
 */
'use strict';


import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class example extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }


    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={(e)=> {
                    Linking.openURL('https://coding.imooc.com/class/304.html');
                }}
            >
                <View >
                    <Text style={styles.item}>
                        SplashScreen
                    </Text>
                    <Text style={styles.item}>
                        @：http://www.devio.org/
                    </Text>
                    <Text style={styles.item}>
                        GitHub:https://github.com/qgxpagamentos
                    </Text>
                    <Text style={styles.item}>
                        Email:admin@qgxpagamentos.com.br
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2',
        marginTop: 30
    },
    item: {
        fontSize: 20,
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})
