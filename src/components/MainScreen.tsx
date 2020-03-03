import React, {FC} from 'react';
import {FlatList, StyleSheet, View, Button} from "react-native";
import ListItem from "./ListItem";
import {goodsType} from "../constants/types";
import withPreloader from "../HOC/withPreloader";
import OrderSummary from "./OrderSummary";

type MainScreenProps = {
    isLoading: boolean,
    getCurrency: any,
    goods: Array<goodsType>,
    changeQuantity: any,
    changeCurrency: any
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonWrapper: {
        paddingHorizontal: 10,
        marginTop: 15
    },
    summaryContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
    }
});

const MainScreen: FC<MainScreenProps> = ({
                                             getCurrency,
                                             goods,
                                             changeQuantity,
                                             changeCurrency
                                         }) => (

    <View>
        <FlatList
            data={goods}
            keyExtractor={(item: goodsType) => item.id.toString()}
            renderItem={({item}) => (
                <ListItem
                    id={item.id}
                    key={item.price}
                    img={item.img}
                    name={item.name}
                    quantity={item.quantity}
                    currency={item.currency}
                    price={item.price}
                    changeQuantity={changeQuantity}
                    changeCurrency={changeCurrency}
                />
            )}
        />
        <View style={styles.summaryContainer}>
            <OrderSummary
                goods={goods}
            />
        </View>
        <View style={styles.buttonWrapper}>
            <Button
                onPress={() => getCurrency()}
                title="Подсчитать в валюте"
            />
        </View>
    </View>
);

export default withPreloader(MainScreen);
