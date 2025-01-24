
import styled from "@emotion/styled";
import React, {FC, LegacyRef, RefObject, useMemo, useRef} from "react";
import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";
import {Dictionary} from "../hooks/useDirectory";
import useScrollPosition from "../hooks/useScrollPosition";


export const SCROLL_HEIGHT = 500
export const ITEM_HEIGHT = 50
export const ITEMS_ON_1_PAGE = SCROLL_HEIGHT / ITEM_HEIGHT

console.log("=== ITEMS_ON_1_PAGE ",ITEMS_ON_1_PAGE)

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  width: 100%;
  height:500px;
  overflow: auto;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export interface ListProps {
    items: Dictionary;
}

export const List: FC<ListProps> = ({ items }) => {

    const refList:RefObject<HTMLElement>=useRef<HTMLElement>(null)

    const position:any = useScrollPosition(
        refList
    )

    // https://stackoverflow.com/questions/62366759/virtualized-list-with-reactjs

    const itemsFrom = Math.ceil( position / ITEMS_ON_1_PAGE )
    const itemsTo = itemsFrom + ITEMS_ON_1_PAGE

    console.log("=== items N",itemsFrom, itemsTo)

    // TODO items -> itemsVisible
    // itemsFrom = Math.ceil( position / ITEMS_ON_1_PAGE ) + ITEMS_ON_1_PAGE
    // itemsVisible = F( itemsFrom , itemsTo )

    return (
        <ScrollWrapper
            style={{height: SCROLL_HEIGHT+'px'}}
            ref={refList as LegacyRef<HTMLDivElement> }
            onScroll={(e)=>{
                console.log("=== onScroll position",position)
            }}
        >
            <ListWrapper>
                {/**
                 * Note: `SafelyRenderChildren` should NOT be removed while solving
                 * this interview. This prevents rendering too many list items and
                 * potentially crashing the web page. This also enforces an artificial
                 * limit (5,000) to the amount of children that can be rendered at one
                 * time during virtualization.
                 *
                 * {items.slice(itemsFrom, itemsTo).map((word) => {
                 *
                 */}
                <SafelyRenderChildren>

                    {items.slice(0, 5000).map((word) => {
                            return <Item key={word}>{word}</Item>
                    })}

                </SafelyRenderChildren>
            </ListWrapper>
        </ScrollWrapper>
    );
};
