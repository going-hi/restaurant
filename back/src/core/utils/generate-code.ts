export const generateCode = (max = 999999, min = 100000) => {
    return Math.round(Math.random() * (max - min) + min)
}