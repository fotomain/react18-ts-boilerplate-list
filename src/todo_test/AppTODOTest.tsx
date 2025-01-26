
import React, { useCallback, useState } from "react";
// npm install @types/uuid
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import {Header} from "./Header";
import {AddInput} from "./AddInput";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";


const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
});

/**
 * This is the initial todo state.
 * Instead of loading this data on every reload,
 * we should save the todo state to local storage,
 * and restore on page load. This will give us
 * persistent storage.
 */


interface Todo {
    id: string;
    label: string;
    checked: boolean;
}

const initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
    },
    {
        id: uuid(),
        label: "Ace CoderPad interview",
        checked: true,
    },
];

function AppTODOTest() {
    const [todos, setTodos] = useState<Todo[]>(initialData);

    const addTodo = useCallback((label: string) => {
        setTodos((prev) => [
            {
                id: uuid(),
                label,
                checked: false,
            },
            ...prev,
        ]);
    }, []);

    // const handleChange = useCallback((checked: boolean) => {
    //     // handle the check/uncheck logic
    // }, []);

    // @@@@@@@@@@@@@@@@@@@@@@@@@
    const handleChange = (id:string, checked: boolean) => {
        // handle the check/uncheck logic
        const elementById = todos.find(el=>el.id === id);
        const indexChange = todos.indexOf(elementById as Todo)
        console.log('=== indexChange',indexChange)
        setTodos((prev:Todo[]) => {
              var newData
              if(checked) {
                  newData = [
                      ...prev.slice(0, indexChange),
                      ...prev.slice(indexChange + 1),
                      {...elementById, checked: checked},
                  ]
              } else
              {
                  newData = [
                      {...elementById, checked: checked},
                      ...prev.slice(0, indexChange),
                      ...prev.slice(indexChange + 1),
                  ]
              }
            console.log("=== newData",newData)
             return newData as Todo[]
            }
        );

    }

    return (
        <Wrapper>
            <Header>Todo List</Header>
            <AddInput onAdd={addTodo} />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem {...todo}
                        onChange={(checked:any)=>{
                            // @@@@@@@@@@@@@@@@@@@@@@@@@
                            console.log("=== checked ",checked)
                            handleChange(todo.id,!todo.checked)
                        }}
                    />
                ))}
            </TodoList>
        </Wrapper>
    );
}

export default AppTODOTest
