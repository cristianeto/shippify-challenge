import http from '../utils/httpService';

const apiEndpoint = 'company';

export function getCompanies() {
  return http.get(apiEndpoint);
}
