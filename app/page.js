"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  SiAmazonwebservices,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";

const projetos = [
  {
    nome: "UpFesty - Ingresso",
    descricao:
      "Plataforma de venda de ingressos para eventos, com gestão completa para organizadores e experiência fluida para compradores.",
  },
  {
    nome: "Litográfica California",
    descricao:
      "Sistema de controle de produção e vendas para litográfica, otimizando processos e melhorando a gestão de pedidos.",
  },
  {
    nome: "Fundacão Cesar Morani",
    descricao:
      "Site institucional para fundação, com foco em transparência e engajamento.",
  },
  {
    nome: "Carreira Inteligente",
    descricao:
      "Agente de IA, mentor de carreira, ajudando profissionais a chegarem no cargo sonhado.",
  },
  {
    nome: "Cresça & Enriqueça",
    descricao:
      "Blog de finanças pessoais, investimentos e desenvolvimento pessoal.",
  },
];

const servicos = [
  {
    indice: "01",
    titulo: "Landing pages e sites institucionais",
    descricao:
      "Páginas com foco em conversão, identidade forte e comunicação clara.",
  },
  {
    indice: "02",
    titulo: "Aplicações web performáticas",
    descricao:
      "Projetos performáticos, escaláveis e com boas práticas de SEO técnico.",
  },
  {
    indice: "03",
    titulo: "Integrações e automações",
    descricao:
      "Conexão com APIs, fluxos internos e automações para ganhar produtividade.",
  },
];

const stacks = [
  { nome: "Next.js", Icone: SiNextdotjs, cor: "var(--text)" },
  { nome: "React", Icone: SiReact, cor: "#61dafb" },
  { nome: "TypeScript", Icone: SiTypescript, cor: "#3178c6" },
  { nome: "JavaScript", Icone: SiJavascript, cor: "#f7df1e" },
  { nome: "Laravel", Icone: SiLaravel, cor: "#ff2d20" },
  { nome: "PostgreSQL", Icone: SiPostgresql, cor: "#336791" },
  { nome: "MySQL", Icone: SiMysql, cor: "#4479a1" },
  { nome: "AWS", Icone: SiAmazonwebservices, cor: "#ff9900" },
  { nome: "Node.js", Icone: SiNodedotjs, cor: "#5fa04e" },
  { nome: "Prisma", Icone: SiPrisma, cor: "#5a67d8" },
];

function ThemeIcon({ tema }) {
  if (tema === "dark") {
    return (
      <svg
        className="theme-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </svg>
    );
  }

  return (
    <svg
      className="theme-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20.2 15.4a8.4 8.4 0 1 1-11.6-11A7 7 0 1 0 20.2 15.4Z" />
    </svg>
  );
}

export default function Home() {
  const [tema, setTema] = useState("dark");

  useEffect(() => {
    const temaSalvo = window.localStorage.getItem("portfolio-theme");
    const temaInicial = temaSalvo === "light" ? "light" : "dark";

    setTema(temaInicial);
    document.documentElement.dataset.theme = temaInicial;
  }, []);

  const alternarTema = () => {
    const proximoTema = tema === "dark" ? "light" : "dark";

    setTema(proximoTema);
    document.documentElement.dataset.theme = proximoTema;
    window.localStorage.setItem("portfolio-theme", proximoTema);
  };

  return (
    <div className="page-shell">
      <div className="dot-overlay" aria-hidden="true" />

      <main className="portfolio">
        {/* ── Header ── */}
        <header className="portfolio-header anim-in" style={{ "--i": 0 }}>
          <div className="header-identity">
            <div className="status-badge">
              <span className="status-dot" />
              Disponível para projetos
            </div>
            <h1 className="portfolio-title">João Victor Ribeiro</h1>
            <p className="header-meta">
              Engenheiro de Software
              <span className="header-meta-separator">·</span>
              <a href="mailto:joaovictordes02@gmail.com">
                joaovictordes02@gmail.com
              </a>
            </p>
          </div>

          <div className="header-right">
            <button
              type="button"
              className="theme-button"
              onClick={alternarTema}
              aria-label={
                tema === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
              }
              title={tema === "dark" ? "Tema claro" : "Tema escuro"}
            >
              <ThemeIcon tema={tema} />
            </button>

            <div className="profile-photo">
              <Image
                src="/foto-perfil.png"
                alt="Foto de perfil de João Victor Ribeiro"
                fill
                priority
                sizes="(max-width: 640px) 54px, 72px"
              />
            </div>
          </div>
        </header>

        {/* ── Intro ── */}
        <section className="anim-in" style={{ "--i": 1 }}>
          <p className="intro-text">
            Sempre aprendendo e construindo soluções digitais com foco em{" "}
            <em>clareza</em>, <em>performance</em> e{" "}
            <em>experiência do usuário</em>.
          </p>

          <div className="contact-row">
            <a href="mailto:joaovictordes02@gmail.com" className="contact-pill">
              E-mail
              <HiArrowUpRight className="pill-arrow" />
            </a>
            <a
              href="https://wa.me/5524992176690"
              target="_blank"
              rel="noreferrer"
              className="contact-pill"
            >
              WhatsApp
              <HiArrowUpRight className="pill-arrow" />
            </a>
          </div>
        </section>

        {/* ── Stacks ── */}
        <section className="section-block anim-in" style={{ "--i": 2 }}>
          <h2 className="section-title">Stacks que eu trabalho</h2>

          <div className="stack-grid">
            {stacks.map(({ nome, Icone, cor }) => (
              <span key={nome} className="stack-chip" title={nome}>
                <Icone
                  className="stack-icon"
                  style={{ color: cor }}
                  aria-hidden="true"
                />
                <span className="stack-name">{nome}</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── Projetos ── */}
        <section className="section-block anim-in" style={{ "--i": 3 }}>
          <h2 className="section-title">Projetos anteriores</h2>

          <div className="projects-grid">
            {projetos.map((projeto, idx) => (
              <article key={projeto.nome} className="project-card">
                <span className="card-index">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Serviços ── */}
        <section className="section-block anim-in" style={{ "--i": 4 }}>
          <h2 className="section-title">Como posso ajudar seu produto</h2>

          <p className="offer-lead">
            Entrego soluções web com foco em resultado: mais conversão, mais
            velocidade e uma experiência que transmite confiança para o cliente.
          </p>

          <div className="offer-grid">
            {servicos.map((servico) => (
              <article key={servico.titulo} className="offer-card">
                <span className="offer-index">{servico.indice}</span>
                <h3>{servico.titulo}</h3>
                <p>{servico.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-block anim-in" style={{ "--i": 5 }}>
          <h2 className="cta-title">Vamos conversar sobre seu projeto?</h2>
          <p className="cta-sub">
            Estou disponível para novos projetos e adoraria ouvir sobre o seu.
          </p>
          <div className="cta-buttons">
            <a href="mailto:joaovictordes02@gmail.com" className="cta-primary">
              Enviar e-mail
              <HiArrowUpRight className="pill-arrow" />
            </a>
            <a
              href="https://wa.me/5524992176690"
              target="_blank"
              rel="noreferrer"
              className="cta-secondary"
            >
              WhatsApp
              <HiArrowUpRight className="pill-arrow" />
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="site-footer anim-in" style={{ "--i": 6 }}>
          <div className="footer-line" />
          <div className="footer-content">
            <span className="footer-copy">
              © {new Date().getFullYear()} João Victor Ribeiro
            </span>
            <div className="footer-links">
              <a
                href="https://github.com/joaodes02"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-ribeiro-dev02/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <SiLinkedin />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
