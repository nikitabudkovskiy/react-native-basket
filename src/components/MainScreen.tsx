import React, {FC, useState} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import withPreloader from '../HOC/withPreloader';
import {goods} from "../constants";
import ListItem from "./ListItem";
import {goodsType} from "../constants/types";

type MainScreenProps = {
    isLoading: boolean,
    currency: any,
    getCurrency: any
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const MainScreen: FC<MainScreenProps> = ({
                                             isLoading,
                                             currency,
                                             getCurrency
                                         }) => {

    const filteredArray: any = goods.map((item: any) => [item.currency, item.price, item.quantity]);
    const [values, setValues] = useState(filteredArray);
    return (
        <View>
            <FlatList
                data={goods}
                keyExtractor={(item: goodsType) => item.id.toString()}
                renderItem={({item, index}) => (
                    <ListItem
                        id={item.id}
                        key={item.price}
                        img={item.img}
                        name={item.name}
                        quantity={values[index][2]}
                        currency={values[index][0]}
                        price={values[index][1]}
                        setValues={setValues}
                        values={values}
                    />
                )}
            />
        </View>
    )
};

export default withPreloader(MainScreen);
