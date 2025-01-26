
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

    const handleChange = useCallback((checked: boolean) => {
        // handle the check/uncheck logic
    }, []);

    return (
        <Wrapper>
            <Header>Todo List</Header>
            <AddInput onAdd={addTodo} />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem {...todo} onChange={handleChange} />
                ))}
            </TodoList>
        </Wrapper>
    );
}

export default AppTODOTest
