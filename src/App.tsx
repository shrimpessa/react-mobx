import React from 'react';
import { Provider } from 'mobx-react';
import { rootStore } from "./root-store";
import { Main } from "./Main";

function App() {
    const stores = { rootStore };
    return (
        <Provider { ...stores } >
            <Main />
        </Provider>
    );
}

export default App;
