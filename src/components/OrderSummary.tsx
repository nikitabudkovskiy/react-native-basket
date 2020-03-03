import React, {FC} from 'react';
import {StyleSheet, View, Text} from "react-native";
import {goodsType} from "../constants/types";

const styles = StyleSheet.create({
    container: {},
    fieldContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

type OrderSummaryProps = {
    goods: Array<goodsType>,
}

const OrderSummary: FC<OrderSummaryProps> = ({ goods}) => {
    const sumTotal = goods.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    return (
        <View style={styles.container}>
            <Text>
                Ваш заказ
            </Text>
            <View>
                <View style={styles.fieldContainer}>
                    <Text>
                        {goods.length} товар на сумму
                    </Text>
                    <Text>
                        {sumTotal} RUB
                    </Text>
                </View>
                {
                    goods.map((item) => (
                        <View style={styles.fieldContainer} key={item.id.toString()}>
                            <Text>
                                {item.name}
                            </Text>
                            <Text>
                                {item.quantity * item.price} RUB
                            </Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
};

export default OrderSummary;
