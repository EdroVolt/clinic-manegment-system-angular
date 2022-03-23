export interface Clinic {
  _id: string;
  name: string;
  doctorsId: string;
  receptionistIds: string[];
  address: {
    city: string;
    street: string;
    government: string;
  };
  description: string;
}
