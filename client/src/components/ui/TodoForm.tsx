import { BASE_URL } from "@/App";
import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const queryClient = useQueryClient();

    const { mutate: createTodo, isPending: isCreating } = useMutation({
        mutationKey: ["createTodo"],
        mutationFn: async (e: React.FormEvent) => {
            console.log("createTodo")
            e.preventDefault();
            if (newTodo.trim() === "") return alert("Todo is empty")
            try {
                console.log("calling fetch")
                const res = await fetch(`${BASE_URL}/todos`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ body: newTodo })
                })

                const data = await res.json();
                console.log("fetched", data)
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong")
                }

                setNewTodo("");
                return data;
            } catch (error: any) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] })
        },
        onError: (error: any) => {
            alert(error.message)
        }
    })

    useEffect(() => { inputRef.current?.focus(); }, []);

    return (
        <form onSubmit={createTodo}>
            <Flex gap={2}>
                <Input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} ref={inputRef} />
                <Button mx={2} type="submit" _active={{ transform: "scale(0.97)" }}>{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}</Button>
            </Flex>
        </form>
    )
}

export default TodoForm
