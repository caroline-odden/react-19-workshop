import { useState, MouseEvent } from "react";
// import { sleep } from "./utils";

/**
 * a)
 * Erstatt useState med useActionState, den kan ta inn en funksjon som heter addText og default verdien kan være undefined.
 * La addText ta inn en previousState og en formData som parametre. 
 * Bruk formData til å hente ut verdien som er i tekstfeltet, husk å legg til "name"-propen på input-elementet,
 * og la addText-funksjonen returnere ned nye meldingen og legg til teksten "added" på slutten som skal vises i nettsiden.
 * https://react.dev/reference/react/useActionState
 * 
 * b)
 * Lag en Button komponent i samme fil som du bruker i stedet for <button>
 * I funksjonen som returnerer teksten så kan du legge til `await sleep(1000)` før du returnerer den nye verdien
 * Gjør knappen disabled og vis teksten "Loading" dersom useFormStatus sier at action'en er pending
 * https://react.dev/reference/react-dom/hooks/useFormStatus
 */
export function Oppgave2() {
    const [inputValue, setInputValue] = useState<string>('')
    const [message, setMessage] = useState<string | undefined>(undefined)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setMessage(inputValue)
    }
    return (
      <form>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        {message}
        <button onClick={handleClick}>Add message</button>
      </form>
    )
}
