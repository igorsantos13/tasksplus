import React from "react";

export function Header() {
  return (
    <header className="w-screen h-auto bg-neutral-900">
      <section className="p-4 w-full flex flex-row justify-between items-center">
        <nav className="">
          <a href="#">
            <h1 className="font-bold text-white text-4xl">
              Tarefas<span className="text-4xl text-red-600">+</span>
            </h1>
          </a>
        </nav>
        <button className="text-white rounded-full py-1 px-6 bg-transparent border-2 border-white">
          Acessar
        </button>
      </section>
    </header>
  );
}
