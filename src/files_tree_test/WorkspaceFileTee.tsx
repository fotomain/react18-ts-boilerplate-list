
import React, {useEffect} from 'react'
import { Box, Typography } from '@mui/material'

import { WorkspaceProvider } from './WorkspaceContext'
import defaultFiles from './defaultFiles'
import {Editor} from "./Editor";
import {FilePane} from "./file/FilePane";

export const WorkspaceFileTee = () => {

    useEffect(() => {
        var dataTree = defaultFiles.map(el=>{
            return el
            // return {path:el.path}
        })

        const prepareTree = (inputData:any) =>{
            var retData:any[]=[]
            for (let i = 0; i < inputData.length ; i++) {
                if(-1!==inputData[i].path.indexOf('/')){
                    prepareTree(inputData[i])
                }
            }

            return retData
        }

        prepareTree(dataTree)

        console.log("=== dataTree",dataTree)

    }, []);

     return (
        <WorkspaceProvider files={defaultFiles}>
            <Box display='flex' height='100%'>
                <FilePane />
                <Editor />
            </Box>
        </WorkspaceProvider>
    )
}
