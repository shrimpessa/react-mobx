import { makeAutoObservable } from "mobx";

class Store {
    circleBackgroundColor: string = '#F2E4EB';
    logoColors: {
        first: string,
        second: string,
        third: string,
        fourth: string,
        fifth: string,
        sixth: string
    } = {
        first: '#D5A6BD',
        second: '#A6D5BE',
        third: '#D5A6BD',
        fourth: '#A6D5BE',
        fifth: '#D5A6BD',
        sixth: '#A6D5BE'
    }

    constructor() {
        makeAutoObservable(this);
    }

}

export const rootStore = new Store();