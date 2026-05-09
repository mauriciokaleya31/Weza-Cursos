/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle,
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Clock, 
  Users, 
  CreditCard, 
  TrendingUp, 
  Package, 
  Globe, 
  Award,
  Wrench,
  Hammer,
  Cpu,
  Code,
  Smartphone,
  Database,
  Monitor,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Zap,
  Snowflake
} from 'lucide-react';

const WHATSAPP_NUMBER = "244928276039";
const SECOND_PHONE = "244958292921";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "info@weza.ao";
const LOCATION = "Camama 1, Chimbicado";
const LOGO_URL = "https://visa.onlyvibes.online/wp-content/uploads/2026/05/Design-sem-nome-1.png";

export default function App() {
  const courses = [
    {
      title: "Importação e Logística de Mercadorias",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
      icon: <Package className="w-6 h-6" />,
      investment: "25.000 Kz",
      fee: "5.000 Kz",
      benefit: "Direito a Cartão VISA Incluído (Grátis!)",
      duration: "2 Dias",
      vagas: 10,
      content: [
        "Processos de Importação e Legislação Aduaneira",
        "Identificação e Seleção de Fornecedores Internacionais",
        "Logística Internacional e Despacho Aduaneiro",
        "Cálculo de Custo de Importação e Precificação",
        "Criação de Loja Online (E-commerce basic)"
      ]
    },
    {
      title: "Marketing Digital e E-Commerce",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      icon: <Globe className="w-6 h-6" />,
      investment: "45.000 Kz",
      fee: "5.000 Kz",
      benefit: "Direito a Cartão VISA Incluído (Grátis!)",
      duration: "5 Dias",
      vagas: 10,
      content: [
        "Estratégias de Marketing de Conteúdo e Social Media",
        "Gestão de Tráfego Pago (Ads Avançado)",
        "SEO e Otimização de Conversão (CRO)",
        "E-mail Marketing e Automação de Vendas",
        "Análise de Dados e Métricas (Analytics)"
      ]
    },
    {
      title: "Gestão e Administração de Empresa",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="w-6 h-6" />,
      investment: "45.000 Kz",
      fee: "5.000 Kz",
      benefit: "Direito a Certificado Reconhecido",
      duration: "1 Mês",
      vagas: 10,
      content: [
        "Planeamento Estratégico e Plano de Negócios",
        "Gestão Financeira e Análise de Custos",
        "Gestão de Operações e Processos",
        "Marketing e Vendas",
        "Atendimento ao Cliente e Qualidade"
      ]
    },
    {
      title: "Eletricidade e Instalações Eléctricas",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-6 h-6" />,
      investment: "30.000 Kz",
      fee: "5.000 Kz",
      benefit: "Formação Técnica Especializada",
      duration: "1 Mês",
      vagas: 10,
      content: [
        "Fundamentos de Electricidade",
        "Instalações Eléctricas Residenciais e Comerciais",
        "Protecções e Comandos Eléctricos",
        "Leitura e Interpretação de Diagramas",
        "Normas de Segurança (NR10)"
      ]
    },
    {
      title: "Refrigeração e Climatização",
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/05/Design-sem-nome-3.png",
      icon: <Snowflake className="w-6 h-6" />,
      investment: "30.000 Kz",
      fee: "5.000 Kz",
      benefit: "Especialista em AVAC-R",
      duration: "1 Mês",
      vagas: 10,
      content: [
        "Fundamentos de Refrigeração",
        "Instalação e Manutenção de Ar Condicionado Split",
        "Sistemas de Refrigeração Doméstica e Comercial",
        "Diagnóstico de Falhas e Recarga de Gás",
        "Boas Práticas e Segurança"
      ]
    },
    {
      title: "Construção Civil e Acabamentos",
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/05/Design-sem-nome-2.png",
      icon: <Hammer className="w-6 h-6" />,
      investment: "35.000 Kz",
      fee: "5.000 Kz",
      benefit: "Capacitação para o Canteiro de Obras",
      duration: "1 Mês",
      vagas: 10,
      content: [
        "Leitura de Plantas e Projetos",
        "Técnicas de Alvenaria e Revestimentos",
        "Acabamentos e Pinturas Profissionais",
        "Segurança no Trabalho (EPIs)",
        "Gestão de Obras e Orçamentos"
      ]
    }
  ];

  const benefits = [
    "Formação Prática e Teórica",
    "Certificação Reconhecida",
    "Prepare-se para o Mercado de Trabalho",
    "Formação que Gera Competência e Oportunidades"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const testimonials = [
    {
      name: "António Manuel",
      role: "Aluno de Importação",
      text: "Graças à Weza Soluções, hoje consigo importar produtos da China com segurança e lucratividade. O curso superou minhas expectativas!",
      image: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Isabel dos Santos",
      role: "Aluna de Marketing Digital",
      text: "O curso mudou minha percepção de vendas online. Já tripliquei meus clientes no Instagram aplicando as estratégias que aprendi.",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Domingos Pedro",
      role: "Aluno de Eletricidade",
      text: "Formação excelente! O foco na prática é o diferencial. Já estou trabalhando por conta própria fazendo instalações residenciais.",
      image: "https://images.unsplash.com/photo-1520155707862-5b32817388d6?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Helena Paulo",
      role: "Aluna de Gestão",
      text: "Aprendi ferramentas de gestão que organizaram totalmente meu pequeno negócio. A Weza Soluções abre portas para o mercado.",
      image: "https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Francisco João",
      role: "Aluno de Refrigeração",
      text: "O instrutor é muito experiente. Aprendi a instalar e dar manutenção em AC do zero. Valeu cada centavo do investimento.",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Maria Ventura",
      role: "Aluna de Marketing Digital",
      text: "Comecei o curso sem saber nada e agora já faço gestão de tráfego pago para várias empresas locais em Luanda. Incrível!",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Weza Soluções Logo" 
              className="h-16 md:h-20 w-auto transition-transform hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-green-500/20 active:scale-95"
          >
             <Phone size={16} />
            <span className="hidden sm:inline">Inscrição via WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-4 min-h-screen flex items-center justify-center overflow-hidden bg-[#001D3D]">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Main Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-orange/30 rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.3, 1, 1.3],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[180px]"
          />

          {/* Floating Technical Icons */}
          {[
            { Icon: Zap, color: "text-brand-orange", top: "15%", left: "10%", size: 40, delay: 0 },
            { Icon: BookOpen, color: "text-white", top: "25%", left: "80%", size: 32, delay: 2 },
            { Icon: Globe, color: "text-blue-400", top: "70%", left: "15%", size: 48, delay: 1 },
            { Icon: Package, color: "text-white", top: "65%", left: "85%", size: 36, delay: 3 },
            { Icon: Snowflake, color: "text-blue-300", top: "40%", left: "5%", size: 28, delay: 4 },
            { Icon: TrendingUp, color: "text-brand-orange", top: "80%", left: "50%", size: 44, delay: 1.5 },
            { Icon: Cpu, color: "text-brand-orange", top: "10%", left: "60%", size: 30, delay: 0.5 },
            { Icon: Code, color: "text-white", top: "45%", left: "90%", size: 35, delay: 2.5 },
            { Icon: Smartphone, color: "text-blue-400", top: "85%", left: "5%", size: 40, delay: 1.2 },
            { Icon: Monitor, color: "text-brand-orange", top: "55%", left: "20%", size: 32, delay: 3.5 },
            { Icon: Database, color: "text-white", top: "20%", left: "30%", size: 28, delay: 4.5 },
          ].map((item, id) => (
            <motion.div
              key={id}
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut" 
              }}
              className={`absolute ${item.color} pointer-events-none opacity-20`}
              style={{ top: item.top, left: item.left }}
            >
              <item.Icon size={item.size} strokeWidth={1} />
            </motion.div>
          ))}

          {/* Particle Web */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Glass Overlay Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#001D3D] via-[#001D3D]/50 to-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full mb-10 border border-white/10 shadow-2xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-white text-xs font-black tracking-widest uppercase">Inscrições Abertas 2026</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white mb-6 md:mb-8 leading-[0.85] tracking-tighter">
              <span className="text-brand-orange text-2xl md:text-4xl block mb-4 tracking-normal">INVISTA NO SEU FUTURO!</span>
              VENHA SER UM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-white">PROFISSIONAL</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/70 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              FORMAÇÃO QUE GERA COMPETENCIA, COMPETENCIA QUE GERA OPORTUNIDADES.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(242,101,34,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-brand-orange text-brand-blue px-12 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">INICIAR AGORA</span>
                <Zap className="relative z-10 w-6 h-6" fill="currentColor" />
              </motion.a>
              
              <motion.a
                whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                style={{ border: "2px solid rgba(255,255,255,0.2)" }}
                href="#courses"
                className="px-12 py-5 rounded-3xl font-black text-xl text-white backdrop-blur-xl flex items-center justify-center gap-3 transition-all font-sans"
              >
                EXPLORAR CURSOS <ChevronRight size={24} />
              </motion.a>
            </div>

            {/* Consolidated Interactive Stats */}
            <div className="mt-20 md:mt-24 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { label: "Alunos Formados", value: "2.5k+" },
                { label: "Metodologia", value: "100% Prático" },
                { label: "Certificação", value: "Reconhecido" },
                { label: "Turmas VIP", value: "10 Alunos" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.6 + (i * 0.1) },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }
                  }}
                  className="px-4 py-6 md:px-10 md:py-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center group hover:bg-white/10 transition-colors"
                >
                  <p className="text-2xl md:text-4xl font-black text-brand-orange leading-none mb-2 text-center group-hover:scale-110 transition-transform">{stat.value}</p>
                  <p className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] leading-tight text-center">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        {/* Background Accent for transition */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-[#001D3D] to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-brand-blue mb-4 uppercase tracking-tighter"
            >
              Nossos <span className="text-brand-orange">Cursos</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              className="h-1.5 bg-brand-orange mx-auto rounded-full"
            ></motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col group h-full transition-shadow hover:shadow-brand-blue/5"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-8 right-8">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-4 shadow-xl"
                    >
                      {course.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Investimento</span>
                      <span className="text-brand-blue font-black text-lg">{course.investment}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duração</span>
                      <span className="text-brand-blue font-black text-lg">{course.duration}</span>
                    </div>
                  </div>

                  <h4 className="text-xs font-black text-brand-orange uppercase tracking-[0.2em] mb-5">O que você vai aprender:</h4>
                  <ul className="space-y-4 mb-10">
                    {course.content.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm text-gray-600 font-medium leading-snug">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 mb-8">
                       <p className="text-[11px] font-black text-brand-blue text-center uppercase tracking-widest">
                         ✨ {course.benefit}
                       </p>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.02, backgroundColor: "#F26522" }}
                      whileTap={{ scale: 0.98 }}
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black text-center block transition-all shadow-xl shadow-brand-blue/10 uppercase tracking-widest text-xs"
                    >
                      Reservar Minha Vaga
                    </motion.a>
                    <p className="text-center mt-5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Turmas exclusivas de 10 alunos
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section / Requirements */}
      <section className="py-24 px-4 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight uppercase italic">
                Por que escolher <br/> a <span className="text-brand-orange not-italic underline decoration-4 underline-offset-8">Weza Soluções?</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-brand-blue" strokeWidth={3} />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 text-white">
                <Award size={160} />
              </div>
              
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 Requisitos
              </h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xl font-black text-brand-orange">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Identificação</h4>
                    <p className="text-white/70">Cópia de BI (ou Cédula Pessoal)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xl font-black text-brand-orange">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fotografia</h4>
                    <p className="text-white/70">1 Foto tipo passe</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-brand-orange rounded-2xl">
                <p className="text-brand-blue font-black text-center text-lg mb-6 uppercase tracking-tighter">
                  Invista no seu futuro agora!
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue text-white py-5 rounded-xl font-black text-center block shadow-xl uppercase tracking-widest text-sm"
                >
                  Inscrever-se pelo WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Scroller */}
      <section className="py-24 px-4 bg-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-black uppercase text-3xl md:text-5xl tracking-tighter mb-4"
            >
              Nossa <span className="text-brand-orange">Comunidade</span>
            </motion.h2>
            <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">Mais de 500 profissionais formados em Luanda</p>
          </div>
          
          <div className="relative">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex gap-8 whitespace-nowrap"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="inline-block min-w-[320px] md:min-w-[450px] bg-white p-10 rounded-[3rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] whitespace-normal group hover:border-brand-orange/30 transition-colors"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border-4 border-gray-50 shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-black text-brand-blue text-lg leading-none mb-1.5">{testimonial.name}</h4>
                      <p className="text-[11px] font-bold text-brand-orange uppercase tracking-widest">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic font-medium leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-8 flex gap-1">
                    {[1,2,3,4,5].map(s => (
                      <Zap key={s} size={16} className="text-brand-orange fill-brand-orange" />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001D3D] text-white pt-24 pb-12 px-4 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mb-32 -mr-32"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Slot */}
            <div className="lg:col-span-1">
              <img 
                src={LOGO_URL} 
                alt="Weza Soluções Logo" 
                className="h-20 w-auto mb-8 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/60 font-medium leading-relaxed mb-8 max-w-xs">
                Transformando o mercado angolano através da capacitação técnica e excelência empresarial.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <MessageCircle size={20} />, link: WHATSAPP_LINK },
                  { icon: <Mail size={20} />, link: `mailto:${EMAIL}` },
                  { icon: <Phone size={20} />, link: `tel:+${WHATSAPP_NUMBER}` }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "#F26522", color: "#001D3D" }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-8">Navegação</h4>
              <ul className="space-y-4">
                {['Início', 'Sobre Nós', 'Cursos VIP', 'Depoimentos', 'Contacto'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-brand-orange transition-colors font-bold text-sm tracking-tight flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Module 1 */}
            <div className="group">
              <h4 className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-8">Fale Conosco</h4>
              <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 group-hover:border-brand-orange/30 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Phone size={16} />
                    </div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Call Center</span>
                  </div>
                  <p className="text-lg font-black text-white">{WHATSAPP_NUMBER}</p>
                  <p className="text-lg font-black text-white">{SECOND_PHONE}</p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 group-hover:border-brand-orange/30 transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                      <Mail size={16} />
                    </div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">E-mail</span>
                  </div>
                  <p className="text-sm font-bold text-white break-all">{EMAIL}</p>
                </div>
              </div>
            </div>

            {/* Contact Module 2 */}
            <div className="group">
              <h4 className="text-brand-orange font-black uppercase tracking-[0.2em] text-xs mb-8">Nossa Sede</h4>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 h-full group-hover:border-brand-orange/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <MapPin size={16} />
                  </div>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Endereço</span>
                </div>
                <p className="font-bold text-white leading-relaxed mb-6">
                  {LOCATION}<br/>
                  Luanda, Angola
                </p>
                <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-brand-orange/20 transition-all">
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="opacity-10"
                  >
                    <Globe size={80} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
