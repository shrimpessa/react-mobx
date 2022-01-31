import { makeAutoObservable } from "mobx";

class Store {
    circleBackgroundColor: string = '#F2E4EB';
    log1Color: string = '#D5A6BD';
    log2Color: string = '#A6D5BE';
    log3Color: string = '#D5A6BD';
    log4Color: string = '#A6D5BE';
    log5Color: string = '#D5A6BD';
    log6Color: string = '#A6D5BE';

    colors = ['#D5A6BD', '#F2E4EB', '#A6D5BE'];

    constructor() {
        makeAutoObservable(this);
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    mixColors() {
        this.log1Color = this.colors[this.getRandomInt(3)];
        this.log2Color = this.colors[this.getRandomInt(3)];
        this.log3Color = this.colors[this.getRandomInt(3)];
        this.log4Color = this.colors[this.getRandomInt(3)];
        this.log5Color = this.colors[this.getRandomInt(3)];
        this.log6Color = this.colors[this.getRandomInt(3)];
        this.circleBackgroundColor = this.colors[this.getRandomInt(3)];
    }

}

export const rootStore = new Store();