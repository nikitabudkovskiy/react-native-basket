import {goodsType} from "./types";

export const requiredCurrencies: Array<string> = ["RUB", "USD", "EUR"];

const laptopImage = require('../assets/image/laptop.png');
const smartphoneImage = require('../assets/image/smartphone.png');
const earphonesImage = require('../assets/image/earphones.png');

export const goods: Array<goodsType> = [
    {
        id: 0,
        img: laptopImage,
        name: "Ноутбук",
        quantity: 1,
        currency: "RUB",
        price: 60000
    },
    {
        id: 1,
        img: smartphoneImage,
        name: "Телефон",
        quantity: 1,
        currency: "RUB",
        price: 260000
    },
    {
        id: 2,
        img: earphonesImage,
        name: "Наушники",
        quantity: 1,
        currency: "RUB",
        price: 500
    },
];
