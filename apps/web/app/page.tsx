// Página principal del dashboard con las 3 pantallas
'use client'

import { useState } from 'react'
import { useWalletsKitContext } from '@/contexts/WalletsKitContext'
import * as StellarSdk from '@stellar/stellar-sdk'
import { Wallet, Target, TrendingUp, ArrowLeft, Copy, Check, Plus } from 'lucide-react'
import SendPayment from '@/components/SendPayment'

// Tipos
interface Meta {
  id: number
  nombre: string
  montoObjetivo: number
  montoActual: number
  transacciones: Transaccion[]
}

interface Transaccion {
  fecha: string
  monto: number
  hash: string
}

// Datos mock iniciales (luego puedes guardarlos en localStorage o backend)
const METAS_INICIALES: Meta[] = []

export default function Dashboard() {
  const { address, openModalAndConnect, signTransaction } = useWalletsKitContext()
  const isConnected = !!address
  const [pantalla, setPantalla] = useState<'home' | 'aporte' | 'confirmacion'>('home')
  const [metas, setMetas] = useState<Meta[]>(METAS_INICIALES)
  const [metaSeleccionada, setMetaSeleccionada] = useState<Meta | null>(null)
  const [formulario, setFormulario] = useState({
    nombreMeta: '',
    montoObjetivo: '',
    montoAporte: ''
  })
  const [ultimaTransaccion, setUltimaTransaccion] = useState<Transaccion & { metaNombre: string } | null>(null)
  const [loading, setLoading] = useState(false)

  // DIRECCIÓN DESTINO: Aquí irían tus aportes (puedes usar tu propia wallet o crear una cuenta para el proyecto)
  const CUENTA_AHORRO = 'GABCXCMLQBEI63K2XII3HCMXAFMQZTE26N4NJSKDDPQ33ZOJPV7WLBHK' // ⚠️ Tu cuenta destino

  // Handler: Crear nueva meta
  const handleCrearMeta = () => {
    setPantalla('aporte')
    setMetaSeleccionada(null)
    setFormulario({ ...formulario, montoAporte: '' })
  }

  // Handler: Aportar a meta existente
  const handleAportarMeta = (meta: Meta) => {
    setPantalla('aporte')
    setMetaSeleccionada(meta)
    setFormulario({ 
      nombreMeta: meta.nombre,
      montoObjetivo: meta.montoObjetivo.toString(),
      montoAporte: '' 
    })
  }

  // Handler: Confirmar aporte (TRANSACCIÓN REAL EN STELLAR)
  const handleConfirmarAporte = async () => {
    if (!address)  {
      alert('Debes conectar tu wallet primero')
      return
    }

    // Validaciones
    const monto = parseFloat(formulario.montoAporte)
    if (!monto || monto <= 0) {
      alert('Ingresa un monto válido')
      return
    }

    if (!metaSeleccionada && (!formulario.nombreMeta || !formulario.montoObjetivo)) {
      alert('Completa todos los campos')
      return
    }

    setLoading(true)

    try {
      // 1. Conectar con Stellar Testnet
      const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org')
      
      // 2. Cargar cuenta origen
      const sourceAccount = await server.loadAccount(address)
      
      // 3. Crear transacción de pago
      const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination: CUENTA_AHORRO, // Cuenta destino de ahorro
            asset: StellarSdk.Asset.native(), // XLM (puedes usar USDC después)
            amount: monto.toString(),
          })
        )
        .addMemo(StellarSdk.Memo.text(
          metaSeleccionada 
            ? `Aporte: ${metaSeleccionada.nombre}` 
            : `Nueva meta: ${formulario.nombreMeta}`
        ))
        .setTimeout(180)
        .build()
      
      // 4. Firmar con wallet del usuario
      const signedTxXdr = await signTransaction(transaction.toXDR())
      const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
        signedTxXdr, 
        StellarSdk.Networks.TESTNET
      )
      
      // 5. Enviar a la red
      const result = await server.submitTransaction(signedTransaction)
      
      // 6. Guardar transacción
      const fecha = new Date().toISOString().split('T')[0]
      const nuevaTransaccion = {
        fecha,
        monto,
        hash: result.hash,
        metaNombre: metaSeleccionada ? metaSeleccionada.nombre : formulario.nombreMeta
      }

      // 7. Actualizar estado
      if (!metaSeleccionada) {
        // Crear nueva meta
        const nuevaMeta: Meta = {
          id: Date.now(),
          nombre: formulario.nombreMeta,
          montoObjetivo: parseFloat(formulario.montoObjetivo),
          montoActual: monto,
          transacciones: [nuevaTransaccion]
        }
        setMetas([...metas, nuevaMeta])
      } else {
        // Actualizar meta existente
        setMetas(metas.map(m => 
          m.id === metaSeleccionada.id 
            ? { 
                ...m, 
                montoActual: m.montoActual + monto,
                transacciones: [...m.transacciones, nuevaTransaccion]
              }
            : m
        ))
      }

      setUltimaTransaccion(nuevaTransaccion)
      setPantalla('confirmacion')

    } catch (error: any) {
      console.error('Error en transacción:', error)
      alert(`Error: ${error.message || 'No se pudo procesar el aporte'}`)
    } finally {
      setLoading(false)
    }
  }

  // Handler: Volver al home
  const handleVolverHome = () => {
    setPantalla('home')
    setMetaSeleccionada(null)
    setFormulario({ nombreMeta: '', montoObjetivo: '', montoAporte: '' })
  }

  // Si no hay wallet conectada
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <Wallet className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Bienvenida a tu App de Ahorro Tiburona 🦈
          </h2>
          <p className="text-gray-600 mb-6">
            Conecta tu wallet para empezar a crear metas de ahorro transparentes con blockchain Stellar
          </p>
          <button
            onClick={openModalAndConnect}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Conectar Wallet
          </button>
        </div>
      </div>
    )
  }

  // Renderizado condicional de pantallas
  if (pantalla === 'home') {
    return (
      <div className="flex flex-col min-h-screen"> 
        {/* 1. Pantalla principal de metas */}
        <PantallaHome 
         metas={metas}
         onCrearMeta={handleCrearMeta}
         onAportarMeta={handleAportarMeta}
         walletAddress={address}
        />
        
        {/* 2. Componente de prueba de pago */}
        <div className="p-6 max-w-4xl mx-auto w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-t pt-4 mt-6">
                [PRUEBA RÁPIDA DE PAGO]
            </h2>
            <SendPayment />
        </div>
      </div>
    )
  }

  if (pantalla === 'aporte') {
    return (
      <PantallaAporte 
        metaSeleccionada={metaSeleccionada}
        formulario={formulario}
        setFormulario={setFormulario}
        onConfirmar={handleConfirmarAporte}
        onVolver={handleVolverHome}
        loading={loading}
      />
    )
  }

  if (pantalla === 'confirmacion' && ultimaTransaccion) {
    return (
      <PantallaConfirmacion 
        transaccion={ultimaTransaccion}
        onVolverHome={handleVolverHome}
      />
    )
  }

  return null
}


