function maskEmail(email){
  const var1 = email.indexOf("@");
  const var2 = email.slice(0, var1);
  const var3 = var2.length;
  const var4 = email.slice(0, 1);
  const var5 = var2[var3 - 1];
  const var6 = var3 - 2;
  const var7 = "*".repeat(var6);
  const var8 = email.length
  const var9 = email.slice(var1, var8)
  const result =  var4 + var7 + var5 + var9
    return result;                 
}

const email = "slamdad0000@gmail.com"
console.log(maskEmail(email));
