'use client'

import { useState } from 'react'
import * as StellarSdk from '@stellar/stellar-sdk'
// ✅ CORREGIDO: Usar el hook correcto
import { useWalletsKitContext } from '@/contexts/WalletsKitContext' 

export default function SendPayment() {
    // ✅ CORREGIDO: Obtener solo lo necesario
    const { address, signTransaction } = useWalletsKitContext()
    const isConnected = !!address

    const [destination, setDestination] = useState('')
    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)
    const [txHash, setTxHash] = useState('')

    const handleSend = async () => {
        // ✅ CORREGIDO: Solo verificar 'address'
        if (!isConnected) {
            alert('Debes conectar tu wallet para enviar XLM.');
            return;
        }
        
        setLoading(true)
        
        try {
            // 1. Conectar con Stellar Network
            const server = new StellarSdk.Horizon.Server(
                'https://horizon-testnet.stellar.org'
            )
            
            // 2. Cargar la cuenta origen
            const sourceAccount = await server.loadAccount(address!)
            
            // 3. Crear la transacción
            const transaction = new StellarSdk.TransactionBuilder(
                sourceAccount,
                {
                    fee: StellarSdk.BASE_FEE,
                    networkPassphrase: StellarSdk.Networks.TESTNET,
                }
            )
            .addOperation(
                StellarSdk.Operation.payment({
                    destination: destination,
                    asset: StellarSdk.Asset.native(), // XLM
                    amount: amount,
                })
            )
            .setTimeout(180)
            .build()
            
            // 4. Firmar con la wallet del usuario usando signTransaction
            const signedTxXdr = await signTransaction(transaction.toXDR())
            
            const signedTransaction = StellarSdk.TransactionBuilder
                .fromXDR(signedTxXdr, StellarSdk.Networks.TESTNET)
            
            // 5. Enviar a la red
            const result = await server.submitTransaction(signedTransaction)
            
            setTxHash(result.hash)
            alert('¡Pago enviado exitosamente! 🎉')
            
        } catch (error: any) {
            console.error('Error:', error)
            alert(`Error al enviar pago: ${error.message || error.toString()}`)
        } finally {
            setLoading(false)
        }
    }

    // El resto del JSX (la interfaz visual) es igual al ejemplo

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
                Enviar XLM de Prueba 💸
            </h2>
            
            {!isConnected ? (
                <p className="text-red-500">Conecta tu wallet para usar esta función.</p>
            ) : (
                <div className="space-y-4">
                    {/* ... (inputs, etc. - COPIAR DEL EJEMPLO) ... */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Destinatario
                        </label>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="GXXX..."
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Monto (XLM)
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="5"
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    
                    <button
                        onClick={handleSend}
                        disabled={loading || !destination || !amount}
                        className="w-full bg-blue-600 text-white py-2 rounded
                                hover:bg-blue-700 disabled:bg-gray-300"
                    >
                        {loading ? 'Enviando...' : 'Enviar Pago 🦈'}
                    </button>
                    
                    {txHash && (
                        <div className="mt-4 p-3 bg-green-50 rounded">
                            <p className="text-sm text-green-800">
                                ✅ Transacción exitosa!
                            </p>
                            <a
                                href={`https://stellar.expert/explorer/testnet/tx/${txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm break-all"
                            >
                                Ver en explorer
                            </a>
                        </div>
                    )}
                </div> 
            )}
        </div>
    )
}