import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Fridges'},
            {id: 2, name: 'Phones'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'TV'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'LG'},
            {id: 5, name: 'Phillips'},
            {id: 6, name: 'ASUS'}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0' },
            {id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0' },
            {id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0' },
            {id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0' },
            {id: 5, name: "Iphone 12 pro", price: 25000, rating: 5, img: 'https://www.tehnomedia.rs/image/71348.jpg?tip=webp&tip_slike=0' }
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedType = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
