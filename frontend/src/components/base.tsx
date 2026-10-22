import type { ReactNode } from "react";

import "./base.css"

type Props = {
  children: ReactNode;
};

function Base ({ children }: Props) {
    return (
    <>
    <header>
        <p>Home</p>
        <p>Sobre</p>
        <p>Contato</p>
    </header>
    <main>
        { children }
    </main>
    <footer>
        <p>@Reali Corporation</p>
    </footer>
    </>        
    )

}

export default Base