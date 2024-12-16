/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente

/**
 * Función que utiliza error correctamente Void method
 * @param {string} name
 * @param {string} lastname
 * @param {string} id
 * @param {string} phone
 * @param {number} license
 */
let solicitudConduccion = (name, lastname, id, phone, license) => {
    let idTemp = id
    let ageUser = idTemp.slice(0, 2)

    if (Number(ageUser) < Number(0o6)) {
        console.error(`Dear: ${name}\nYou must to have at least 18 years old`)
    } else {
        console.info(
            `License created\nName: ${name} + ${lastname}\nPhone nuber: ${phone}\nLicencse: ${license}\nId: ${id}\n!!Congratulations`
        )
    }
}

solicitudConduccion("Yoandy", "Doble Herrera", "04012358746", "+15489879987", 23356564458)

// 2. Crea una función que utilice warn correctamente

/**
 * Change password user Void method
 * @param {string} newPass new user password
 */
function changePass(newPass) {
    if (newPass.length < 6) {
        console.warn("Warning error the password is weak")
    } else {
        console.info("Password changed succesful")
    }
}

changePass("12MyP")

// 3. Crea una función que utilice info correctamente

/**
 *
 * @param {array} array A list of number (array)
 */
function contador(array) {
    for (let index = 0; index < array.length; index++) {
        console.info("Info log", array[index], "\n")
    }
}
contador([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// 4. Utiliza table

let trackTable = [
    {athlete: "Yoandy", time: "01:02:00"},
    {athlete: "Endry", time: "01:10:00"},
    {athlete: "Arlety", time: "01:22:00"},
    {athlete: "Nathan", time: "02:02:00"},
    {athlete: "Yerlanys", time: "01:02:00"}
]

console.table(trackTable)
// 5. Utiliza group

console.group()
console.log("Log inside a group - 1")
console.log("Log inside a group - 2")
console.log("Log inside a group - 3")
console.info("Info inside a group - 1")
console.log("Log inside a group - 4")
console.groupEnd()

// 6. Utiliza time

console.time()
/**
 * Función que utiliza error correctamente Void method
 * @param {string} name
 * @param {string} lastname
 * @param {string} id
 * @param {string} phone
 * @param {number} license
 */
let solicitudLicense = (name, lastname, id, phone, license) => {
    let idTemp = id
    let ageUser = idTemp.slice(0, 2)

    if (Number(ageUser) < Number(0o6)) {
        console.error(`Dear: ${name}\nYou must to have at least 18 years old`)
    } else {
        console.info(
            `License created\nName: ${name} + ${lastname}\nPhone nuber: ${phone}\nLicencse: ${license}\nId: ${id}\n!!Congratulations`
        )
    }
}

solicitudLicense("Yoandy", "Doble Herrera", "04012358746", "+15489879987", 23356564458)
console.timeEnd()

// 7. Valida con assert si un número es positivo
let valueNumber = -35
console.assert(valueNumber > 0, "The number is not positive")

// 8. Utiliza count
/**
 * Muestra la suceción de números desde 0 hasta el valor insertado
 * @param {number} value Any number
 */
const multiplyTen = (value) => {
    for (let index = 0; index <= value; index++) {
        console.log(value)
        console.count(value)
    }
}

multiplyTen(2)
console.count(10)

// 9. Utiliza trace

/**
 * Simple function to trace
 * @param {number} params Any number
 * @returns Return a number
 */
function funcPrincipal(params) {
    let resultado = 0
    resultado = funcSecondary(params)
    return resultado
}

/**
 * Trace a function
 * @param {number} params Any number
 * @returns Return a number multiplied by 2
 */
const funcSecondary = (params) => {
    console.trace()
    return params * 2
}

funcPrincipal(5)
// 10. Utiliza clear

/*limpia la consola*/
//console.clear()
