const convert = (data1) =>{
    let ress = data1/1024;
    let resul = ress.toFixed(3);
    return resul;
  }

  

  convert(1024);
  module.exports = convert;