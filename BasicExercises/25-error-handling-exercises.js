/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch

try {
    let a = [1, 2, 3, 4, 5, 6]
    console.log(a[0] + Variable)
} catch (error) {
    console.log("Ejercicio 1: ", error.message)
}

/*Otra vía I */
let mouseObj

try {
    console.log(mouseObj.info)
    console.warn("Esto no se visualiza por error de la línea anterior")
} catch (error) {
    console.error("Ejercicio 1a: Error operación no disponible")
}

// 2. Captura una excepción utilizando try-catch y finally
;("use strict")
try {
    ;("Yoandy")
    for (index = 0; index < array.length; index++) {
        const element = array[index]
    }
} catch (error) {
    console.error(error.message)
} finally {
    console.info("This execute no matter what")
}

// 3. Lanza una excepción genérica

/**
 *
 * @param {number} number1 Actual amount for an account
 * @param {number} number2 Previous amount for an account
 * @returns Returns the new amount
 */
let ganancia = (number1, number2) => {
    if (typeof number1 !== "number") throw new TypeError(`The value inserted is not a number: ${number1}`)
    if (typeof number2 !== "number") throw new TypeError(`The value inserted is not a number: ${number2}`)
    return number1 - number2
}

try {
    console.log(ganancia("Error", 2365))
} catch (error) {
    console.error("Ejercicio 3: Lanzando excepcion personalizada", error.message)
}

// 4. Crea una excepción personalizada

class shortNameError extends Error {
    #nameUser
    constructor(message, nameUser) {
        super(message)
        this.#nameUser = nameUser
    }

    get nameUser() {
        return this.#nameUser
    }
    smallName() {
        console.info("Name: ", this.nameUser)
    }
}

// 5. Lanza una excepción personalizada

/**
 *
 * @param {string} name Name user
 */
let createUser = (name) => {
    if (name.length < 3) {
        throw new shortNameError("User name to small", name)
    } else {
        console.info("User created succesful")
    }
}

try {
    let userName = "cy"
    createUser(userName)
} catch (error) {
    if (error instanceof shortNameError) {
        console.error("Error de tamaño de usuario pequeño:", error.message)
        error.smallName()
    }
}

// 6. Lanza varias excepciones según una lógica definida

class smallNumberError extends Error {
    constructor(message, number1, number2) {
        super(message)
        this.number1 = number1
        this.number2 = number2
    }

    infoError() {
        console.info("Number 1: ", this.number1 + "\nNumber 2: ", this.number2)
    }
}

let calculadoraYDH = (firstValue, secondValue) => {
    if (typeof firstValue !== "number") throw new TypeError(`Type error, this is not a number value: ${firstValue}`)
    if (typeof secondValue !== "number") throw new TypeError(`Type error, this is not a number value: ${secondValue}`)
    if (!Number.isInteger(firstValue)) throw new Error(`Generic error: this is not an integer number ${firstValue}`)
    if (!Number.isInteger(secondValue)) throw new Error(`Generic error: this is not an integer number ${secondValue}`)
    if (firstValue > 99 && secondValue > 99) {
        return firstValue + secondValue
    } else {
        throw new smallNumberError("Error personalizado: Numeros menores de 100 no permitido", firstValue, secondValue)
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log("\n Ejercicio 6")
    console.log(calculadoraYDH(70, 45))
} catch (error) {
    switch (error) {
        case error instanceof TypeError:
            console.error(`Capturo error de tipo \n ${error.message}`)
            break
        case error instanceof Error:
            console.error(`Capturo error generico \n ${error.message}`)
            break
        default:
            console.error(`Capturo error personalizado \n${error.message}`)
            error.infoError()
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

//let toFloat = () => {}
console.log("\nEjercicio 8")

//Error NaN
class NaNError extends Error {
    constructor(message, stringValue) {
        super(message)
        this.stringValue = stringValue
    }

    printNaN() {
        console.warn("NaN value: ", this.stringValue)
    }
}

/**
 *
 * @param {string} array An array that contains floating-point numbers
 * @returns Returns a floating-point array
 */
let toFloat = (array) => {
    let floatArray = []
    for (let index = 0; index < array.length; index++) {
        if (!isNaN(parseFloat(array[index]))) {
            floatArray.push(parseFloat(array[index]))
        } else {
            throw new NaNError("Error the value is not a number\n", array[index])
        }
    }
    return floatArray
}
/*Array con errores*/
let arrayValue = ["1236", 8791, true, 12121212n, 98973, "Yoandy"]

/*Array sin errores*/
let arrayValue1 = ["1236", "8791", "12121212", "98973"]

/*Ejecucion del programa*/
try {
    let conversionFloat = toFloat(arrayValue)
    console.log(conversionFloat)
} catch (error) {
    if (error instanceof NaNError) {
        console.log(error.message)
        error.printNaN()
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class propertyError extends Error {
    constructor(message, property) {
        super(message)
        this.property = property
    }

    infoProperty() {
        return this.property
    }
}

/**
 * 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
 * @param {object} obj Any object
 * @param {string} property Property to search in the object
 * @returns Returns true if the object has the property searched and false otherwise
 */
let propTest = (obj, property) => {
    let result = false
    for (const key in obj) {
        if (key === property) {
            result = true
        } else if (typeof obj[key] == "object") {
            for (const keyRecursive in obj[key]) {
                if (keyRecursive === property) {
                    result = true
                }
            }
        }
    }
    if (!result) {
        throw new propertyError("Error personalizado: property not found.", property)
    } else {
        return result
    }
}

let perro = {
    name: "Sultan",
    age: 3,
    color: "black",
    weight: 23,
    casa: {name: "Big Blue", color: "white", size: 45},
    dueño: {address: "Speed way St."}
}
//console.log(typeof perro["casa"])

try {
    let foundproperty = propTest(perro, "PropiedadIncorrecta")
    console.log(foundproperty)
} catch (error) {
    if (error instanceof propertyError) {
        console.log(error.message, "\nThe following property is not in the object: ", error.infoProperty())
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
