const time = require('./time')

test('properly works',()=>{
    expect(time(200000)).toBe(20)
    

})