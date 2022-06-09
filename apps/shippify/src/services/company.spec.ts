import { getCompanies } from "./company"
describe('Company service', () => { 
    test('should return companies', async() => { 
        const { data } = await getCompanies();
        expect(data).toStrictEqual([
            {
              "name": "Homenick, Brown and Goyette",
              "city": 55,
              "status": "status 1",
              "plan_type": "plan_type 1",
              "creation_date": "2022-06-08T08:45:12.401Z",
              "id": "1"
            }
        ]);
        expect(data).toHaveLength(1);
    })
 })