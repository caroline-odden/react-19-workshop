import { useState, MouseEvent } from "react";

function increment(previousState: number) {
    return previousState + 1
}

/**
 * 1. Erstatt bruken av useEffect med useActionState 
 *  a) Hent verdi og formAction fra useActionState
 *  b) Få formet til å trigge formAction uten å bruke onClick
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
