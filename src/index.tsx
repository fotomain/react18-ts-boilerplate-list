
import { createRoot } from 'react-dom/client';

import React from "react";
import AppListVirtualised from "./AppListVirtualised";
import ListMedium from "./list_medium/ListMedium";
import {WorkspaceFileTee} from "./files_tree_test/WorkspaceFileTee";
const container = document.getElementById('root');

if(container) {
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(

        // <WorkspaceFileTee/>

        <AppListVirtualised />

        // <ListMedium/>
    );
}


