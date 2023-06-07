var nome = "Joshua";
var idade = 18;
var altura = 1.87;
var peso = 68;
var salario = 1200;
var profissao = "Desenvolvedor";

// Verificação de maioridade penal
var maioridadePenal = idade >= 18;

// Cálculo do IMC
var imc = peso / (altura * altura);
var classificacaoIMC;

if (imc < 18.5) {
  classificacaoIMC = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  classificacaoIMC = "Peso ideal";
} else if (imc >= 25 && imc <= 29.9) {
  classificacaoIMC = "Acima do peso";
} else {
  classificacaoIMC = "Obesidade";
}

// Verificação do salário
var statusSalario;

if (salario >= 2000 && salario <= 4000) {
  statusSalario = "Mais ou menos";
} else {
  statusSalario = "Fora da faixa";
}

// Tipo de dado de cada variável
var tipoNome = typeof nome;
var tipoIdade = typeof idade;
var tipoAltura = typeof altura;
var tipoPeso = typeof peso;
var tipoSalario = typeof salario;
var tipoProfissao = typeof profissao;


console.log("Maioridade penal:", maioridadePenal);
console.log("IMC:", imc.toFixed(2), "-", classificacaoIMC);
console.log("Salário:", statusSalario);
console.log("Tipo de dado de 'nome':", tipoNome);
console.log("Tipo de dado de 'idade':", tipoIdade);
console.log("Tipo de dado de 'altura':", tipoAltura);
console.log("Tipo de dado de 'peso':", tipoPeso);
console.log("Tipo de dado de 'salário':", tipoSalario);
console.log("Tipo de dado de 'profissão':", tipoProfissao);