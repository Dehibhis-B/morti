 //funcion que retorna un numero aleatorio entre el 1 y 126
export const getRandomDimension = () => {
    //0 => 0.999999 == 0 => 125.99
    return Math.floor(Math.random() * 126) + 1
}
