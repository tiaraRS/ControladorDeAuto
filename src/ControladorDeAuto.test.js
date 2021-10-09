import controlarAuto from "./ControladorDeAuto";
//VALORES POR DEFECTO superficie 8x8, posicion inicial (4,0)N
describe("controlarAuto", () => {
  it("deberia avanzar una posición del auto con superficie y posicion inicial por defecto", () => {
    expect(controlarAuto("A")).toEqual("(4,1)N");
  });
});
