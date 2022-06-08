export interface IVehicle {
  id: string;
  driverId: string;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  creation_date: Date;
}

export interface IVehicleTable {
  data: IVehicle[];
}
