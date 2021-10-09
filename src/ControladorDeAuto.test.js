import controlarAuto from "./ControladorDeAuto";
//VALORES POR DEFECTO superficie 8x8, posicion inicial (4,0)N
describe("controlarAuto", () => {
  //F1
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

 
});
