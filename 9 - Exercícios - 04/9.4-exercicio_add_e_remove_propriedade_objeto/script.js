let onibus = {
  rodas: 8,
  limite_passageiros: 40,
  portas: 2,
};

console.log(onibus);
console.log(`Rodas - ${onibus.rodas}`);
console.log(`Limite de passageiros - ${onibus.limite_passageiros}`);
console.log(`Portas - ${onibus.portas}`);

// Adicionar
onibus.janelas = 20;
console.log(`Janelas - ${onibus.janelas}`);

// Remover
delete onibus.rodas;
console.log(`Rodas - ${onibus.rodas}`);
