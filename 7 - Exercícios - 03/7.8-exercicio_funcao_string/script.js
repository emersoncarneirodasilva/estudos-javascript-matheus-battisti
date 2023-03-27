function string(text) {
  if (text.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
  console.log(text.length);
}

string("Hello World");
string("Olá, como vai? Tudo bem com você?");
string("Olá");
