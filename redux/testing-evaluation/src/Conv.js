const Conv = (data1) =>{
    let ress = data1*1024;
    let resul = ress.toFixed(3);
    return resul;
  }

  

  Conv(2);
  module.exports = Conv;