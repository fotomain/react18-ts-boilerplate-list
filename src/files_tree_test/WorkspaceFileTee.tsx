
import React, {useEffect} from 'react'
import { Box, Typography } from '@mui/material'

import { WorkspaceProvider } from './WorkspaceContext'
import defaultFiles from './defaultFiles'
import {Editor} from "./Editor";
import {FilePane} from "./file/FilePane";
import show_arrays from "../show_arrays";

export const WorkspaceFileTee = () => {

     return (
        <WorkspaceProvider files={defaultFiles}>
            <Box display='flex' height='100%'>
                <FilePane />
                <Editor />
            </Box>
        </WorkspaceProvider>
    )
}

