import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { getUsers } from "../api/users";
import { User as UserType } from "../types";

const ThemeContext = createContext<string>('default')

export function Oppgave4() {
	const [selectedTheme, setSelectedTheme] = useState<string>('default')

	return (
		<ThemeContext.Provider value={selectedTheme}>
			<button onClick={() => setSelectedTheme('default')}>Vanlig</button>
			<button onClick={() => setSelectedTheme('hotpink')}>Hotpink</button>
			<MyComponent />
		</ThemeContext.Provider>
	);	
}

function MyComponent() {
	const { data: users = [] } = useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	})

	return (
		<ul>
			{users.map((user) => (
				<User key={user.id} user={user} />
			))}
		</ul>
	)
}

interface UserProps {
	user: UserType
}

/**
 * Vi trenger bare theme-verdien dersom user.id er 1337. Flytt henting av contexten inn i if'en.
 * Du vil (forhåpentligvis) få en typefeil her
 * Erstatt useContext med use
 * https://react.dev/reference/react/use
 */

function User({user}: UserProps) {
	const theme = useContext(ThemeContext)
	if (user.id === 1337) {
		return (
			<li className={`border-theme-${theme}`}>{user.id}. {user.name}</li>
		)
	}

	return (
		<li>
			{user.id}. {user.name}
		</li>
	)
}
  