import React from 'react';

export interface IVehicle {
  id: string;
  driverId: string;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  creation_date: string;
}

export interface IVehicleTable {
  data: IVehicle[];
  onOpen: (open: string, vehicleId: string) => void;
  onOpenDeleteModal: (idToDelete: string) => void;
}

export interface IDriver {
  city: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;
  status: string;
  creation_date: string;
  id: string;
  companyId: string;
}

export interface ISelectedDriver {
  data: IDriver[];
  label: string;
  handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  value: string;
}

export interface IVehicleForm {
  onSubmit: (vehicle: IVehicle) => void;
  initialState: IVehicle;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  type: string;
}

export interface IForm {
  defaultForm: IVehicle;
  onSubmit: (values: IVehicle) => void;
  labels: {
    plate: string;
    model: string;
    type: string;
    capacity: string;
    creationDate: string;
  };
}
export interface IModal {
  children: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}

export interface ICustomTextField {
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  size?: 'small' | 'medium';
  value?: string;
}

export interface IDeleteModal {
  onDelete: (idToDelete: string) => void;
  option: IVehicle;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}
