function maskify(cc) {
  if (cc.length <= 4) return cc;
  else {
    let newString = '';
    
    for (let i = 0; i < cc.length - 4; i++){
      newString += '#';
    }
    
    for (let i = cc.length - 4; i < cc.length; i++) {
      newString += cc[i];
    }
    
    return newString;
  }
}
