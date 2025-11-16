'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Zap,
  Database,
  Settings,
  Mail,
  ArrowRight,
  Link as LinkIcon
} from 'lucide-react'

interface MCPSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const whyMatters = [
  {
    title: 'Automatiza sin codigo',
    description: 'Arma flujos sin programar integraciones a mano.'
  },
  {
    title: 'Datos en tiempo real',
    description: 'Trabaja con informacion actualizada de tus sistemas.'
  },
  {
    title: 'Centraliza tareas',
    description: 'Orquesta todo desde un solo lugar.'
  }
]

const zapierCategories = [
  'Correo y comunicacion: Gmail, Outlook, Slack, Discord, Telegram, Twilio SMS',
  'Productividad y archivos: Google Drive, Docs, Sheets, Notion, Dropbox, OneDrive',
  'Proyectos: Trello, Asana, ClickUp, Jira, Monday',
  'Ventas y CRM: HubSpot, Salesforce, Pipedrive, Zoho',
  'Formularios y calendario: Typeform, Google Forms, Calendly, Google Calendar',
  'Ecommerce y pagos: Shopify, WooCommerce, Stripe, PayPal',
  'Dev y soporte: GitHub, GitLab, Bitbucket, Zendesk, Intercom'
]

const capabilities = [
  {
    title: 'Conecta Google Drive',
    icon: <Database className="w-7 h-7 text-blue-500" />,
    bullets: [
      'Lee, crea y modifica archivos desde la IA.',
      'Ejemplo: analiza todos los briefs de clientes en una carpeta.'
    ]
  },
  {
    title: 'Integra Notion',
    icon: <Settings className="w-7 h-7 text-purple-500" />,
    bullets: [
      'Sincroniza bases y paginas automaticamente.',
      'Ejemplo: actualiza tu CRM interno con nuevos leads.'
    ]
  },
  {
    title: 'Conecta Gmail',
    icon: <Mail className="w-7 h-7 text-emerald-500" />,
    bullets: [
      'Lee y responde correos, organiza la bandeja.',
      'Ejemplo: clasifica correos y arma respuestas base.'
    ]
  }
]

const demoSteps = [
  'Abre ChatGPT o Claude.',
  'Ve a Configuracion -> Conectar herramientas.',
  'Elige tu servidor MCP (Google Drive, Notion, Zapier MCP, etc.).',
  'Autoriza el acceso.'
]

const realUseCases = [
  {
    title: 'Gestion de briefs',
    flow: [
      'Lee briefs desde Google Drive.',
      'Extrae objetivos, audiencia y presupuesto.',
      'Genera propuestas iniciales.',
      'Guarda el resultado en Notion.'
    ]
  },
  {
    title: 'Analisis de competencia',
    flow: [
      'Busca noticias y cambios de tus competidores.',
      'Analiza contenido de redes.',
      'Genera un reporte semanal.',
      'Avisame si hay cambios importantes.'
    ]
  },
  {
    title: 'Gestion de contenido',
    flow: [
      'Genera ideas y borradores por canal.',
      'Crea archivos y los guarda en tu Drive.',
      'Programa publicaciones.',
      'Revisa desempeno y optimiza.'
    ]
  }
]

const bestPractices = [
  'Empieza simple: una herramienta para leer y otra para crear.',
  'Describe bien cada herramienta: que hace, que necesita y que devuelve.',
  'Cuida permisos: solo lo necesario.',
  'Prueba con ejemplos cortos antes de armar el flujo completo.'
]

const commonCases = [
  'Analisis automatico de documentos.',
  'Reportes semanales.',
  'Clasificacion de correos.',
  'Sincronizacion de bases entre apps.'
]

const resources = [
  {
    label: 'Repos oficial y comunidad',
    url: 'https://github.com/modelcontextprotocol/servers'
  },
  {
    label: 'Directorio curado',
    url: 'https://mcpservers.org/'
  }
]

export default function MCPSlide({ onComplete, onDownload: _onDownload, completedSections }: MCPSlideProps) {
  const isCompleted = completedSections.includes('mcps')

  const handleMarkComplete = () => {
    if (!isCompleted) {
      onComplete('mcps')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="slide-title">MCP: Model Context Protocol</h1>
          <p className="slide-subtitle text-primary-600">
            Conecta ChatGPT o Claude con el mundo real
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card space-y-6">
            <div>
              <h2 className="section-title mb-4 text-left">Que es MCP?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MCP es un estandar para que una app de IA se conecte con cosas externas: archivos, bases de datos y herramientas. 
                Hay un servidor que ofrece funciones y datos, y la app de IA se conecta para usarlos.
              </p>
            </div>

            <div>
              <h2 className="section-title mb-4 text-left">Por que importa?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whyMatters.map((item) => (
                  <div key={item.title} className="bg-primary-50 border border-primary-100 rounded-xl p-5">
                    <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Zapier MCP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="card">
            <h2 className="section-title mb-4 text-left">Conecta con Zapier (MCP)</h2>
            <p className="text-gray-700 mb-6">
              Zapier MCP te abre la puerta a mas de 8,000 apps y mas de 30,000 acciones del dia a dia (correo, archivos, ventas, pagos, calendario y mas).
            </p>
            <div className="space-y-3">
              {zapierCategories.map((item) => (
                <div key={item} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Que puedes hacer con MCP?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div key={item.title} className="card space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guided Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="card">
            <h2 className="section-title mb-4 text-left">Demo guiado: primeros pasos</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuracion rapida</h3>
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <div key={step} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6">
              Listo. Ya puedes pedirle a la IA que use esas herramientas.
            </p>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Video: MCP en acciA3n</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qZvhcsx1uQU?si=Q4GpknnALjj8SeIF"
                  title="MCP overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                IntroducciA3n rA�pida a los flujos MCP y cA3mo conectarlos desde Zapier y tus propios servers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Real Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Casos de uso reales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realUseCases.map((useCase) => (
              <div key={useCase.title} className="card space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">{useCase.title}</h3>
                <div className="space-y-2">
                  {useCase.flow.map((step) => (
                    <div key={step} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Consejos de implementacion</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Mejores practicas</h3>
              <ul className="space-y-3">
                {bestPractices.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Casos de uso comunes</h3>
              <ul className="space-y-3">
                {commonCases.map((item) => (
                  <li key={item} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <div className="card">
            <h2 className="section-title mb-4 text-left">Encuentra MCPs</h2>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.url} className="flex items-center space-x-3">
                  <LinkIcon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <a
                    className="text-primary-600 hover:text-primary-700 transition-colors underline"
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.label}: {resource.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Complete button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <button
            onClick={handleMarkComplete}
            className={`btn-primary inline-flex items-center space-x-2 ${
              isCompleted ? 'opacity-50 cursor-default' : ''
            }`}
            aria-disabled={isCompleted}
          >
            <Zap className="w-4 h-4" />
            <span>{isCompleted ? 'Seccion completada' : 'Marcar como completada'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
