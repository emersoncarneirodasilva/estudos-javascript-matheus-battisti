class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  deposito(valor) {
    this.saldo += valor;
  }
  saque(valor) {
    this.saldo -= valor;
  }
}

let conta = new Conta(2000);

conta.deposito(2000);
conta.saque(500);

console.log(conta);
console.log(`O seu saldo é: ${conta.saldo}`);
