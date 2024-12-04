const { expect } = require('@jest/globals')
const sum= require('./sum')

test('sum function test cases', ()=>{
    expect(sum()).toBe(4)
})