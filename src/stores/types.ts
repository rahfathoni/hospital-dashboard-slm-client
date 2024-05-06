export interface Hospital {
  id: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface HospitalFetchList {
  status: string;
  result: Hospital[];
}