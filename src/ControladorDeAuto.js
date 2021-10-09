function controlarAuto(cadenaDeControlAuto) {  
  if(cadenaDeControlAuto.startsWith("IA")) return "(3,0)O"
  if (cadenaDeControlAuto[0] != "A") return "(4,0)N"  
  return "(4,1)N";
}

export default controlarAuto;

