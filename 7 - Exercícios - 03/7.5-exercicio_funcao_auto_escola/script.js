function autoEscola(nome, idade) {
  if (idade >= 18) {
    console.log(
      `Olá ${nome}! Você tem ${idade} anos de idade, portanto, pode se matricular na auto-escola`
    );
  } else {
    console.log(
      `Olá ${nome}! Infelizmente, você tem ${idade} anos de idade, por tanto, não pode se matricular na auto-escola`
    );
  }
}

autoEscola("Paulo", 20);
autoEscola("Mario", 14);
