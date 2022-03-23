export interface Doctor {
  _id: string;
  name: string;
  email: string;
  password: string;
  address: {
    city: string;
    street: string;
    government: string;
  };
  paymentDetails: {
    name: string;
    cardNum: string;
    VCC: string;
  };
  clincId: string;
  specialization: string;
  image: string;
  veseeta: number;
  appoinmentIds: string[];
  avaliableAppointments: { day: string; times: string[] }[];
}
