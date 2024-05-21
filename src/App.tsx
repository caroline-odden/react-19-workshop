import { Suspense } from 'react';
import './App.css'
import { ResetButton } from './ResetButton';
import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="links">
        <Link to="/oppgave/1">Oppgave 1</Link>
        <Link to="/oppgave/2">Oppgave 2</Link>
        <Link to="/oppgave/3">Oppgave 3</Link>
        <Link to="/oppgave/4">Oppgave 4</Link>
        <Link to="/oppgave/5">Oppgave 5</Link>
      </div>
      <Outlet />
      <ResetButton />
    </Suspense>
    </QueryClientProvider>
  )
}

export default App
