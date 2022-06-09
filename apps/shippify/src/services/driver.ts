import http from '../utils/httpService';

const apiEndpoint1 = 'company/';
const apiEndpoint2 = 'driver/';

export function getDriversByCompanyId(companyId: string) {
  return http.get(`${apiEndpoint1}${companyId}/${apiEndpoint2}`);
}
