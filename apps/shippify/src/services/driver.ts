import http from './httpService';

const apiEndpoint1 = 'company/';
const apiEndpoint2 = 'driver/';

export function getDriversByCompany(companyId: string) {
  return http.get(`${apiEndpoint1}${companyId}/${apiEndpoint2}`);
}
