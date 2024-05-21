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

/**
 * 🏆 I stedet for å hente users med Tanstack win useQuery, hent heller dataen ved 
 * å bruke det nye API'et "use" fra React. Erstatt bruken inni komponenten.
 * 💡 Hvis du ser i konsollen på nettsiden nå ser du at du får en warning siden
 * promises lagd på klient-siden ikke er støtta av React ennå, vi må egentlig bruke et 
 * rammeverk som lar oss cache promises.
 * 🏆 Som et midlertidig hack, lag promiset utenfor komponenten i stedet og 
 * bruk den i use-apiet i stedet.
 * 💡 const usersPromise = getUsers()
 * 🔗 https://react.dev/reference/react/use
 */
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
 * 🏆 Vi trenger bare theme-verdien dersom user.id er 1337. Flytt henting av contexten inn i if'en.
 * Du vil (forhåpentligvis) få en typefeil her.
 * 🏆 Erstatt useContext med use i steder for å hente theme conditionally
 * 🔗 https://react.dev/reference/react/use
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
  