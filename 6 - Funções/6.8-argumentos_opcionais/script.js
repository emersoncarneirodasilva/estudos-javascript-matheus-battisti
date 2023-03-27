function indentificacao(nome, idade) {
  if (idade === undefined) {
    console.log(`Seu nome é ${nome}`);
  } else {
    console.log(`Seu nome é ${nome} e você tem ${idade} anos`);
  }
}

indentificacao("Paulo");
indentificacao("Maria", 25);

function soma(a, b) {
  if (a === undefined || b === undefined) {
    console.log("Esta função precisa de dois parâmetros");
  } else {
    return a + b;
  }
}

console.log(soma(1));

console.log(soma(5, 7));

function saudacao(nome, idade) {
  if (idade === undefined) {
    console.log(`Olá ${nome}, como você está?`);
  } else {
    console.log(`Olá ${nome}, você tem ${idade} anos, certo?`);
  }
}

saudacao("Paulo");

saudacao("Emerson", 35);
