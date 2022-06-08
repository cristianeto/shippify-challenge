import http from './httpService';

const apiEndpoint1 = 'company/';
const apiEndpoint2 = 'driver/';
const apiEndpoint3 = 'vehicle/';

export function getVehiclesByDriver(driverId: string) {
  return http.get(
    `${apiEndpoint1}4/${apiEndpoint2}${driverId}/${apiEndpoint3}`
  );
}
