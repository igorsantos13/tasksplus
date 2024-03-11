import Head from "next/head";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function getUserSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export default async function Dashboard() {
  const session = await getUserSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Head>
        <title>My task dashboard</title>
      </Head>

      <main className="w-full h-screen flex flex-col items-center pt-10 bg-neutral-900">
        <section className="">
          <h1 className="font-bold text-white text-3xl mb-4">
            Qual sua tarefa?
          </h1>
          <form action="" className="flex flex-col justify-between gap-2">
            <textarea
              name="tarefa"
              id="tarefa"
              cols={100}
              rows={12}
              placeholder="Digite sua tarefa..."
              className="placeholder:text-black rounded-lg text-black p-4 focus:none focus-visible:none"
            ></textarea>
            <div className="flex flex-row gap-4 items-center ">
              <input
                type="checkbox"
                name="publica"
                id="publica"
                className="border-4 border-slate-400 size-5 appearance-none rounded-md checked:appearance-auto"
              />
              <label htmlFor="publica">Deixar tarefa publica</label>
            </div>
            <button className="bg-blue-600 rounded-md p-2 font-bold">
              Registrar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
