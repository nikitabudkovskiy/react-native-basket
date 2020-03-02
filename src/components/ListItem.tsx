import {Image, StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
    itemWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderTopColor: "hsla(0 ,0% ,100% ,0.3)",
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    imageContainer: {
        marginRight: 15
    },
    nameGood: {
        fontSize: 18,
    },
    priceGood: {},
    quantityGoodWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    quantityButton: {
        marginHorizontal: 15
    },
    quantityGood: {
        paddingHorizontal: 10
    },
});

const ListItem = ({img, id, name, quantity, currency, price, setValues, values}) => {

    const pressHandler = (id: number, isIncrement: boolean) => {
        console.log(id, isIncrement);
        console.log(quantity);
        if (isIncrement) {

        }
    };

    return (
        <View style={styles.itemWrapper}>
            <View style={styles.imageContainer}>
                <Image source={img}/>
            </View>
            <View>
                <Text style={styles.nameGood}>
                    {name}
                </Text>
                <Text style={styles.priceGood}>
                    {price}
                </Text>
                <View style={styles.quantityGoodWrapper}>
                    <Button
                        style={styles.quantityButton}
                        title="&#8722;"
                        onPress={() => pressHandler(id, false)}
                    />
                    <Text
                        style={styles.quantityGood}>
                        {quantity}
                    </Text>
                    <Button
                        style={styles.quantityButton}
                        title="+"
                        onPress={() => pressHandler(id, true)}
                    />
                </View>
            </View>
        </View>
    );
};

export default ListItem;
