import { Add, getFullName } from "src/app/mymethod";
import { totalAmount } from "./product";

describe('test add method here', () => {
    it('add method for numbers', () =>
    {
        let n1: number = 20;
        let n2: number = 30;
        let ans = Add(n1, n2);
        expect(ans).toBe(50);
    })

    it('to Equal is Used for object comparision it Success',()=>
    {
        let a = {val:10};
        let b = {val:10};
        expect(a).toEqual(b);
    })

})


describe('test method for total amount',()=>
{
    it('product method here',()=>
    {
        let quantity : number =10;
        let price : number = 40;
        let ans  = totalAmount(price,quantity);
        expect(ans).toBe(400);
    })
})


describe('test method for get full name',()=>
{
    it('product method here',()=>
    {
        let firstName : string ='Jane';
        let lastName : string = 'Smith';
        let ans  = getFullName(firstName,lastName);
        expect(ans).toBe('JaneSmith');
    })
})



