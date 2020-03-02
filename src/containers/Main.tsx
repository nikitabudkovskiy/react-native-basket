import React, {Dispatch, FC} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../services/rootReducer";
import MainScreen from "../components/MainScreen";
import {getCurrency} from "../modules/Main";
import {currentInfoType} from "../constants/types";

type mapStateToPropsType = {
    isLoading: boolean,
    currency: Array<currentInfoType>,
}

type mapDispatchToPropsType = {
    getCurrency: any
}

type MainPropsType = mapStateToPropsType & mapDispatchToPropsType;

const Main: FC<MainPropsType> = ({
                             isLoading,
                             currency,
                             getCurrency }) => {
    return (
        <MainScreen
            isLoading={isLoading}
            currency={currency}
            getCurrency={getCurrency}
        />
    )
};

const mapStateToProps = (state: AppStateType) => ({
    isLoading: state.main.isLoading,
    currency: state.main.currency,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getCurrency: () => dispatch(getCurrency()),
});

export default connect<mapStateToPropsType, mapDispatchToPropsType, null, AppStateType>(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
