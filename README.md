# Stellar Startup Template - 🦈 App de Ahorro Tiburona

## 📋 Descripción del Proyecto
Aplicación de ahorro transparente construida sobre blockchain Stellar, que permite a usuarios crear metas de ahorro y realizar aportes mediante transacciones descentralizadas.

---

## 🎯 Estructura del Taskflow (3 Pantallas Esenciales)

### **Pantalla 1: Home - Lista de Metas** 
`apps/web/app/page.tsx` - Componente `PantallaHome`

**Funcionalidad:**
- Visualización de todas las metas de ahorro creadas
- Tarjetas con barra de progreso visual y montos actuales vs. objetivo
- Botón flotante para crear nuevas metas
- Indicador de wallet conectada (address truncada)

**Elementos clave:**
- Estado inicial cuando no hay metas (empty state)
- Diseño con gradiente cálido (`from-rose-50 to-amber-100`)
- Componente `MetaCard` reutilizable

---

### **Pantalla 2: Aporte - Formulario de Transacción**
`apps/web/app/page.tsx` - Componente `PantallaAporte`

**Funcionalidad:**
- Formulario dual: crear nueva meta o aportar a meta existente
- Validación de montos en tiempo real
- Preview del aporte antes de confirmar
- Loading state durante procesamiento blockchain

**Elementos clave:**
- Inputs para: nombre de meta, monto objetivo, monto a aportar
- Botón deshabilitado durante transacción
- Mensaje de fee transparente ($0.00001 XLM)

---

### **Pantalla 3: Confirmación - Estado Exitoso**
`apps/web/app/page.tsx` - Componente `PantallaConfirmacion`

**Funcionalidad:**
- Confirmación visual de transacción exitosa
- Hash de transacción completo con botón de copiado
- Link directo a Stellar Expert (explorer blockchain)
- Navegación para volver al home o realizar más aportes

**Elementos clave:**
- Diseño con gradiente de éxito (`from-green-50 to-emerald-100`)
- Datos de la transacción: meta, monto, fecha, hash
- URL del explorer: `https://stellar.expert/explorer/testnet/tx/{hash}`

---

## 🔧 Modificaciones Principales al Template Base

### 1. **Contexto de Wallets: Fix del "Flasheo" de Pantalla**
**Archivo:** `apps/web/contexts/WalletsKitContext.tsx`

**Problema:** 
La pantalla de bienvenida desaparecía instantáneamente si había una sesión previa en localStorage, causando una mala experiencia de usuario.

**Solución implementada:**
```typescript
// Se añadió estado de carga
const [isLoadingKit, setIsLoadingKit] = useState(true)

// Exportado en el contexto
export type WalletsKitContextValue = {
  // ... otras propiedades
  isLoadingKit: boolean;
}

// Lógica de auto-conexión mejorada
useEffect(() => {
  if (!kit) return;
  setIsLoadingKit(true);
  try {
    const lastWallet = localStorage.getItem("stellar.wallet.selected");
    if (lastWallet) {
      // ... lógica de reconexión
    }
  } finally {
    setIsLoadingKit(false);
  }
}, [kit, setWallet, refreshAddress]);
```

**En page.tsx:**
```typescript
// Renderizado condicional mejorado
if (!isConnected && !isLoadingKit) {
  return <PantallaBienvenida />
}
```

---

### 2. **API del Contexto: Corrección de Nombres**
**Archivo:** `apps/web/app/page.tsx`

**Problema:**
El código usaba funciones obsoletas o inexistentes del contexto (`useWalletsKit`, `connect`, `connector`).

**Solución:**
```typescript
// ❌ Código original (incorrecto)
import { useWalletsKit } from '@/contexts/WalletsKitContext'
const { address, isConnected, connector, connect } = useWalletsKit()
await connector.signTransaction(xdr)

// ✅ Código corregido
import { useWalletsKitContext } from '@/contexts/WalletsKitContext'
const { address, openModalAndConnect, signTransaction } = useWalletsKitContext()
const isConnected = !!address
await signTransaction(xdr)
```

**Tabla de reemplazos:**
| Obsoleto | Correcto |
|----------|----------|
| `useWalletsKit()` | `useWalletsKitContext()` |
| `connect` | `openModalAndConnect` |
| `isConnected` | Derivado: `!!address` |
| `connector.signTransaction()` | `signTransaction()` |

---

### 3. **Limitación del Memo en Transacciones**
**Archivo:** `apps/web/app/page.tsx` - Función `handleConfirmarAporte`

**Problema:**
Error crítico: `"Expects string, array or buffer, max 28 bytes"`. El nombre de la meta excedía el límite estricto de Stellar.

**Solución implementada:**
```typescript
// Truncamiento de memo a 28 bytes
.addMemo(StellarSdk.Memo.text(
  metaSeleccionada 
    ? `Aporte: ${metaSeleccionada.nombre}`.substring(0, 28)
    : `Nueva meta: ${formulario.nombreMeta}`.substring(0, 28)
))
```

**Lección aprendida:** Stellar tiene límites estrictos en los memos. Siempre validar longitud antes de construir transacciones.

---

## 🚨 Errores Críticos Resueltos

### **Error 1: Librería de íconos no instalada**
```bash
Cannot find module 'lucide-react' or its corresponding type declarations.
```

**Solución:**
```bash
npm install lucide-react
```

---

### **Error 2: Transacción fallida por Memo excedido**
```
Stellar SDK Error: Memo text exceeds 28 bytes
```

**Causa:** Los nombres de metas largas generaban memos superiores a 28 bytes.

**Solución:** Implementación de `.substring(0, 28)` en todos los memos.

