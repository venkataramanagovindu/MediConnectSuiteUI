import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { Chip } from "@mui/material";
import Divider from "@mui/material/Divider";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "patientName", headerName: "Patient Name", width: 200 },
  { field: "doctorName", headerName: "Doctor Name", width: 200 },
  {
    field: "appointmentDate",
    headerName: "Appointment Date",
    width: 200,
    type: "date",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const status = params.value;
      let chipColor;
      switch (status) {
        case "Confirmed":
          chipColor = "primary";
          break;
        case "Pending":
          chipColor = "warning";
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
    appointmentDate: new Date("2024-04-25"),
    status: "Confirmed",
  },
  {
    id: 2,
    patientName: "Jane Doe",
    doctorName: "Dr. Johnson",
    appointmentDate: new Date("2024-04-26"),
    status: "Pending",
  },
  {
    id: 3,
    patientName: "Michael Johnson",
    doctorName: "Dr. Brown",
    appointmentDate: new Date("2024-04-27"),
    status: "Canceled",
  },
  {
    id: 4,
    patientName: "Emily Wilson",
    doctorName: "Dr. White",
    appointmentDate: new Date("2024-04-28"),
    status: "Confirmed",
  },
  {
    id: 5,
    patientName: "Sarah Davis",
    doctorName: "Dr. Green",
    appointmentDate: new Date("2024-04-29"),
    status: "Pending",
  },
  {
    id: 6,
    patientName: "David Martinez",
    doctorName: "Dr. Black",
    appointmentDate: new Date("2024-04-30"),
    status: "Confirmed",
  },
  {
    id: 7,
    patientName: "Linda Thompson",
    doctorName: "Dr. Gray",
    appointmentDate: new Date("2024-05-01"),
    status: "Pending",
  },
  {
    id: 8,
    patientName: "Richard Rodriguez",
    doctorName: "Dr. Red",
    appointmentDate: new Date("2024-05-02"),
    status: "Canceled",
  },
  {
    id: 9,
    patientName: "Susan Harris",
    doctorName: "Dr. Blue",
    appointmentDate: new Date("2024-05-03"),
    status: "Confirmed",
  },
  {
    id: 10,
    patientName: "James Moore",
    doctorName: "Dr. Yellow",
    appointmentDate: new Date("2024-05-04"),
    status: "Pending",
  },
  {
    id: 11,
    patientName: "Karen Clark",
    doctorName: "Dr. Purple",
    appointmentDate: new Date("2024-05-05"),
    status: "Confirmed",
  },
  {
    id: 12,
    patientName: "Steven Scott",
    doctorName: "Dr. Orange",
    appointmentDate: new Date("2024-05-06"),
    status: "Pending",
  },
  {
    id: 13,
    patientName: "Mary Lee",
    doctorName: "Dr. Pink",
    appointmentDate: new Date("2024-05-07"),
    status: "Canceled",
  },
  {
    id: 14,
    patientName: "Daniel King",
    doctorName: "Dr. Brown",
    appointmentDate: new Date("2024-05-08"),
    status: "Confirmed",
  },
  {
    id: 15,
    patientName: "Carol Evans",
    doctorName: "Dr. White",
    appointmentDate: new Date("2024-05-09"),
    status: "Pending",
  },
  {
    id: 16,
    patientName: "Jason Allen",
    doctorName: "Dr. Green",
    appointmentDate: new Date("2024-05-10"),
    status: "Confirmed",
  },
  {
    id: 17,
    patientName: "Patricia Baker",
    doctorName: "Dr. Black",
    appointmentDate: new Date("2024-05-11"),
    status: "Pending",
  },
  {
    id: 18,
    patientName: "Eric Carter",
    doctorName: "Dr. Gray",
    appointmentDate: new Date("2024-05-12"),
    status: "Canceled",
  },
  {
    id: 19,
    patientName: "Jessica Adams",
    doctorName: "Dr. Red",
    appointmentDate: new Date("2024-05-13"),
    status: "Confirmed",
  },
  {
    id: 20,
    patientName: "Matthew Gonzalez",
    doctorName: "Dr. Blue",
    appointmentDate: new Date("2024-05-14"),
    status: "Pending",
  },
];

const metrics = [
  {
    logo: "haertbeat.png",
    text: "Heart Rate",
    metric: "80 Bpm",
    color: "#FFCB39",
  },
  {
    logo: "bloodpresure.png",
    text: "Blood Pressure",
    metric: "120/80 mmHG",
    color: "#61D4CF",
  },
  {
    logo: "glucose.png",
    text: "Glucose Level",
    metric: "60 - 80 mg/dl",
    color: "#FF834C ",
  },
];
export default function Appointments() {
  return (
    <div>
      <h3>Appointments</h3>
      <div className="row">
        <div className="col-8">
          <div className="card px-5 pt-3">
            <div className="row">
              <div className="col-8 d-flex flex-column justify-content-center">
                <h3>Welcome Eshwar!</h3>
                <span className="mb-4">
                  Get your latest update for the last 7 days
                </span>
                <Button className="border w-50">Connect to Doctor!</Button>
              </div>
              <div className="col-4 d-flex  justify-content-end">
                <img src="/assets/imgs/docback.png" width="200" height="200" />
              </div>
            </div>
          </div>
          <div className="my-3"></div>
          <div className="d-flex gap-1">
            {metrics.map((m) => (
              <div
                className="card d-flex flex-column col-4 border p-3"
                style={{
                  backgroundColor: m.color,
                  // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/imgs/dna.png)`,
                  // backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover", // or a specific size like "100px 100px"
                  // backgroundPosition: "center", // Adjust if needed
                }}
              >
                <span>
                  <img
                    src={`/assets/imgs/${m.logo}`}
                    width={50}
                    height={50}
                    className="card"
                  />
                </span>
                <strong>{m.text}</strong>
                <small>{m.metric}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 border card">
          <div className="p-3">
            <h3 className="header">Scheduled Appointments</h3>

            <div
              className="border d-flex flex-column p-3 card"
              style={{ height: "280px" }}
            >
              <span className="border p-1 rounded">Routine Checkup</span>
              <div>Domain Lewis - Standard Consult</div>
              <div>
                <span>10:30am - 11:00am</span>
                <span>Starts in 25min</span>
              </div>
              <Divider variant="middle" />
              <div>
                <div>
                  <img src="" />
                </div>
                <div>
                  <strong>Eshwar Kyatham</strong>
                  <small>928-225-1141</small>
                </div>
              </div>
              <Divider variant="middle" />
              <div>
                <Button className="border">Edit Consult</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3"></div>
      <div className="row">
        <div className="col-6">
          <div className="card p-3 ">
            <h3 className="header">Hear rate over the week</h3>
            <div style={{ height: "500px" }}>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 card">
            <h3 className="header">My Appointments</h3>
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
