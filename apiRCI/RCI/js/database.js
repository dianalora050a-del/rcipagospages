// ================================================================
// 📁 js/database.js - BASE DE DATOS SIMULADA EN JAVASCRIPT
// ================================================================

/**
 * 🗄️ CRÉDITOS DISPONIBLES
 * 
 * Aquí se almacenan todos los créditos como si fuera una base de datos.
 * Puedes agregar, modificar o eliminar créditos libremente.
 * 
 * 📌 Cómo agregar un nuevo crédito:
 *    'NUMERO_CREDITO': {
 *        creditNumber: 'NUMERO_CREDITO',
 *        clientName: 'NOMBRE',
 *        clientLastName: 'APELLIDO',
 *        email: 'EMAIL',
 *        documentNumber: 'DOCUMENTO',
 *        balance: 123456.78,
 *        minPayment: 123456.78,
 *        nextPaymentDate: 'DD/MM/YYYY',
 *        description: 'DESCRIPCIÓN'
 *    }
 */
const CREDITOS_DB = {
    // ============================================================
    // CRÉDITO 1: Deicy del Carmen Camargo Buelvas
    // ============================================================
    '00800013545': {
        creditNumber: '00800013545',
        clientName: 'DEICY DEL CARMEN',
        clientLastName: 'CAMARGO BUELVAS',
        email: 'camargodeisy4@gmail.com',
        documentNumber: '32703085',
        balance: 903564.28,
        minPayment: 903564.28,
        nextPaymentDate: '30/08/2026',
        description: 'Pago credito RCI'
    },
    
    // ============================================================
    // CRÉDITO 2: Juan Pablo Pérez Gómez
    // ============================================================
    '00800013546': {
        creditNumber: '00800013546',
        clientName: 'JUAN PABLO',
        clientLastName: 'PEREZ GOMEZ',
        email: 'juan.perez@gmail.com',
        documentNumber: '45213658',
        balance: 1250000.00,
        minPayment: 250000.00,
        nextPaymentDate: '15/09/2026',
        description: 'Pago credito RCI'
    },
    
    // ============================================================
    // CRÉDITO 3: María Fernanda Rodríguez Díaz
    // ============================================================
    '00800013547': {
        creditNumber: '00800013547',
        clientName: 'MARIA FERNANDA',
        clientLastName: 'RODRIGUEZ DIAZ',
        email: 'maria.rodriguez@gmail.com',
        documentNumber: '78965412',
        balance: 560000.75,
        minPayment: 112000.15,
        nextPaymentDate: '20/10/2026',
        description: 'Pago credito RCI'
    },

    // ============================================================
    // CRÉDITO 4: Carlos Andrés Martínez López (ejemplo adicional)
    // ============================================================
    '00800013548': {
        creditNumber: '00800013548',
        clientName: 'CARLOS ANDRÉS',
        clientLastName: 'MARTÍNEZ LÓPEZ',
        email: 'carlos.martinez@gmail.com',
        documentNumber: '12345678',
        balance: 340000.50,
        minPayment: 68000.10,
        nextPaymentDate: '05/11/2026',
        description: 'Pago credito RCI'
    }
};

// ================================================================
// 📌 FUNCIONES PARA MANEJAR LA BASE DE DATOS
// ================================================================

/**
 * Busca un crédito por su número
 * @param {string} numeroCredito - Número del crédito a buscar
 * @returns {object} - Resultado de la búsqueda
 */
function buscarCredito(numeroCredito) {
    // Limpiar el número (quitar espacios)
    const numeroLimpio = numeroCredito.trim();
    
    // Buscar en la base de datos
    const credito = CREDITOS_DB[numeroLimpio];
    
    if (credito) {
        return {
            success: true,
            userInfo: credito
        };
    } else {
        return {
            success: false,
            error: '❌ Número de crédito no encontrado'
        };
    }
}

/**
 * Obtiene todos los números de crédito disponibles
 * @returns {string[]} - Lista de números de crédito
 */
function obtenerTodosLosCreditos() {
    return Object.keys(CREDITOS_DB);
}

/**
 * Agrega un nuevo crédito a la base de datos
 * @param {object} credito - Datos del nuevo crédito
 * @returns {boolean} - true si se agregó correctamente
 */
function agregarCredito(credito) {
    if (!credito.creditNumber) {
        console.error('❌ El crédito debe tener un número');
        return false;
    }
    
    if (CREDITOS_DB[credito.creditNumber]) {
        console.warn('⚠️ El crédito ya existe, se sobrescribirá');
    }
    
    CREDITOS_DB[credito.creditNumber] = credito;
    console.log(`✅ Crédito ${credito.creditNumber} agregado correctamente`);
    return true;
}

/**
 * Elimina un crédito de la base de datos
 * @param {string} numeroCredito - Número del crédito a eliminar
 * @returns {boolean} - true si se eliminó correctamente
 */
function eliminarCredito(numeroCredito) {
    if (!CREDITOS_DB[numeroCredito]) {
        console.error('❌ Crédito no encontrado');
        return false;
    }
    
    delete CREDITOS_DB[numeroCredito];
    console.log(`✅ Crédito ${numeroCredito} eliminado correctamente`);
    return true;
}

/**
 * Muestra todos los créditos en la consola (para depuración)
 */
function mostrarCreditos() {
    console.log('📋 ===== CRÉDITOS DISPONIBLES =====');
    Object.keys(CREDITOS_DB).forEach(numero => {
        const c = CREDITOS_DB[numero];
        console.log(`  ${numero}: ${c.clientName} ${c.clientLastName} - $${c.balance.toLocaleString()}`);
    });
    console.log('📋 ================================');
    console.log(`   Total: ${Object.keys(CREDITOS_DB).length} créditos`);
}

// ================================================================
// 📌 AUTO-EJECUCIÓN: Mostrar créditos en consola al cargar
// ================================================================
console.log('🗄️ Base de datos de créditos cargada correctamente');
mostrarCreditos();

// ================================================================
// 📌 EXPORTAR FUNCIONES (para usar en otros archivos)
// ================================================================
// Como estamos en un navegador, las funciones están disponibles globalmente