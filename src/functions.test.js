//This Jest test
//We wrote the test first then write the function 
import {timesTwo} from './functions'

test('Multiplies by two', () =>{
    expect(timesTwo(4)).toBe(8)
})