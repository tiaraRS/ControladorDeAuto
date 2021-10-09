import controlarAuto from "./ControladorDeAuto";
//VALORES POR DEFECTO superficie 8x8, posicion inicial (4,0)N
describe("controlarAuto", () => {
  //F1 : avanzar 1 posicion
  it("deberia avanzar una posición del auto con superficie y posicion inicial por defecto", () => {
    expect(controlarAuto("A")).toEqual("(4,1)N");
  });
  it("deberia quedarse en la misma posicion para comando B", () => {
    expect(controlarAuto("B")).toEqual("(4,0)N");
  });
  it("deberia quedarse en la misma posicion para comando ''", () => {
    expect(controlarAuto("")).toEqual("(4,0)N");
  });
  it("deberia avanzar una posicion con el comando 'ABAAA'", () => {
    expect(controlarAuto("ABAAA")).toEqual("(4,1)N");
  });
  it("deberia avanzar una posicion con el comando 'ABASDFAAA'", () => {
    expect(controlarAuto("ABASDFAAA")).toEqual("(4,1)N");
  });
  //F2 : permitir giro a izquierda antes de avanzar 1 posicion
  it("deberia devolver (3,0)O con el comando 'IA'", () => {
    expect(controlarAuto("IA")).toEqual("(3,0)O");
  });
  it("deberia devolver (3,0)O con el comando 'IABDE'", () => {
    expect(controlarAuto("IABDE")).toEqual("(3,0)O");
  });
  it("deberia quedarse en la misma posicion con el comando 'DIABDE'", () => {
    expect(controlarAuto("DIABDE")).toEqual("(4,0)N");
  });
  //F3 : permitir giro a derecha antes de avanzar 1 posicion
  it("deberia avanzar una posicion con el comando 'DA'", () => {
    expect(controlarAuto("DA")).toEqual("(5,0)E");
  });
  it("deberia avanzar una posicion con el comando 'DAFDS'", () => {
    expect(controlarAuto("DAFDS")).toEqual("(5,0)E");
  });
  it("deberia avanzar una posicion con el comando 'AFDSDAFDS'", () => {
    expect(controlarAuto("AFDSDAFDS")).toEqual("(4,1)N");
  });
 
});
