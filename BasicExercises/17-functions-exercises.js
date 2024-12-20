/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
/**
 *
 * @param {number} number1 Un número
 * @param {number} number2 Un número
 * @returns {number} Sumatoria de dos números
 */
const sumNumbers = (number1, number2) => {
    /* Declarative function */
    return number1 + number2
}

console.log(sumNumbers(100, 36))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

/**
 *
 * @param {array} array Un array de números
 * @returns {number} El mayor número del arreglo
 */
const maxNumber = (array) => {
    let bigNumber = -Infinity
    for (const element of array) {
        if (bigNumber < element) {
            bigNumber = element
        }
    }
    return bigNumber
}

let numbersArray = [100, 35, 87, 16, 777, 56, 91, 1111111, 37, -5, 34, -8973]

console.log(maxNumber(numbersArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
/**
 *
 * @param {string} strValue Una cadena de texto
 * @returns {number} Cantidad de vocales que contiene el string
 */
const vocalTotal = (strValue) => {
    /*Case I*/
    let vocalArray = ["a", "e", "i", "o", "u"]
    let count = 0

    for (let index = 0; index < strValue.length; index++) {
        if (vocalArray.includes(strValue[index])) {
            count++
        }
    }
    return count
}

const vocalTotal1 = (strValue) => {
    /*Case II Switch*/
    let otherWords = []
    let myCountVocals = []
    let count = 0
    let countA = 0
    let countE = 0
    let countI = 0
    let countO = 0
    let countU = 0
    for (let index = 0; index < strValue.length; index++) {
        switch (strValue[index]) {
            case "a":
                count++
                countA++
                break
            case "e":
                count++
                countE++
                break
            case "i":
                count++
                countI++
                break
            case "o":
                count++
                countO++
                break
            case "u":
                count++
                countU++
                break
            default:
                // Letras que no son vocales
                otherWords.push(strValue[index])
        }
    }
    myCountVocals.push(countA, countE, countI, countO, countU)
    return myCountVocals
}

let myString = "This is a very simple text made by codebydoble for Hello Javascript project."

console.log(`The count of vocals is: ${vocalTotal(myString)}`)

/* Destructuring */
let [vocalA, vocalE, vocalI, vocalO, vocalU] = vocalTotal1(myString)

let dataVocals = [
    ["Vocal A", vocalA],
    ["Vocal E", vocalE],
    ["Vocal I", vocalI],
    ["Vocal O", vocalO],
    ["Vocal U", vocalU]
]
console.table(dataVocals)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
/**
 *
 * @param {array} array Un arreglo de cadenas de texto
 * @returns {array} Un arreglo de cadenas de texto en mayúscula
 */
const strUpperCase = (array) => {
    let upperCaseArray = []
    array.forEach((element) => {
        // to STR UP
        upperCaseArray.push(String(element).toUpperCase())
    })
    return upperCaseArray
}

let strArray = [
    "perro",
    "gato",
    "casa",
    "coche",
    "sol",
    "playa",
    "libro",
    "agua",
    "azul",
    "amarillo",
    "verde",
    "rojo",
    "manzana",
    "naranja",
    "banana",
    "computadora",
    "telefono",
    "silla",
    "mesa",
    "puerta",
    "sas"
]

console.log(strUpperCase(strArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
/**
 *
 * @param {number} number Un número se comprobará si es primo o no
 * @returns {boolean} Un boolean
 */
const isPrim = (number) => {
    //The numbers < or = 1 don't prim
    if (number <= 1) {
        return false
    }
    for (let index = 2; index <= Math.sqrt(number); index++) {
        if (index % 2 === 0) {
            //If divide by 2 is not prim
            return false
        }
    }

    // If for return
    return true
}

let testNumber = 4
// Expected not a prim number
console.log(
    `Testing prim number: ${testNumber} \nResult: ${isPrim(testNumber) ? "It's a prim number" : "Not a prim number"}`
)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

/* Sin el método includes de array */
/**
 * Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
 * @param {array} array1 Una arreglo cualquiera
 * @param {array} array2 Una arreglo cualquiera
 * @returns {array} Un arreglo que contiene los elementos comunes entre ambos arreglos
 */
const commonValues = (array1, array2) => {
    let elementsCommon = []

    for (const element of array1) {
        /*if (array2.includes(element)) {  // Version simple con includes
      elementsCommon.push(element)
    }*/
        for (const values of array2) {
            if (element === values) {
                elementsCommon.push(element)
            }
        }
    }
    return elementsCommon
}

let wordsArray = ["manzana", "naranja", "banana", "computadora", "telefono", "silla", "mesa", "puerta"]

let calles = [
    ["sasas"],
    "manzana",
    "Yoandy",
    "PlP",
    "naranja",
    "banana",
    "computadora",
    "telefono",
    "silla",
    "Llueve",
    "mesa",
    "puerta"
]

console.log(commonValues(wordsArray, calles))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

/* High superior orden */

/**
 * Una función que recibe un array de números y devuelva la suma de todos los números pares
 * @param {array} arrayNumbers Un arreglo de números
 * @param {Function} action Una función de comprobación
 * @returns {number} Suma de todos los números pares
 */
function repeat(arrayNumbers, action) {
    for (let index = 0; index < arrayNumbers.length; index++) {
        action(arrayNumbers[index])
    }
}

let numbersInt = [4, 3, 6, 9, 20, 33, 15, 9999, 11, 27, 4]
let totalPar = 0
repeat(numbersInt, (index) => {
    if (index % 2 === 0) {
        totalPar += index
    }
    return totalPar
})

console.log("Par total sum: ", totalPar)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
/**
 * Una función que recibe un array de números y devuelva un nuevo array con cada número elevado al cuadrado
 * @param {array} arreglo Un arreglo de números
 * @returns {array} array con cada número elevado al cuadrado
 */
const numSqrt = (arreglo) => {
    let emptyArray = []
    arreglo.forEach((element) => {
        emptyArray.push(Math.pow(element, 2))
    })
    return emptyArray
}
let arregloNumeros = [24, 13, 86, 1239, 20, 33, 15, 9999, 11, 27, 4]

console.log(numSqrt(arregloNumeros))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

/*Reverse use*/

/**
 * Una función que recibe una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
 * @param {string} str Una cadena de texto
 * @returns {string} Devuelve la misma cadena de texto con las palabras en orden inverso
 */
const inverseText = (str) => {
    let strToArray = String(str).split(" ")
    let finalArray = [] //inverse elements array
    let newStr = "" //inverse element str
    finalArray.push(strToArray.reverse().join(" "))
    for (let index = 0; index < finalArray.length; index++) {
        newStr += finalArray[index]
    }
    return newStr
}

/*Manual reverse */
const inverseText2 = (str) => {
    let strToInvert = str
    let emptyWord = ""
    for (let index = strToInvert.length - 1; index >= 0; index--) {
        emptyWord += strToInvert[index]
    }
    console.log(emptyWord)
    return emptyWord
}

let iaText =
    "Las IA, o inteligencias artificiales, son sistemas informáticos diseñados para realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, la percepción, el razonamiento y la toma de decisiones. Estos sistemas utilizan algoritmos y datos para simular capacidades humanas y mejorar la eficiencia en diversas áreas, como la medicina, la manufactura, el comercio y más."

console.log("Text reversed: " + inverseText(iaText))

console.log("Text reversed manual version: " + inverseText2(iaText))

// 10. Crea una función que calcule el factorial de un número dado

/**
 * Calcula el factorial de un número.
 * @param {number} anumber El número del que se calculará el factorial.
 * @returns {number} El factorial del número.
 */
const factorialExercise = (anumber) => {
    let factor = 1
    if (anumber === 0 || anumber === 1) factor = 1
    if (anumber > 1) {
        factor *= factorialExercise(anumber - 1)
    }
    return factor
}
