import http from './httpService';

const apiEndpoint1 = 'company/';
const apiEndpoint2 = 'driver/';
const apiEndpoint3 = 'vehicle/';

export function getVehiclesByDriver(companyId: string, driverId: string) {
  return http.get(
    `${apiEndpoint1}${companyId}/${apiEndpoint2}${driverId}/${apiEndpoint3}`
  );
}