function PantallaHome({ 
  metas, 
  onCrearMeta, 
  onAportarMeta,
  walletAddress 
}: { 
  metas: Meta[]
  onCrearMeta: () => void
  onAportarMeta: (meta: Meta) => void
  walletAddress: string
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Mis Metas de Ahorro</h1>
                <p className="text-sm text-gray-500">
                  {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">Ahorro transparente con blockchain Stellar 🦈</p>
        </div>

        {/* Lista de metas */}
        <div className="space-y-4 mb-6">
          {metas.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Aún no tienes metas de ahorro</p>
              <button
                onClick={onCrearMeta}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Crear mi primera meta
              </button>
            </div>
          ) : (
            metas.map(meta => (
              <MetaCard key={meta.id} meta={meta} onAportar={onAportarMeta} />
            ))
          )}
        </div>

        {/* Botón flotante */}
        {metas.length > 0 && (
          <button
            onClick={onCrearMeta}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 hover:scale-110 transition-transform"
          >
            <Plus className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  )
}

// Componente: Card de meta
function MetaCard({ meta, onAportar }: { meta: Meta; onAportar: (meta: Meta) => void }) {
  const progreso = (meta.montoActual / meta.montoObjetivo) * 100

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{meta.nombre}</h3>
          <p className="text-gray-500 text-sm">{meta.transacciones.length} aportes en blockchain</p>
        </div>
        <Target className="w-6 h-6 text-indigo-600" />
      </div>

      {/* Progreso */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Progreso</span>
          <span className="font-semibold text-indigo-600">{progreso.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
            style={{ width: `${Math.min(progreso, 100)}%` }}
          />
        </div>
      </div>

      {/* Montos */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-sm text-gray-500">Ahorrado</p>
          <p className="text-2xl font-bold text-gray-800">{meta.montoActual.toFixed(2)} XLM</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Objetivo</p>
          <p className="text-xl font-semibold text-gray-600">{meta.montoObjetivo} XLM</p>
        </div>
      </div>

      <button
        onClick={() => onAportar(meta)}
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
      >
        <TrendingUp className="w-5 h-5" />
        Realizar aporte
      </button>
    </div>
  )
}


// COMPONENTE: PANTALLA 2 - APORTE
function PantallaAporte({ 
  metaSeleccionada, 
  formulario, 
  setFormulario, 
  onConfirmar, 
  onVolver,
  loading 
}: any) {
  const esNuevaMeta = !metaSeleccionada

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onVolver}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {esNuevaMeta ? '✨ Crear nueva meta' : `💰 Aportar a: ${metaSeleccionada.nombre}`}
          </h2>

          <div className="space-y-6">
            {esNuevaMeta && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la meta
                  </label>
                  <input
                    type="text"
                    value={formulario.nombreMeta}
                    onChange={(e) => setFormulario({ ...formulario, nombreMeta: e.target.value })}
                    placeholder="Ej: Vacaciones en la playa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto objetivo (XLM)
                  </label>
                  <input
                    type="number"
                    value={formulario.montoObjetivo}
                    onChange={(e) => setFormulario({ ...formulario, montoObjetivo: e.target.value })}
                    placeholder="100"
                    min="1"
                    step="0.01"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto a aportar (XLM)
              </label>
              <input
                type="number"
                value={formulario.montoAporte}
                onChange={(e) => setFormulario({ ...formulario, montoAporte: e.target.value })}
                placeholder="10"
                min="0.01"
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-2xl font-semibold"
              />
            </div>

            {formulario.montoAporte && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="text-sm text-indigo-800">
                  📊 Aportarás <span className="font-bold">{formulario.montoAporte} XLM</span>
                  {esNuevaMeta && formulario.nombreMeta && (
                    <> a tu nueva meta <span className="font-bold">"{formulario.nombreMeta}"</span></>
                  )}
                </p>
              </div>
            )}

            <button
              onClick={onConfirmar}
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg disabled:opacity-50"
            >
              {loading ? 'Procesando transacción...' : (esNuevaMeta ? '🚀 Crear y aportar' : '💸 Confirmar aporte')}
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              🔒 Se creará una transacción REAL en Stellar Testnet con comisión de $0.00001
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


// COMPONENTE: PANTALLA 3 - CONFIRMACIÓN
function PantallaConfirmacion({ transaccion, onVolverHome }: any) {
  const [copiado, setCopiado] = useState(false)

  const copiarHash = () => {
    navigator.clipboard.writeText(transaccion.hash)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-green-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            ¡Aporte registrado en blockchain! 🎉
          </h2>
          <p className="text-gray-600 mb-8">Tu transacción está confirmada en Stellar</p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-4 text-left">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Meta:</span>
              <span className="text-sm font-bold text-gray-800">{transaccion.metaNombre}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Monto:</span>
              <span className="text-sm font-bold text-gray-800">{transaccion.monto} XLM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Fecha:</span>
              <span className="text-sm text-gray-800">{transaccion.fecha}</span>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Hash de transacción:</p>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <code className="text-xs text-gray-600 flex-1 overflow-x-auto">{transaccion.hash}</code>
                <button onClick={copiarHash} className="p-2 hover:bg-gray-100 rounded">
                  {copiado ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <a
              href={`https://stellar.expert/explorer/testnet/tx/${transaccion.hash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-indigo-50 text-indigo-700 py-3 rounded-lg font-medium hover:bg-indigo-100"
            >
              🔍 Ver en Stellar Expert
            </a>
          </div>

          <button
            onClick={onVolverHome}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Ver mi progreso
          </button>
        </div>
      </div>
    </div>
  )
}