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

export interface VendorAdd {
  name: string;
  address: string;
  relatedHospital: string;
}

export interface VendorAddResponse {
  status: string;
  result: Vendor[];
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  status: string;
  results: {
    message: string;
    username: string;
  };
}