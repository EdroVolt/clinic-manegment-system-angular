export interface Receptionist {
    _id: string;
    name: string;
    email: string;
    password: string;
    paymentDetails: {
      name: string;
      cardNum: string;
      VCC: string;
    };
    image: string;
  }