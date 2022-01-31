import React from "react";
import { inject, observer } from "mobx-react";
import { rootStore } from "./root-store";
import { Circle } from "./circle";
import { Logo } from "./logo";
import './App.css';

export const Main = inject('rootStore')(observer(({ rootStore } : any ) => {
    return(
        <div className="App">
            <header className="App-header">
                <Circle width={400} height={400} color={rootStore.circleBackgroundColor}>
                    <div className="App-logo">
                        <Logo color={rootStore.log1Color} />
                        <Logo color={rootStore.log2Color} />
                        <Logo color={rootStore.log3Color} />
                    </div>
                    <div className="App-logo-2">
                        <Logo color={rootStore.log4Color} />
                        <Logo color={rootStore.log5Color} />
                        <Logo color={rootStore.log6Color} />
                    </div>
                </Circle>
                <button onClick={() => rootStore.mixColors()}>Mix It!</button>
            </header>
        </div>
    )
}));