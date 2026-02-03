import Teste from "./components/teste";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Fundo animado global */}
      <AnimatedBackground />

      {/* Conteúdo principal */}
      <main className="relative z-10 flex min-h-screen w-full items-center justify-center p-4 md:p-8">
        <Teste />
      </main>
    </div>
  );
}
