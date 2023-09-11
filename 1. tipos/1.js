const a = "20"

// 'const b = a + 2' resultado incorreto

const b = Number(a) + 2

console.log("O resultado é: " + b)