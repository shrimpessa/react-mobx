import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { rootStore } from "./root-store";
import { Circle } from "./circle";
import { Logo } from "./logo";
import './App.css';

export const Main = inject('rootStore')(observer(({ rootStore } : any ) => {

    const colors = ['#a0cddb', '#c4accf', '#A6D5BE', '#ddadaf', '#f8a283'];

    // С интервалом в секунду присваивает Лого случайные цвета из имеющихся
    function useRandomColor() {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }
        setInterval(() => {
            rootStore.logoColors = {
                first: colors[getRandomInt(5)],
                second: colors[getRandomInt(5)],
                third: colors[getRandomInt(5)],
                fourth: colors[getRandomInt(5)],
                fifth: colors[getRandomInt(5)],
                sixth: colors[getRandomInt(5)]
            }
        }, 1000);
        return
    }

    useEffect(() => useRandomColor(), []);

    return(
        <div className="App">
            <header className="App-header">
                <Circle width={400} height={400} color={rootStore.circleBackgroundColor}>
                    <div className="App-logo">
                        <Logo color={rootStore.logoColors.first} />
                        <Logo color={rootStore.logoColors.second} />
                        <Logo color={rootStore.logoColors.third} />
                    </div>
                    <div className="App-logo-2">
                        <Logo color={rootStore.logoColors.fourth} />
                        <Logo color={rootStore.logoColors.fifth} />
                        <Logo color={rootStore.logoColors.sixth} />
                    </div>
                </Circle>
            </header>
        </div>
    )
}));