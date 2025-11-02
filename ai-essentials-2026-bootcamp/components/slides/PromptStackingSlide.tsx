'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Layers, Target, GitBranch, Sparkles } from 'lucide-react'

interface PromptStackingSlideProps {
  onComplete: (sectionId: string) => void
  onDownload: (templateName: string) => void
  completedSections: string[]
}

const whyItWorks = [
  'El LLM responde a patrones activados por el lenguaje en contexto.',
  'Si el lenguaje es genérico, la respuesta se mantiene amplia.',
  'Si el lenguaje es de nicho, el modelo se enfoca y aumenta la precisión.',
  'Apilar contexto reduce ruido y alucinaciones.'
]

const workflowSteps = [
  { title: 'Tema madre', description: 'Pedí un mapa de conceptos básicos del dominio.' },
  { title: 'Selección', description: 'Quedate con los conceptos que alinean con tu objetivo.' },
  { title: 'Silos', description: 'Convertí cada concepto en un stack con la profundidad que quieras.' },
  { title: 'Drill down', description: 'Profundizá algunos silos y mantené otros en modo superficial.' },
  { title: 'Apilado progresivo', description: 'Todo lo generado alimenta la ventana y estrecha el nicho.' },
  { title: 'Prompt final', description: 'Con el modelo ya enfocado, pedí el output que necesitás.' }
]

const differences = [
  {
    title: 'Prompt Chaining',
    description: 'La salida de A dispara la ejecución de B. Hay dependencia operativa entre pasos.'
  },
  {
    title: 'Context Stacking',
    description: 'La salida de A alimenta el contexto para que B trabaje más enfocado. Es afinación semántica, no dependencia operativa.'
  }
]

const exampleFlow = [
  { label: 'Tema madre', detail: 'Fotografía → pedís conceptos básicos.' },
  { label: 'Selección', detail: 'Cámaras, lentes, equipo, mantenimiento.' },
  { label: 'Stacks', detail: 'En lentes podés ir a 8 mm, marca X, casos de uso; mantenimiento solo necesita una capa breve.' },
  { label: 'Resultado', detail: 'El modelo opera como si estuviera en un thread “lentes 8 mm”, no en “fotografía” genérica.' }
]

const heuristics = [
  'Usá vocabulario de nicho.',
  'Definí la profundidad de cada silo según objetivo y presupuesto de tokens.',
  'No mezcles muchos objetivos en un mismo stack.',
  'Combiná silos recién cuando cada uno esté afinado.',
  'Si falta espacio, priorizá lo más específico y útil para el prompt final.'
]

const stackSheet = [
  'Rol: …',
  'Objetivo: …',
  'Vocabulario de nicho: …',
  'Datos permitidos o referencias: …',
  'Formato de salida esperado: JSON, tabla o bullets con campos obligatorios.',
  'Ejemplos y contra ejemplos: …',
  'Criterios de calidad: claridad, factualidad, tono, utilidad.',
  'Notas de memoria: decisiones previas, IDs de versión.'
]

export default function PromptStackingSlide({ onComplete, onDownload, completedSections }: PromptStackingSlideProps) {
  const isCompleted = completedSections.includes('prompt-stacking')

  const handleMarkComplete = () => {
    if (!isCompleted) {
      onComplete('prompt-stacking')
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="slide-title">Prompt + Context Stacking</h1>
          <p className="slide-subtitle text-primary-600">
            Menos caos, más control: pasos claros y un contexto específico que guía al modelo hacia el nicho correcto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card">
            <h2 className="section-title mb-6 text-left">Definición</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Context Stacking es la teoría de utilizar los tokens de la ventana de conversación del LLM para hacer prompt
              steering usando las palabras adecuadas que activan los vectores correctos dentro de la data de entrenamiento.
              La idea es apilar contexto relevante y progresivo para que, cuando pidas el resultado final, el modelo ya esté
              sintonizado en el subespacio semántico correcto.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Por qué funciona</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <ul className="space-y-3">
                {whyItWorks.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Workflow paso a paso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Diferencia con Prompt Chaining</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {differences.map((item, index) => (
              <div key={item.title} className="card">
                <div className="flex items-center space-x-3 mb-4">
                  {index === 0 ? (
                    <GitBranch className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Layers className="w-6 h-6 text-purple-500" />
                  )}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Ejemplo rápido: fotografía</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card space-y-4">
              {exampleFlow.map((item, index) => (
                <div key={item.label} className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>{item.label}:</strong> {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Multi silo y combinación</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card flex items-start space-x-4">
              <Sparkles className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Primero afiná cada silo por separado. Después combiná silos —por ejemplo, lentes 8 mm con modelaje— para
                obtener poses, distancias y parámetros para un caso concreto. La combinación funciona mejor cuando cada silo
                ya tiene vocabulario y decisiones propias.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Heurísticas prácticas</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <ul className="space-y-3">
                {heuristics.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-16"
        >
          <h2 className="section-title text-center mb-8">Plantilla rápida: Stack Sheet</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <ul className="space-y-3">
                {stackSheet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-center"
        >
          <button
            onClick={handleMarkComplete}
            className={`btn-primary inline-flex items-center space-x-2 ${
              isCompleted ? 'opacity-50 cursor-default' : ''
            }`}
            aria-disabled={isCompleted}
          >
            <span>{isCompleted ? 'Sección completada' : 'Marcar como completada'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
