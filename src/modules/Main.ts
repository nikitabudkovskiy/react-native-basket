import {Dispatch} from "redux";
import {currencyType, currentInfoType} from "../constants/types";
import {currencyApi} from "../services/api/api";
import {requiredCurrencies} from "../constants";

const GET_CURRENCY_START = "Main/GET_CURRENCY_START";
const GET_CURRENCY_SUCCESS = "Main/GET_CURRENCY_SUCCESS";
const GET_CURRENCY_ERROR = "Main/GET_CURRENCY_ERROR";
const FILTRATION_CURRENCY = "Main/FILTRATION_CURRENCY";

const getCurrencyStart = () => ({
    type: GET_CURRENCY_START
});

const getCurrencySuccess = (res: currencyType) => ({
    type: GET_CURRENCY_SUCCESS,
    payload: res
});

const filtrationCurrency = () => ({
    type: FILTRATION_CURRENCY
});

interface IMainState {
    isLoading: boolean,
    currency: any
}

interface IMainAction {
    type: string,
    payload: currencyType
}

const initialState: IMainState = {
    isLoading: false,
    currency: null
};

export const getCurrency = () => async (dispatch: Dispatch) => {
    dispatch(getCurrencyStart());
    currencyApi.getCurrency()
        .then(res => dispatch(getCurrencySuccess(res)))
        .then(() => dispatch(filtrationCurrency()))
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

        default:
            return state;
    }
};

export default MainReducer;
