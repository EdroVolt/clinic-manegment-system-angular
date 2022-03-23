export interface Patient {
  _id: string;
  name: string,
  email: string,
  password: string,
  address: {
    city: string,
    street: string,
    government: string
  },
  paymentDetails: {
    name: string,
    cardNum: string,
    VCC: string
  },
  medicalHistory: string,
  image: string,
  prescriptions: string[],
  appointmentIds: string[]
}
