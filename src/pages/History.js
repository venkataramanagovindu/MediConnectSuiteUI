import { Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <h3>History</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30]}
      />
    </div>
  );
}
