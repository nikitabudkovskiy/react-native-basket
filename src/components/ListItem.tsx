import {Image, StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import {Button} from 'react-native-elements';
import {requiredCurrencies} from "../constants";
import Dropdown from "./Dropdown";

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

type ListItemProps = {
    img: any,
    id: number,
    name: string,
    quantity: number,
    currency: string,
    price: number,
    changeQuantity: any,
    changeCurrency: any
}

const ListItem: FC<ListItemProps> = ({
                                         img,
                                         id,
                                         name,
                                         quantity,
                                         currency,
                                         price,
                                         changeQuantity,
                                         changeCurrency
                                     }) => {

    const dropdownItems = requiredCurrencies.map((item) => {
        return {
            label: item,
            value: item,
        }
    });

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
                    {price} RUB
                </Text>
                <View style={styles.quantityGoodWrapper}>
                    <Button
                        style={styles.quantityButton}
                        title="&#8722;"
                        onPress={() => changeQuantity(false, id)}
                    />
                    <Text style={styles.quantityGood}>
                        {quantity}
                    </Text>
                    <Button
                        style={styles.quantityButton}
                        title="+"
                        onPress={() => changeQuantity(true, id)}
                    />
                </View>
                <Dropdown
                    items={dropdownItems}
                    id={id}
                    onChange={changeCurrency}
                    value={currency}
                />
            </View>
        </View>
    );
};

export default ListItem;
