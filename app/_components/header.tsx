import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const { data: session, status } = useSession();
  return (
    <header className="w-screen h-[calc(100%-100px)] bg-neutral-900">
      <section className="p-4 w-full flex flex-row justify-between items-center">
        <nav className="flex items-center gap-2">
          <Link href="/">
            <h1 className="font-bold text-white text-4xl">
              Tarefas<span className="text-4xl text-red-600">+</span>
            </h1>
          </Link>
          {session?.user && (
            <button className="bg-white text-black px-4 rounded-md">
              <Link href="/dashboard">Meu perfil</Link>
            </button>
          )}
        </nav>
        {status === "loading" ? (
          <></>
        ) : session ? (
          <button
            onClick={() => signOut()}
            className="text-white rounded-full py-1 px-6 bg-transparent border-2 border-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Olá {session?.user?.name}
          </button>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="text-white rounded-full py-1 px-6 bg-transparent border-2 border-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            Acessar
          </button>
        )}
      </section>
    </header>
  );
}
