import { CustomerReservation } from "./CustomerReservation";

describe('test customer booking numbers',()=>
{
    let customerservice  : CustomerReservation;

    beforeEach(()=>{
        customerservice = new CustomerReservation();
    });

    afterEach(()=>{
        let customerservice = null;
    });

    it("test CustomerRegister method should increase the bookingNumber",()=>
    {
        let bookingcount = customerservice.customerRegister();
        expect(bookingcount).toEqual(11);
    })

    it("test CustomerRegister method should decrease the bookingNumber",()=>
    {
        let bookingcount = customerservice.customerUnregister();
        expect(bookingcount).toEqual(9);
    })


});