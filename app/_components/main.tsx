import Image from "next/image";
import hero from "../../public/hero.png";

export function Main() {
  return (
    <div className="bg-neutral-900 w-screen h-screen flex justify-center items-center">
      <h1>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </h1>

      <main className="flex flex-col items-center justify-center">
        <div>
          <Image
            className="max-w-[480px] object-contain w-auto h-auto"
            alt="Logo Tarefas+"
            src={hero}
            priority
          />
        </div>
        <h1 className="text-white text-center m-7 text-2xl font-bold">
          Sistema feito para você organizar seus estudos e tarefas
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-2 justify-around w-1/2">
          <section className="w-[150px] text-center rounded-md bg-white p-2 transition duration-150 ease-out hover:ease-in">
            +12 posts
          </section>
          <section className="w-[150px] text-center rounded-md bg-white p-2 transition duration-150 ease-out hover:ease-in">
            +90 comentários
          </section>
        </div>
      </main>
    </div>
  );
}
