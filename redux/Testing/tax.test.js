const tax = require('./tax')

test('properly works',()=>{
    expect(tax(252500)).toBe(25250)
    

})