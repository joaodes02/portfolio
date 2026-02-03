import PageHome from "./components/Home";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Fundo animado global */}

      {/* Conteúdo principal */}
      <main className="relative z-10 flex min-h-screen w-full items-center justify-center p-4 md:p-8 bg-[url('/bg.jpg')] bg-cover">
        <PageHome />
      </main>
    </div>
  );
}
