import { Button, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "doctorName", headerName: "Doctor Name", width: 200 },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    width: 150,
  },
  {
    field: "treatment",
    headerName: "Treatment",
    width: 200,
  },
  {
    field: "diagnosis",
    headerName: "Diagnosis",
    width: 200,
  },
  {
    field: "nextAppointment",
    headerName: "Next Appointment",
    width: 150,
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 300,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      const status = params.value;
      let chipColor;
      switch (status) {
        case "Completed":
          chipColor = "success";
          break;
        case "Ongoing":
          chipColor = "primary";
          break;
        case "Canceled":
          chipColor = "error";
          break;
        default:
          chipColor = "default";
          break;
      }
      return <Chip label={status} color={chipColor} />;
    },
  },
];

const rows = [
  {
    id: 1,
    doctorName: "Dr. Smith",
    appointmentDate: "2024-04-18",
    treatment: "Physiotherapy",
    diagnosis: "Chronic back pain",
    nextAppointment: "2024-05-20",
    notes: "Patient showed improvement",
    status: "Completed",
  },
  {
    id: 2,
    doctorName: "Dr. Jones",
    appointmentDate: "2024-04-15",
    treatment: "General Checkup",
    diagnosis: "Healthy",
    nextAppointment: "2024-10-15",
    notes: "Annual checkup - no issues found",
    status: "Ongoing",
  },
  {
    id: 3,
    doctorName: "Dr. Green",
    appointmentDate: "2024-04-10",
    treatment: "Dental Cleaning",
    diagnosis: "Cavity",
    nextAppointment: "2024-04-24",
    notes: "Requires follow-up for cavity filling",
    status: "Ongoing",
  },
  {
    id: 4,
    doctorName: "Dr. Black",
    appointmentDate: "2024-03-22",
    treatment: "Vaccination",
    diagnosis: "Due for annual flu shot",
    nextAppointment: null,
    notes: "Patient needs to schedule next vaccination",
    status: "Completed",
  },
  {
    id: 5,
    doctorName: "Dr. Blue",
    appointmentDate: "2024-04-05",
    treatment: "Orthopedic Consultation",
    diagnosis: "Arthritis",
    nextAppointment: "2024-05-05",
    notes: "Discuss surgical options",
    status: "Canceled",
  },
  {
    id: 1,
    doctorName: "Dr. Smith",
    appointmentDate: "2024-04-18",
    treatment: "Physiotherapy",
    diagnosis: "Chronic back pain",
    nextAppointment: "2024-05-20",
    notes: "Patient showed improvement",
    status: "Completed",
  },
  {
    id: 2,
    doctorName: "Dr. Jones",
    appointmentDate: "2024-04-15",
    treatment: "General Checkup",
    diagnosis: "Healthy",
    nextAppointment: "2024-10-15",
    notes: "Annual checkup - no issues found",
    status: "Ongoing",
  },
  {
    id: 3,
    doctorName: "Dr. Green",
    appointmentDate: "2024-04-10",
    treatment: "Dental Cleaning",
    diagnosis: "Cavity",
    nextAppointment: "2024-04-24",
    notes: "Requires follow-up for cavity filling",
    status: "Ongoing",
  },
  {
    id: 4,
    doctorName: "Dr. Black",
    appointmentDate: "2024-03-22",
    treatment: "Vaccination",
    diagnosis: "Due for annual flu shot",
    nextAppointment: null,
    notes: "Patient needs to schedule next vaccination",
    status: "Completed",
  },
  {
    id: 5,
    doctorName: "Dr. Blue",
    appointmentDate: "2024-04-05",
    treatment: "Orthopedic Consultation",
    diagnosis: "Arthritis",
    nextAppointment: "2024-05-05",
    notes: "Discuss surgical options",
    status: "Canceled",
  },
];

export default function History() {
  const [data, setData] = useState(null);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState();

  const doctors = [
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Williams" },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ doctor, date });
    handleClose();
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3>History</h3>
        <Button
          endIcon={<SendIcon />}
          variant="outlined"
          disabled={!rowSelectionModel.length}
          onClick={handleClickOpen}
        >
          Send Invite
        </Button>
      </div>
      <DataGrid
        checkboxSelection
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log(newRowSelectionModel);
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Send Invite</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the doctor and expiry date and time to send the invite to the
            doctor
          </DialogContentText>
          <div className="mb-3">
            <FormControl fullWidth margin="dense">
              <InputLabel id="doctor-select-label">Doctor</InputLabel>
              <Select
                labelId="doctor-select-label"
                id="doctor-select"
                value={doctor}
                label="Doctor"
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                {doctors.map((doc) => (
                  <MenuItem key={doc.id} value={doc.name}>
                    {doc.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-100">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField {...props} fullWidth margin="dense" />
                )}
                label="Date and Time"
                value={date}
                onChange={setDate}
                required
              />
            </LocalizationProvider>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Send Invite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
