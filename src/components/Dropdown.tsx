import React, {FC} from 'react';
import {StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {DropdownItemsType} from "../constants/types";

const pickerStyle = StyleSheet.create({
    inputIOS: {
        color: 'black',
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
    },
    inputAndroid: {
        color: 'black',
    },
    underline: {
        borderTopWidth: 0
    },
});

type DropdownProps = {
    items: Array<DropdownItemsType>,
    id: number,
    value: string,
    onChange: (value, id) => void
}

const Dropdown: FC<DropdownProps> = ({
                                         items,
                                         onChange,
                                         id,
                                         value
                                     }) => (
    <RNPickerSelect
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => onChange(value, id)}
        items={items}
        value={value}
    />
);

export default Dropdown;
