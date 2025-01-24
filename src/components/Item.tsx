
import styled from '@emotion/styled'
import React, {FC, useMemo} from 'react'
import {ITEM_HEIGHT} from "./List";

const Wrapper = styled.li`
  width: 100%;  
  height: 30px;
  border-bottom: 1px solid black;
  padding-left: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export interface ItemProps {
    children: React.ReactNode;
}

export const Item: FC<ItemProps> = ({ children }) => {

    // const retItem = useMemo(
    //     ()=><Wrapper>{children}</Wrapper>,
    //     [children]
    // )

    // return retItem
    return <Wrapper
                style={{height:ITEM_HEIGHT+'px'}}
            >
                {children}
            </Wrapper>
}
