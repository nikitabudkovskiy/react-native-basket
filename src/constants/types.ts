export type currencyType = {
    Date: string,
    PreviousDate: string,
    PreviousURL: string,
    Timestamp: string,
    Valute: currentInfoType
}

export type currentInfoType = {
    ID: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
    Value: number,
    Previous: number
}

export type goodsType = {
    id: number,
    img: string,
    name: string,
    quantity: number,
    currency: string,
    price: number
}

export type DropdownItemsType = {
    label: string,
    value: string
}
