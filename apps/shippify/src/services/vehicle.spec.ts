import { getVehiclesByDriverId } from "./vehicle"
describe('Driver service', () => { 
    test('should return drivers by a specific company', async() => { 
        const { data } = await getVehiclesByDriverId("1");
        expect(data).toHaveLength(3);
    })
 })