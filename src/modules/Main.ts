import {Dispatch} from "redux";
import {currencyType, currentInfoType, goodsType} from "../constants/types";
import {currencyApi} from "../services/api/api";
import {earphonesImage, laptopImage, requiredCurrencies, smartphoneImage} from "../constants";
import {AppStateType} from "../services/rootReducer";
import {Alert} from "react-native";

const GET_CURRENCY_START = "Main/GET_CURRENCY_START";
const GET_CURRENCY_SUCCESS = "Main/GET_CURRENCY_SUCCESS";
const FILTRATION_CURRENCY = "Main/FILTRATION_CURRENCY";
const INCREMENT_QUANTITY = "Main/INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "Main/DECREMENT_QUANTITY";
const CHANGE_CURRENCY = "Main/CHANGE_CURRENCY";
const SET_GOODS_IN_CURRENCY = "Main/SET_GOODS_IN_CURRENCY";

const getCurrencyStart = () => ({
    type: GET_CURRENCY_START
});

const getCurrencySuccess = (res: currencyType) => ({
    type: GET_CURRENCY_SUCCESS,
    payload: res
});

const filtrationCurrency = () => ({
    type: FILTRATION_CURRENCY,
});

const incrementQuantity = (id: number) => ({
    type: INCREMENT_QUANTITY,
    payload: id
});

const decrementQuantity = (id: number) => ({
    type: DECREMENT_QUANTITY,
    payload: id
});

const changeMoney = (currency: string, id: number) => ({
    type: CHANGE_CURRENCY,
    payload: [currency, id]
});

const setGoodsInCurrency = (goodsInCurrency: string) => ({
    type: SET_GOODS_IN_CURRENCY,
    payload: goodsInCurrency
});

interface IMainState {
    isLoading: boolean,
    currency: any,
    goods: Array<goodsType>,
    goodsInCurrency: string | null
}

interface IMainAction {
    type: string,
    payload: any
}

const initialState: IMainState = {
    isLoading: false,
    currency: null,
    goods: [
        {
            id: 0,
            img: laptopImage,
            name: "Ноутбук",
            quantity: 1,
            currency: requiredCurrencies[0],
            price: 60000
        },
        {
            id: 1,
            img: smartphoneImage,
            name: "Телефон",
            quantity: 1,
            currency: requiredCurrencies[0],
            price: 26000
        },
        {
            id: 2,
            img: earphonesImage,
            name: "Наушники",
            quantity: 1,
            currency: requiredCurrencies[0],
            price: 500
        },
    ],
    goodsInCurrency: null
};

export const changeQuantity = (isIncrement: boolean, id: number) =>
    async (dispatch: Dispatch, getState: () => AppStateType) => {
        const state = getState().main.goods;
        const findElement = state.findIndex(item => item.id === id);
        if (isIncrement) {
            dispatch(incrementQuantity(id))
        } else if (!isIncrement && state[findElement].quantity === 1) {
            Alert.alert("Количество не может быть меньше 1")
        } else {
            dispatch(decrementQuantity(id))
        }
    };

export const changeCurrency = (currency: string, id: number) =>
    async (dispatch: Dispatch, getState: () => AppStateType) => {
        const state = getState().main.goods;
        const findElement = state.findIndex(item => item.id === id);
        dispatch(changeMoney(currency, id));
    };

export const lineFormationForAlert = () =>
    async (dispatch: Dispatch, getState: () => AppStateType) => {
        const goods = getState().main.goods;
        const currencyValue = getState().main.currency;
        let goodsInCurrency = '';
        goods.map((item) => {
            if (item.currency === "RUB") {
                goodsInCurrency += `${item.name} - ${item.price * item.quantity} ${item.currency} \n`
            } else {
                const findValue = currencyValue.find((value) => value.CharCode === item.currency);
                goodsInCurrency += `${item.name} - ${((item.price * item.quantity) / findValue.Value).toFixed(2)} ${item.currency} \n`
            }
        });
        dispatch(setGoodsInCurrency(goodsInCurrency))
    };

export const getCurrency = () => async (dispatch: Dispatch, getState: () => AppStateType) => {
    dispatch(getCurrencyStart());
    // TODO Promise Hell
    currencyApi.getCurrency()
        .then(res => dispatch(getCurrencySuccess(res)))
        .then(() => dispatch(filtrationCurrency()))
        .then(() => dispatch<any>(lineFormationForAlert()))
        .then(() => Alert.alert("Цены в валюте", getState().main.goodsInCurrency))
        .catch(e => console.log(e))
};

const MainReducer = (state = initialState, action: IMainAction): IMainState => {

    switch (action.type) {

        case GET_CURRENCY_START:
            return {
                ...state,
                isLoading: true
            };

        case GET_CURRENCY_SUCCESS:
            return {
                ...state,
                currency: action.payload,
            };

        case FILTRATION_CURRENCY:
            const filteredCurrency = Object.values({...state.currency.Valute})
                .filter((item: currentInfoType) => requiredCurrencies.includes(item.CharCode));
            return {
                ...state,
                currency: filteredCurrency,
                isLoading: false
            };

        case INCREMENT_QUANTITY:
            let copyState: any = [...state.goods];
            copyState[action.payload].quantity = copyState[action.payload].quantity + 1;
            return {
                ...state,
                goods: copyState,
            };

        case DECREMENT_QUANTITY:
            let newState = [...state.goods];
            newState[action.payload].quantity = newState[action.payload].quantity - 1;
            return {
                ...state,
                goods: newState,
            };

        case CHANGE_CURRENCY:
            const [currentCurrency, id] = action.payload;
            let newStateChange = [...state.goods];
            newStateChange[id].currency = currentCurrency;
            return {
                ...state,
                goods: newStateChange
            };

        case SET_GOODS_IN_CURRENCY:
            return {
                ...state,
                goodsInCurrency: action.payload
            };

        default:
            return state;
    }
};

export default MainReducer;
