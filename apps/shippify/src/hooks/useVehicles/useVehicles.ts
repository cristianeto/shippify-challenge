import { useCallback, useEffect, useState } from 'react';

import { IVehicle } from '@core/interfaces';
import { getVehiclesByDriverId, saveVehicle } from '../../services/vehicle';
import vehicleTexts from '../../constants/vehicleForm';

export const initialState: IVehicle = {
  plate: '',
  model: '',
  type: '',
  capacity: '',
  creation_date: '',
  id: '',
  driverId: '',
};

const useVehicles = (
  driverId: string,
  setShowModal: (value: boolean) => void,
  setSelectedVehicle: (value: IVehicle) => void
) => {
  const {
    titles: { create, update },
  } = vehicleTexts;

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [formType, setFormType] = useState<string>(create);

  const populateVehicles = useCallback(async (driverId: string) => {
    const res = await getVehiclesByDriverId(driverId);
    const vehicles = res.data;
    setVehicles(vehicles);
  }, []);

  const getVehicleById = (vehicleId: string) => {
    return vehicles.find((v) => v.id === vehicleId);
  };

  const doCreate = (vechicle: IVehicle) => {
    const newVehicles = [vechicle, ...vehicles];
    setVehicles(newVehicles);
  };

  const doUpdate = (vehicle: IVehicle) => {
    const indexVehicle = vehicles.findIndex((v) => v.id === vehicle.id);
    vehicles[indexVehicle] = vehicle;
    setVehicles(vehicles);
  };

  const doDelete = (vehicleId: string) => {
    const vehiclesFiltered = vehicles.filter((v) => v.id !== vehicleId);
    setVehicles(vehiclesFiltered);
  };

  const doSubmit = async (vehicle: IVehicle) => {
    const originalVehicles = [...vehicles];
    try {
      const { data: newVehicle } = await saveVehicle(vehicle);
      if (!vehicle.id) {
        doCreate(newVehicle);
      } else {
        doUpdate(vehicle);
      }
    } catch (error) {
      setVehicles(originalVehicles);
    }
    setShowModal(false);
  };

  const populateForm = (type: string, vehicleId = '') => {
    if (type === update && vehicleId !== '') {
      const vehicle = getVehicleById(vehicleId);
      setSelectedVehicle(vehicle);
    } else {
      setSelectedVehicle(initialState);
    }
    setFormType(type);
  };

  useEffect(() => {
    driverId !== '' && populateVehicles(driverId);
  }, [driverId, populateVehicles]);

  return {
    doDelete,
    doSubmit,
    getVehicleById,
    populateForm,
    vehicles,
    formType,
  };
};

export default useVehicles;
