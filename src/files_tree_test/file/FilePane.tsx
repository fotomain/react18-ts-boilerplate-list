
import React from 'react'
import { Box, Typography } from '@mui/material'

import {FileRow} from "./FileRow";
import {useWorkspaceContext} from "../WorkspaceContext";

export const FilePane = () => {

    const show_root=true

    const { files } = useWorkspaceContext()

    const dataTree:any[] = []
    var idGlobal=0
    const rootName='root/'
    dataTree[0]={id:0, nodeName:rootName, nodeId:rootName}
    for (let i = 0; i < files.length; i++) {
        const vertexArray = files[i]?.path?.split('/')

        console.log("=== vertexArray ",vertexArray.length)
        if(1===vertexArray.length){
            //catalog
            //OR
            //file
        }
        else{

            for (let j = 0; j < vertexArray.length ; j++) {

                const nodeName=vertexArray[j]
                const itIs=(j!==vertexArray?.length-1)?'catalog':'file'
                var pathToIt:string=rootName
                    for (let k = 0; k < j; k++) {
                        pathToIt=pathToIt+vertexArray[k]+'/'
                    }
                    var nodeId = pathToIt+nodeName+'/'
                    var parentId=0

                        if(dataTree.length>0) {
                            const existNode: any = dataTree.find((el: any) => {
                                    console.log("============= el ",el)
                                    if(el)
                                        return el.nodeId === nodeId
                                }
                            )
                            if (existNode) {
                                if('file'===itIs)
                                {
                                    console.log('███████ file already exists',pathToIt+nodeName)
                                }
                                continue
                            }
                        }

                        const existParent: any = dataTree.find((el:any) => {
                            if (el)
                                return el.nodeId === pathToIt
                        }                        )

                    if(existParent) {
                        console.log("=== existParent",existParent)
                        parentId = dataTree.indexOf(existParent)
                    }

                const itemData = {
                    itIs, nodeName, pathToIt, nodeId, parentId
                }

                idGlobal++
                var fileInfo={}
                if('file'===itIs) fileInfo={...files[i]}
                dataTree[idGlobal] = {...itemData,id:idGlobal,fileInfo:fileInfo}

            }
        }

    }

    console.log("=== dataTree",dataTree)

    const VertexView = (props:any) => {


        const childrens = props.dataTree.filter((el:any)=>el.parentId===props.startItem.id)

            // if(0===childrens.length) {
            //     console.log("=== no childrens",)
            //     // return null
            // }

        // if(props.empty) {
        //     console.log("=== props.empty",)
        //     console.log("=== props.level1 props.startItem",props.startItem.id)
        //     console.log("=== props.level1 childrens",childrens)
        //     console.log("=== childrens.length",childrens.length)
        //     console.log("=== props.level",props.level)
        //     // if(props.level>8)
        //     //     return null
        // }
        // console.log('=== childrens',childrens.length)

        return <div style={{width: '350px'}}>

            {(0===props.level && (!show_root))?null:
            <div style={{paddingLeft: props.level * 10 + 'px'}}>
                {(props.startItem.itIs==='file')
                    ?<FileRow key={props.startItem.id} file={props.startItem.fileInfo} />
                    :<div>{props.level}: {props.startItem.id}: {props.startItem.nodeName} ({childrens.length})</div>
                }
            </div>
            }

            {(childrens.length > 0) &&
                childrens.map((el: any) => {
                    return <div key={el.id}>
                        <VertexView empty={true}
                                    startItem={el}
                                    dataTree={props.dataTree}
                                    level={props.level + 1}
                        />
                    </div>

                })
            }

        </div>
    }


    return (
        <Box>
            <Box p={1}>
                <Typography variant="h6">Files</Typography>
            </Box>
            <Box>
            {
                    // files.map((file:any,ii) => <FileRow key={ii} file={file} />)
                    <VertexView dataTree={dataTree} startItem={dataTree[0]} level={0} />
                }
            </Box>
        </Box>
    )
}
