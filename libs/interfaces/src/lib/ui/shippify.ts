export interface IVehicle {
  id: string;
  driverId: string;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  creation_date: string;
}

export interface IVehicleTable {
  data: IVehicle[];
}

export interface IDriver {
  city: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;
  status: string;
  creation_date: string;
  id: string;
  companyId: string;
}

export interface ISelectedDriver {
  data: IDriver[];
  label: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  value: string;
}
