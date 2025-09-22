export class CustomerReservation
{
 
    HotelRomms : number = 30;
    customerbooked : number = 10;
 
   customerRegister()
   {
    return ++this.customerbooked;
   }
 
   customerUnregister()
   {
    return --this.customerbooked;
   }
 
}