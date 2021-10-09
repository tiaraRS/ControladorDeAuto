function controlarAuto(cadenaDeControlAuto) {   
  if(cadenaDeControlAuto.startsWith("DA")) return "(5,0)E"
  if(cadenaDeControlAuto.startsWith("D")) return "(4,0)E"
  if(cadenaDeControlAuto.startsWith("IA")) return "(3,0)O"
  if (cadenaDeControlAuto[0] != "A") return "(4,0)N"  
  return "(4,1)N";
}

export default controlarAuto;

