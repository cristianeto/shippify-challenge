import http from '../utils/httpService';

const apiEndpoint1 = 'company/';
const apiEndpoint2 = 'driver/';
const apiEndpoint3 = 'vehicle/';

export function getVehiclesByDriverId(driverId: string) {
  return http.get(
    `${apiEndpoint1}1/${apiEndpoint2}${driverId}/${apiEndpoint3}`
  );
}
