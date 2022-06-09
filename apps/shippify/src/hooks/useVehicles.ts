import { IVehicle } from '@core/interfaces';
import { getVehiclesByDriverId } from '../services/vehicle';
import { useCallback, useEffect, useState } from 'react';

const useVehicles = (driverId: string) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const populateVehicles = useCallback(async (driverId: string) => {
    const res = await getVehiclesByDriverId(driverId);
    const vehicles = res.data;
    setVehicles(vehicles);
  }, []);

  const vehicleById = (vehicleId: string) => {
    return vehicles.find((v) => v.id === vehicleId);
  };

  useEffect(() => {
    driverId !== '' && populateVehicles(driverId);
  }, [driverId, populateVehicles]);

  return { vehicles, vehicleById };
};

export default useVehicles;
