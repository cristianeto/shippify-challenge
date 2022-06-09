import { getDriversByCompanyId } from "./driver"
describe('Driver service', () => { 
    test('should return drivers by a specific company', async() => { 
        const { data } = await getDriversByCompanyId("1");
        expect(data).toHaveLength(3);
    })
 })