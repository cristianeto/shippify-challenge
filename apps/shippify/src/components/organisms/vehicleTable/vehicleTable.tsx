import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { IVehicle, IVehicleTable } from '@core/interfaces';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { vehicleForm as vehicleTexts } from '@constants';

const VehicleTable: React.FC<IVehicleTable> = ({
  data: items,
  onOpen,
  onOpenDeleteModal,
}) => {
  const {
    titles: { update, deleteRegister },
  } = vehicleTexts;

  return (
    items.length > 0 && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Capacity</TableCell>
              <TableCell align="right">Creation date</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Plate</TableCell>
              <TableCell align="center">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((vehicle: IVehicle) => (
              <TableRow
                key={vehicle.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {vehicle.capacity}
                </TableCell>
                <TableCell align="right">
                  {JSON.stringify(vehicle.creation_date)}
                </TableCell>
                <TableCell align="right">{vehicle.model}</TableCell>
                <TableCell align="right">{vehicle.plate}</TableCell>
                <TableCell
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => onOpen(update, vehicle.id)}
                  >
                    {update}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => onOpenDeleteModal(vehicle.id)}
                    color="secondary"
                  >
                    {deleteRegister}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default VehicleTable;
