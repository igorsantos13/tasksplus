import Head from "next/head";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Trash2, Share2 } from "lucide-react";

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
    <>
      <div className="h-[calc(50vh-56px)] w-full bg-neutral-900">
        <Head>
          <title>My task dashboard</title>
        </Head>

        <main className="w-full h-full flex flex-col items-start justify-center bg-neutral-900">
          <section className="ml-28">
            <h1 className="font-bold text-white text-3xl mb-4">
              Qual sua tarefa?
            </h1>
            <form
              action=""
              className="flex flex-col justify-between w-full gap-2"
            >
              <textarea
                name="tarefa"
                id="tarefa"
                cols={100}
                rows={12}
                placeholder="Digite sua tarefa..."
                className="placeholder:text-black rounded-lg text-black p-2 w-full max-w-[2300px] resize-none h-36 outline-none"
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

        <section className="bg-white h-[50vh] w-full overflow-hidden text-black flex flex-col justify-start items-center p-3">
          <h1 className="text-black font-bold text-2xl">Minhas Tarefas</h1>

          <article className="border border-black rounded-lg p-2 flex justify-start  flex-col pt-4">
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="" className="bg-blue-600 text-white p-1">
                PUBLICO
              </label>
              <button className="">
                <Share2 className="text-blue-600" />
              </button>
            </div>
            <div className="p-2 flex flex-row items-center justify-center">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                harum expedita molestiae repellendus dignissimos odio, ex sequi
                ab ipsam inventore corrupti veritatis nesciunt distinctio
                corporis unde in voluptatum nostrum a!
              </p>
              <button>
                <Trash2 className="text-red-600" />
              </button>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
