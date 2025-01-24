
import { createRoot } from 'react-dom/client';

import React from "react";
import App from "./App";
import ListMedium from "./list_medium/ListMedium";
const container = document.getElementById('root');

if(container) {
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(
        <App />
        // <ListMedium/>
    );
}


