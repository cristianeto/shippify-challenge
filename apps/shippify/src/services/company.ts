import http from './httpService';

const apiEndpoint = 'company';

export function getCompanies() {
  return http.get(apiEndpoint);
}
