"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { techIcons, techColors } from "./TechIcons";
import AsciiCube from "./AsciiCube";

type CardType = "trajetoria" | "projetos" | "stack" | "contato";

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
}

interface StepTrajetoria {
  titulo: string;
  subtitulo?: string;
  conteudo?: string;
  periodo?: string;
  isIntro?: boolean;
}

interface StepProjetos {
  titulo: string;
  projetos: [Projeto, Projeto];
}

interface TechStack {
  categoria: string;
  tecnologias: {
    nome: string;
  }[];
}

interface ContatoInfo {
  tipo: string;
  valor: string;
  link?: string;
  icone: string;
}

export default function TrajetoriaCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardType, setCardType] = useState<CardType>("trajetoria");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const stepsTrajetoria: StepTrajetoria[] = [
    {
      titulo: "João Victor Ribeiro",
      subtitulo: "Desenvolvedor Full Stack",
      isIntro: true,
    },
    {
      titulo: "Início da Jornada",
      subtitulo: "Primeiros Passos na Programação",
      conteudo:
        "Tudo começou com curiosidade por entender como os sites funcionavam. Aprendi HTML, CSS e JavaScript de forma autodidata, criando pequenos projetos pessoais que me motivaram a seguir nessa área.",
      periodo: "2018 - 2019",
    },
    {
      titulo: "Primeiro Emprego",
      subtitulo: "Desenvolvedor Júnior @ TechStart",
      conteudo:
        "Minha primeira oportunidade profissional foi em uma startup de tecnologia. Trabalhei com React, Node.js e MongoDB, desenvolvendo features para um sistema de gestão de vendas.",
      periodo: "2019 - 2021",
    },
    {
      titulo: "Crescimento Profissional",
      subtitulo: "Desenvolvedor Pleno @ InnovateTech",
      conteudo:
        "Assumi responsabilidades maiores, liderando projetos e mentorando desenvolvedores juniores. Aprofundei conhecimentos em arquitetura de software, CI/CD e metodologias ágeis.",
      periodo: "2021 - 2023",
    },
    {
      titulo: "Especialização",
      subtitulo: "Foco em Performance e UX",
      conteudo:
        "Mergulhei em otimização de performance, acessibilidade e experiência do usuário. Implementei melhorias que reduziram o tempo de carregamento em 60% e aumentaram a conversão em 35%.",
      periodo: "2023 - 2024",
    },
    {
      titulo: "Momento Atual",
      subtitulo: "Desenvolvedor Sênior & Consultor",
      conteudo:
        "Hoje atuo como desenvolvedor sênior e consultor, ajudando empresas a construir produtos escaláveis e de alta qualidade. Sempre em busca de novos desafios e tecnologias.",
      periodo: "2024 - Presente",
    },
  ];

  const stepsProjetos: StepProjetos[] = [
    {
      titulo: "E-commerce & SaaS",
      projetos: [
        {
          titulo: "ShopFlow",
          descricao:
            "Plataforma de e-commerce completa com painel administrativo, gateway de pagamento integrado e sistema de estoque em tempo real.",
          tecnologias: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
          link: "https://github.com/joao/shopflow",
        },
        {
          titulo: "TaskMaster Pro",
          descricao:
            "SaaS de gerenciamento de projetos com Kanban, time tracking e relatórios automatizados para equipes remotas.",
          tecnologias: ["React", "Node.js", "Socket.io", "MongoDB"],
          link: "https://github.com/joao/taskmaster",
        },
      ],
    },
    {
      titulo: "Mobile & APIs",
      projetos: [
        {
          titulo: "FitTrack",
          descricao:
            "Aplicativo mobile para acompanhamento de treinos e nutrição com IA para sugestões personalizadas de exercícios.",
          tecnologias: ["React Native", "FastAPI", "TensorFlow", "Redis"],
          link: "https://github.com/joao/fittrack",
        },
        {
          titulo: "PaymentHub API",
          descricao:
            "API RESTful para integração de múltiplos gateways de pagamento com webhooks, retry automático e dashboard analytics.",
          tecnologias: ["Go", "PostgreSQL", "Docker", "Kubernetes"],
          link: "https://github.com/joao/paymenthub",
        },
      ],
    },
    {
      titulo: "Open Source & Tools",
      projetos: [
        {
          titulo: "ReactForm Builder",
          descricao:
            "Biblioteca open source para criação de formulários dinâmicos com validação, máscaras e integração com React Hook Form.",
          tecnologias: ["TypeScript", "React", "Zod", "Tailwind"],
          link: "https://github.com/joao/react-form-builder",
        },
        {
          titulo: "DevOps Dashboard",
          descricao:
            "Painel unificado para monitoramento de pipelines CI/CD, métricas de deploy e health check de microserviços.",
          tecnologias: ["Vue.js", "GraphQL", "Prometheus", "Grafana"],
          link: "https://github.com/joao/devops-dashboard",
        },
      ],
    },
  ];

  const stepsStack: TechStack[] = [
    {
      categoria: "Frontend",
      tecnologias: [
        { nome: "React" },
        { nome: "Next.js" },
        { nome: "TypeScript" },
        { nome: "Tailwind CSS" },
        { nome: "Vue.js" },
        { nome: "Framer Motion" },
      ],
    },
    {
      categoria: "Backend",
      tecnologias: [
        { nome: "Node.js" },
        { nome: "NestJS" },
        { nome: "Python" },
        { nome: "FastAPI" },
        { nome: "Go" },
        { nome: "GraphQL" },
      ],
    },
    {
      categoria: "Database & DevOps",
      tecnologias: [
        { nome: "PostgreSQL" },
        { nome: "MongoDB" },
        { nome: "Redis" },
        { nome: "Docker" },
        { nome: "Kubernetes" },
        { nome: "AWS" },
      ],
    },
  ];

  const contatoInfo: ContatoInfo[] = [
    {
      tipo: "Email",
      valor: "joao@exemplo.com",
      link: "mailto:joao@exemplo.com",
      icone: "✉️",
    },
    {
      tipo: "LinkedIn",
      valor: "/in/joaovictor",
      link: "https://linkedin.com/in/joaovictor",
      icone: "💼",
    },
    {
      tipo: "GitHub",
      valor: "@joaodev",
      link: "https://github.com/joaodev",
      icone: "🐙",
    },
    {
      tipo: "WhatsApp",
      valor: "+55 11 99999-9999",
      link: "https://wa.me/5511999999999",
      icone: "📱",
    },
  ];

  const tabs: { type: CardType; label: string }[] = [
    { type: "trajetoria", label: "Trajetória" },
    { type: "projetos", label: "Projetos" },
    { type: "stack", label: "Stack" },
    { type: "contato", label: "Contato" },
  ];

  const getStepsForType = () => {
    switch (cardType) {
      case "trajetoria":
        return stepsTrajetoria;
      case "projetos":
        return stepsProjetos;
      case "stack":
        return stepsStack;
      case "contato":
        return [{ single: true }];
      default:
        return [];
    }
  };

  const currentSteps = getStepsForType();
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === currentSteps.length - 1;
  const showNavigation = cardType !== "contato";

  const nextStep = () => {
    if (isLastStep || isTransitioning || !showNavigation) return;
    setDirection(1);
    setIsTransitioning(true);
    setCurrentStep((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const prevStep = () => {
    if (isFirstStep || isTransitioning || !showNavigation) return;
    setDirection(-1);
    setIsTransitioning(true);
    setCurrentStep((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const switchCardType = (type: CardType) => {
    if (type === cardType || isTransitioning) return;
    const currentIndex = tabs.findIndex((t) => t.type === cardType);
    const newIndex = tabs.findIndex((t) => t.type === type);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setIsTransitioning(true);
    setCardType(type);
    setCurrentStep(0);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const renderTrajetoriaContent = () => {
    const step = stepsTrajetoria[currentStep];

    // Primeira step com cubo ASCII
    if (step.isIntro) {
      return (
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {step.titulo}
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {step.subtitulo}
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <AsciiCube />
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-full">
        {step.periodo && (
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
            {step.periodo}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
          {step.titulo}
        </h2>
        {step.subtitulo && (
          <h3 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
            {step.subtitulo}
          </h3>
        )}
        {step.conteudo && (
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {step.conteudo}
          </p>
        )}
      </div>
    );
  };

  const renderProjetosContent = () => {
    const step = stepsProjetos[currentStep];
    return (
      <div className="flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {step.titulo}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {step.projetos.map((projeto, index) => (
            <motion.div
              key={projeto.titulo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-gray-200/50 dark:border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col"
            >
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {projeto.titulo}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 flex-1">
                {projeto.descricao}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {projeto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs md:text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {projeto.link && (
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                >
                  Ver projeto →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderStackContent = () => {
    const step = stepsStack[currentStep];
    return (
      <div className="flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {step.categoria}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Tecnologias que domino nesta área
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 flex-1 content-start">
          {step.tecnologias.map((tech, index) => {
            const IconComponent = techIcons[tech.nome];
            const colors = techColors[tech.nome] || {
              bg: "bg-gray-500/10",
              text: "text-gray-500",
              glow: "shadow-gray-500/20",
            };
            const isHovered = hoveredTech === tech.nome;

            return (
              <motion.div
                key={tech.nome}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                onMouseEnter={() => setHoveredTech(tech.nome)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`
                  relative bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3
                  border border-gray-200/50 dark:border-white/10
                  transition-all duration-300 cursor-pointer overflow-hidden
                  ${isHovered ? `shadow-lg ${colors.glow} border-transparent` : "hover:shadow-md"}
                `}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 ${colors.bg} opacity-0`}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon container */}
                  <motion.div
                    className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-xl ${colors.bg}
                      flex items-center justify-center mb-2
                    `}
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                      rotate: isHovered ? [0, -8, 8, 0] : 0,
                    }}
                    transition={{
                      scale: { type: "spring", stiffness: 300, damping: 20 },
                      rotate: { duration: 0.4 },
                    }}
                  >
                    {IconComponent ? (
                      <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
                    ) : (
                      <span className={`text-lg font-bold ${colors.text}`}>
                        {tech.nome.charAt(0)}
                      </span>
                    )}
                  </motion.div>

                  {/* Tech name */}
                  <motion.span
                    className="font-medium text-gray-900 dark:text-white text-xs"
                    animate={{ y: isHovered ? -1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {tech.nome}
                  </motion.span>
                </div>

                {/* Decorative glow */}
                <motion.div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 ${colors.bg} rounded-full blur-xl`}
                  animate={{ opacity: isHovered ? 0.5 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderContatoContent = () => {
    return (
      <div className="flex flex-col h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Vamos conversar?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {contatoInfo.map((contato, index) => (
            <motion.a
              key={contato.tipo}
              href={contato.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-4 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-white/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                {contato.icone}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {contato.tipo}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{contato.valor}</p>
              </div>
              <div className="ml-auto text-gray-400 group-hover:text-blue-500 transition-colors">
                →
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-200/50 dark:border-blue-500/20"
        >
          <p className="text-center text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Disponível para freelance</span> - Respondo em até 24h
          </p>
        </motion.div>
      </div>
    );
  };

  const renderContent = () => {
    switch (cardType) {
      case "trajetoria":
        return renderTrajetoriaContent();
      case "projetos":
        return renderProjetosContent();
      case "stack":
        return renderStackContent();
      case "contato":
        return renderContatoContent();
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col relative overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-black/50 w-full max-w-4xl h-[600px] mx-auto border border-gray-200/50 dark:border-white/10">
      {/* Header com imagem e navegação de tipo */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start p-4 md:p-6 pb-0 relative z-10">
        {/* Tabs de navegação */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab.type}
              onClick={() => switchCardType(tab.type)}
              disabled={isTransitioning}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                cardType === tab.type
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                  : "bg-gray-100/80 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20"
              } disabled:cursor-not-allowed`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Imagem no canto superior direito */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl self-end md:self-start">
          <Image
            src="/ascii-art.png"
            alt="João Victor Ribeiro"
            width={80}
            height={80}
            className="w-full h-full object-cover"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 p-4 md:p-6 pt-4 relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${cardType}-${currentStep}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="h-full"
          >
            <div className="relative z-0 h-full">{renderContent()}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Barras de Transição - Transparentes */}
      <AnimatePresence>
        {isTransitioning &&
          [0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={`bar-${index}-${currentStep}-${direction}`}
              initial={{ y: direction === 1 ? "100%" : "-100%" }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              exit={{
                y: direction === 1 ? "-100%" : "100%",
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              className="absolute top-0 h-full backdrop-blur-md bg-gray-900/60 dark:bg-white/10"
              style={{
                left: `${index * 20}%`,
                width: "20%",
                zIndex: 30,
              }}
            />
          ))}
      </AnimatePresence>

      {/* Footer com indicadores e botões */}
      <div className="p-4 md:p-6 pt-0 relative z-10">
        {showNavigation && (
          <>
            {/* Indicadores de step */}
            <div className="flex justify-center gap-2 mb-4">
              {currentSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning || index === currentStep) return;
                    setDirection(index > currentStep ? 1 : -1);
                    setIsTransitioning(true);
                    setCurrentStep(index);
                    setTimeout(() => setIsTransitioning(false), 900);
                  }}
                  disabled={isTransitioning}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "w-8 bg-blue-600 dark:bg-blue-500"
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  } disabled:cursor-not-allowed`}
                  aria-label={`Ir para step ${index + 1}`}
                />
              ))}
            </div>

            {/* Botões de navegação */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevStep}
                disabled={isFirstStep || isTransitioning}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                  isFirstStep
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                ← Voltar
              </button>
              <button
                onClick={nextStep}
                disabled={isLastStep || isTransitioning}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                  isLastStep
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Próximo →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
