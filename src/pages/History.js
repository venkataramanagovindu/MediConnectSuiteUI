import { Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "patientName", headerName: "Patient Name", width: 200 },
  { field: "doctorName", headerName: "Doctor Name", width: 200 },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    width: 150,
    // type: "date",
  },
  {
    field: "treatment",
    headerName: "Treatment",
    width: 200,
    // additional options or renderCell can be added here if needed
  },
  {
    field: "diagnosis",
    headerName: "Diagnosis",
    width: 200,
    // additional options or renderCell can be added here if needed
  },
  {
    field: "nextAppointment",
    headerName: "Next Appointment",
    width: 150,
    // type: "date",
    // additional options or renderCell can be added here if needed
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 300,
    // additional options or renderCell can be added here if needed
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
    patientName: "John Doe",
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
    patientName: "Jane Roe",
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
    patientName: "Alice Brown",
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
    patientName: "Bob White",
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
    patientName: "Clara Gray",
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
    patientName: "John Doe",
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
    patientName: "Jane Roe",
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
    patientName: "Alice Brown",
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
    patientName: "Bob White",
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
    patientName: "Clara Gray",
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
  return (
    <div>
      <h3>Appointments</h3>
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
