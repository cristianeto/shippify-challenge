import { useCallback, useEffect, useState } from 'react';

import { IVehicle } from '@core/interfaces';
import { getVehiclesByDriverId } from '../../services/vehicle';

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

  const doSave = (data: IVehicle, vehicles: IVehicle[]) => {
    const newVehicles = [data, ...vehicles];
    setVehicles(newVehicles);
  };

  const doUpdate = (vehicle: IVehicle, vehicles: IVehicle[]) => {
    const indexVehicle = vehicles.findIndex((v) => v.id === vehicle.id);
    vehicles[indexVehicle] = vehicle;
    setVehicles(vehicles);
  };

  const doDelete = (vehicleId: string) => {
    const vehiclesFiltered = vehicles.filter(
      (vehicle) => vehicle.id !== vehicleId
    );
    setVehicles(vehiclesFiltered);
  };

  useEffect(() => {
    driverId !== '' && populateVehicles(driverId);
  }, [driverId, populateVehicles]);

  return { doDelete, doSave, doUpdate, setVehicles, vehicles, vehicleById };
};

export default useVehicles;
