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

export interface Vendor {
  id: number;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface VendorFetchList {
  status: string;
  result: Vendor[];
}
