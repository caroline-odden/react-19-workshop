export function ResetButton() {
    return (
        <button
        className="reset"
        onClick={async () => {
          await fetch("//localhost:3000/reset");
          window.location.reload();
        }}
      >
        Reset
      </button>
    )
}