import { IVehicle } from '@core/interfaces';
import http from '../utils/httpService';

const apiCompany = 'company/';
const apiDriver = 'driver/';
const apiVehicle = 'vehicle/';

export function getVehiclesByDriverId(driverId: string) {
  return http.get(`${apiCompany}1/${apiDriver}${driverId}/${apiVehicle}`);
}

export function saveVehicle(vehicle: IVehicle) {
  if (!vehicle.id) {
    delete vehicle.id;
    delete vehicle.creation_date;
    const body = vehicle;
    return http.post(
      `${apiCompany}/1/${apiDriver}/${vehicle.driverId}/${apiVehicle}`,
      body
    );
  }
  return http.put(
    `${apiCompany}/1/${apiDriver}/${vehicle.driverId}/${apiVehicle}/${vehicle.id}`,
    vehicle
  );
}
