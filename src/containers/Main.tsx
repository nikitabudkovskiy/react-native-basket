import React, {Dispatch, FC} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../services/rootReducer";
import MainScreen from "../components/MainScreen";
import {changeCurrency, changeQuantity, getCurrency} from "../modules/Main";
import {goodsType} from "../constants/types";

type mapStateToPropsType = {
    isLoading: boolean,
    goods: Array<goodsType>
}

type mapDispatchToPropsType = {
    getCurrency: any,
    changeQuantity: any,
    changeCurrency: any
}

type MainPropsType = mapStateToPropsType & mapDispatchToPropsType;

const Main: FC<MainPropsType> = ({
                                     isLoading,
                                     getCurrency,
                                     goods,
                                     changeQuantity,
                                     changeCurrency
                                 }) => {
    return (
        <MainScreen
            isLoading={isLoading}
            getCurrency={getCurrency}
            goods={goods}
            changeQuantity={changeQuantity}
            changeCurrency={changeCurrency}
        />
    )
};

const mapStateToProps = (state: AppStateType) => ({
    isLoading: state.main.isLoading,
    goods: state.main.goods
});


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getCurrency: () => dispatch(getCurrency()),
    changeQuantity: (isIncrement: boolean, id: number) => dispatch(changeQuantity(isIncrement, id)),
    changeCurrency: (currency: string, id: number) => dispatch(changeCurrency(currency, id))
});

export default connect<mapStateToPropsType, mapDispatchToPropsType, null, AppStateType>(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
