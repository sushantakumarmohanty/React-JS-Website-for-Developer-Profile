/* eslint-disable no-unused-expressions */
import sum from './Sum';

it("when a and b as numbers",()=>{
    const result=sum(1,2);
    expect(result).toBe(3);
})

it("when a & b is string",()=>{
    const result=sum("1","2");
    expect(result).toBe(3);
})
