import { useState, MouseEvent } from "react";
import { addTodo, getTodos } from "../api/todos";
import { Todo } from "../types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

/**
 * Importer useOptimistic og send inn todos som default verdi, og en funksjon som
 * optimistisk legger til den nye todoen i lista, hvor du også legger til "pending" i det nye todo-objektet.
 * Gjør endringer i submit-funksjonen slik at den tar i mot formData, henter verdien fra input-feltet, og bruker
 * den optimistiske funksjonen du får fra useOptimistic.
 * Vis de optimistiske todo'ene i UI'et i stedet for todoene som tanstack henter. 
 * Husk å gjør nødvendige endringer for form og input elementene for å trigge actionen og hente ut nødvendig data.
 * https://react.dev/reference/react/useOptimistic
 */
export function Oppgave3() {
  const [newTodo, setNewTodo] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { data: todos = [] } = useQuery({
      queryKey: ['todos'],
      queryFn: getTodos
  })
  const queryClient = useQueryClient()

  async function submit() {
    setLoading(true)
    await addTodo({title: newTodo});
    setLoading(false)
    queryClient.invalidateQueries({ queryKey: ['todos']})
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    submit()
  }

  return (
    <>
    <ul>
		{todos.map((todo: Todo, index: number) => (
			<li key={index}>
				{todo.title}
				{!!todo.pending && <small> (Adding todo very slow...)</small>}
			</li>
		))}
		</ul>
		{loading && <p>addTodo tok visst veeeeldig lang tid.... Vente litt....</p>}
		<form>
			<input type="text" placeholder="Write your todo here" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
			<button type="submit" onClick={handleClick}>Send</button>
		</form>
    </>
  );
}
  