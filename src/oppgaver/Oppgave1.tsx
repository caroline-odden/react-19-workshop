import { useState, MouseEvent } from "react";

function increment(previousState: number) {
    return previousState + 1
}

/**
 * 1. Erstatt bruken av useEffect med useActionState
 *  a) Send inn funksjon og default verdi til useActionState og hent verdien og formAction den returnerer.
 *  b) Fjern bruken av onClick og få knappen til å reagere på formAction du får tilbake fra hook'en. 
 */

export function Oppgave1() {
	const [clickCount, setClickCount] = useState(0)

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		const newClickCount = increment(clickCount)
		setClickCount(newClickCount)
	}

	return (
		<form>
			{clickCount}
			<button onClick={handleClick}>Increment</button>
		</form>
	)
}
