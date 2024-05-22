import { useState, MouseEvent } from "react";

function increment(previousState: number) {
    return previousState + 1
}

/**
 * 🏆 Erstatt useState med useActionState, den kan ta inn increment-funksjonen
 * som første parameter og en default verdi som er 0.
 * 🏆 Hent verdien og formAction som useActionState-hooken returnerer
 * 🏆 Fjern bruken av onClick og få knappen til å reagere trigge increment funksjonen
 * ved å bruke formAction du fikk tilbake fra hook'en. 
 * 🔗 https://react.dev/reference/react/useActionState
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
