
import { createRoot } from 'react-dom/client';

import React from "react";
import AppListVirtualised from "./list_virtualized/AppListVirtualised";
import {WorkspaceFileTee} from "./files_tree_test/WorkspaceFileTee";
import AppTODOTest from "./todo_test/AppTODOTest";
const container = document.getElementById('root');

if(container) {
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(

        // <AppTODOTest />

        // <AppListVirtualised />

        <WorkspaceFileTee/>

    );
}


