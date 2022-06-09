import { IDriver } from '@core/interfaces';
import { useEffect, useState } from 'react';
import { getDriversByCompanyId } from '../services/driver';

const useDrivers = () => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const populateDrivers = async () => {
    const res = await getDriversByCompanyId('1');
    setDrivers(res.data);
  };

  const driverById = (driverId: string) => {
    return drivers.find((driver) => driver.id === driverId);
  };

  useEffect(() => {
    populateDrivers();
  }, []);

  return { drivers, driverById };
};

export default useDrivers;