---

### **Error 3: Referencia a propiedades inexistentes del contexto**
```typescript
Cannot find name 'connector'
Cannot find name 'connect'
```

**Causa:** Uso de API obsoleta del contexto de wallets.

**Solución:** Actualización completa a `useWalletsKitContext()` con sus propiedades correctas.

---

## 📦 Dependencias del Proyecto

```json
{
  "lucide-react": "^0.263.1",
  "@stellar/stellar-sdk": "latest",
  "@creit.tech/stellar-wallets-kit": "latest"
}
```

**Instalación:**
```bash
npm install lucide-react @stellar/stellar-sdk @creit.tech/stellar-wallets-kit
```

---

## ⚙️ Configuración del Proyecto

### **Red de Stellar**
El proyecto usa **Stellar Testnet** por defecto:

```typescript
// Servidor Horizon
const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org')

// Network passphrase
networkPassphrase: StellarSdk.Networks.TESTNET
```

### **Cuenta de Destino**
Define tu cuenta destino para recibir aportes:

```typescript
const CUENTA_AHORRO = 'GABCXCMLQBEI63K2XII3HCMXAFMQZTE26N4NJSKDDPQ33ZOJPV7WLBHK'
```

---

## 🎨 Mejoras de UX Implementadas

### **Paleta de Colores Cálida**
Se reemplazó la paleta técnica por colores más amigables alineados con la proto-persona no-técnica:

```typescript
// ❌ Antes: Paleta fría y técnica
className="bg-gradient-to-br from-blue-50 to-indigo-100"

// ✅ Después: Paleta cálida y accesible
className="bg-gradient-to-br from-rose-50 to-amber-100"
```

**Pantallas afectadas:**
- Pantalla de bienvenida (no conectado)
- Pantalla Home (lista de metas)

---

## 🔄 Flujo de Transacción Stellar (5 Pasos)

Implementado en `handleConfirmarAporte`:

```typescript
// 1. Conectar con Horizon Server
const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org')

// 2. Cargar cuenta origen (usuario)
const sourceAccount = await server.loadAccount(address)

// 3. Construir transacción
const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
  fee: StellarSdk.BASE_FEE,
  networkPassphrase: StellarSdk.Networks.TESTNET,
})
  .addOperation(StellarSdk.Operation.payment({
    destination: CUENTA_AHORRO,
    asset: StellarSdk.Asset.native(),
    amount: monto.toString(),
  }))
  .addMemo(StellarSdk.Memo.text(`Meta: ${nombre}`.substring(0, 28)))
  .setTimeout(180)
  .build()

// 4. Firmar transacción con wallet del usuario
const signedTxXdr = await signTransaction(transaction.toXDR())
const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
  signedTxXdr, 
  StellarSdk.Networks.TESTNET
)

// 5. Enviar a la red
const result = await server.submitTransaction(signedTransaction)
```

---

## 🐛 Troubleshooting

### **Error: Listener async response**
```
Uncaught (in promise) Error: A listener indicated an asynchronous response...
```
**Causa:** Extensiones de wallet (Freighter) comunicándose de forma asíncrona.  
**Solución:** Ignorar si la wallet se conecta correctamente. Es comportamiento normal.

---

### **Error: Account not found**
```
Error: Account not found
```
**Solución:** Fondear la cuenta en [Friendbot](https://friendbot.stellar.org)
```bash
# Pega tu CUENTA_AHORRO y solicita XLM
```

---

### **Error: Artifact con imports no soportados**
```
@/contexts/WalletsKitContext
@stellar/stellar-sdk
```
**Solución:** Este código es para tu proyecto local, no para Claude.  
Copiar el código completo en `apps/web/app/dashboard/page.tsx`

---

### **Error de TypeScript con el import**

**Opción 1:** Reiniciar servidor TS
```
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

**Opción 2:** Limpiar caché
```bash
rm -rf .next
rm -rf node_modules/.cache
npm run dev
```

**Opción 3:** Modificar export a default
En `WalletsKitContext.tsx`:
```typescript
export default function useWalletsKitContext() { ... }
```

En `page.tsx`:
```typescript
import useWalletsKitContext from '@/contexts/WalletsKitContext'
```

---

## ✅ Checklist de Validación Pre-Deploy

Antes de probar la aplicación:

- [ ] `lucide-react` instalado
- [ ] Import correcto: `useWalletsKitContext`
- [ ] No hay referencias a `connector` o `connect`
- [ ] Servidor dev sin errores de TypeScript
- [ ] Wallet de prueba con fondos en Testnet
- [ ] Cuenta destino (`CUENTA_AHORRO`) configurada
- [ ] Network configurada en TESTNET

---

## 📊 Arquitectura de Estados

### **Estados de Pantalla**
```typescript
type Pantalla = 'home' | 'aporte' | 'confirmacion'
```

### **Modos de Aporte**
- **Nueva meta:** Requiere `nombreMeta` + `montoObjetivo` + `montoAporte`
- **Aporte a meta existente:** Solo requiere `montoAporte`

### **Estructura de Datos**
```typescript
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
  metaNombre: string
}
```
---

## 📝 Notas Importantes

- ⚠️ Las transacciones son **reales** en Stellar Testnet
- 💾 Los datos se guardan solo en memoria (implementar localStorage/backend después)
- 💰 Comisión por transacción: **$0.00001 XLM**
- ⏱️ Timeout de transacciones: **180 segundos**
- 🔗 Explorer: `https://stellar.expert/explorer/testnet/`

---

**Desarrollado para Codigo Futura - Buen Dia Builder**
