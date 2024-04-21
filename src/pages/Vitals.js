import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { Chip } from "@mui/material";

function Vitals() {
  // Sample data for demonstration
  const basicVital = [
    { id: 1, type: "Temperature", data: "97" },
    { id: 2, type: "Heart Rate", data: "97" },
    { id: 3, type: "Blood Pressure", data: "97" },
    { id: 4, type: "SpO2 (Oxygen Saturation)", data: "97" },
    { id: 5, type: "Breathing Rate", data: "12" },
  ];
  const healthRecords = [
    {
      id: 1,
      type: "Temperature",
      dateUpload: "2022-04-20",
      dateTest: "2022-04-19",
      uploadedBy: "Dr. Smith",
      docType: "PDF",
    },
    {
      id: 2,
      type: "Heart Rate",
      dateUpload: "2022-04-21",
      dateTest: "2022-04-20",
      uploadedBy: "Dr. Johnson",
      docType: "PDF",
    },
    {
      id: 3,
      type: "Blood Pressure",
      dateUpload: "2022-04-22",
      dateTest: "2022-04-21",
      uploadedBy: "Dr. Williams",
      docType: "PDF",
    },
    {
      id: 4,
      type: "SpO2 (Oxygen Saturation)",
      dateUpload: "2022-04-23",
      dateTest: "2022-04-22",
      uploadedBy: "Dr. Brown",
      docType: "PDF",
    },
    {
      id: 5,
      type: "Respiratory/Breathing Rate",
      dateUpload: "2022-04-24",
      dateTest: "2022-04-23",
      uploadedBy: "Dr. Davis",
      docType: "PDF",
    },
  ];
  //   function HealthRecordPage() {
  //     const handleViewDocument = (row) => {
  //       // Handle the view document action here
  //       console.log('View document', row);
  //     };
  // }
  const columns = [
    { field: "id", headerName: "S.No", width: 90 },
    {
      field: "dateOfUpload",
      headerName: "Date of Upload",
      width: 200,
      type: "date",
    },
    { field: "testDate", headerName: "Date of Test", width: 200, type: "date" },
    {
      field: "uploadedBy",
      headerName: "Uploaded By",
      width: 200,
    },
    {
      field: "hospitalName",
      headerName: "Hospital Name",
      width: 200,
    },
    {
      field: "documentType",
      headerName: "Document Type",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const status = params.value;
        let chipColor;
        switch (status) {
          case "Completed":
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

    {
      field: "view",
      headerName: "View",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton color="primary">
          <a
            href="https://www.med.unc.edu/medclerk/wp-content/uploads/sites/877/2018/10/UMNwriteup.pdf%27"
            target="_blank"
          >
            <VisibilityIcon />
          </a>
        </IconButton>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      dateOfUpload: new Date("2024-04-25"),
      testDate: new Date("2024-04-25"),
      uploadedBy: "John Doe",
      hospitalName: "Dr. Smith",
      documentType: "Test Report",
      status: "Completed",
      vital: {
        temperature: "98 ° F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },

    {
      id: 2,
      dateOfUpload: new Date("2024-04-25"),
      testDate: new Date("2024-04-25"),
      uploadedBy: "John Doe",
      hospitalName: "Dr. Smith",
      documentType: "Test Report",
      status: "Pending",
      vital: {
        temperature: "98 ° F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 3,
      dateOfUpload: new Date("2024-04-25"),
      testDate: new Date("2024-04-25"),
      uploadedBy: "John Doe",
      hospitalName: "Dr. Smith",
      documentType: "Test Report",
      status: "Pending",
      vital: {
        temperature: "98 ° F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 4,
      dateOfUpload: new Date("2024-04-25"),
      testDate: new Date("2024-04-25"),
      uploadedBy: "John Doe",
      hospitalName: "Dr. Smith",
      documentType: "Test Report",
      status: "Completed",
      vital: {
        temperature: "98 ° F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
    {
      id: 5,
      dateOfUpload: new Date("2024-04-25"),
      testDate: new Date("2024-04-25"),
      uploadedBy: "John Doe",
      hospitalName: "Dr. Smith",
      documentType: "Test Report",
      status: "Confirmed",
      vital: {
        temperature: "98 ° F",
        spO2: "96%",
        heartRate: "72 bpm",
        bloodPressure: "120/72",
        breathingRate: "12",
      },
    },
  ];

  return (
    <div>
      <h3>Health Records</h3>
      <div class="vitalcard-container">
        <div class="vitalcard vitalcard-temperature">
          <img src="/assets/imgs/tempremov.png" width={50} height={50} />
          <div class="vitalcard-header">Temperature</div>
          <div class="vitalcard-main">98 ° F</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-spo2">
          <img src="/assets/imgs/ssssss.png" width={50} height={50} />
          <div class="vitalcard-header">SpO2</div>
          <div class="vitalcard-main">96%</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-heart-rate">
          <img src="/assets/imgs/haertbeatremoved.png" width={50} height={50} />
          <div class="vitalcard-header">Heart Rate</div>
          <div class="vitalcard-main">72 bpm</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Normal</div>
        </div>
        <div class="vitalcard vitalcard-blood-pressure">
          <img src="/assets/imgs/spotremov.png" width={50} height={50} />
          <div class="vitalcard-header">Blood Pressure</div>
          <div class="vitalcard-main">120/72</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Good</div>
        </div>
        <div class="vitalcard vitalcard-breathing-rate">
          <img src="/assets/imgs/lungsremov.png" width={50} height={50} />
          <div class="vitalcard-header">Breathing Rate</div>
          <div class="vitalcard-main">12</div>
          <div class="vitalcard-graph"></div>
          <div class="vitalcard-footer">Good</div>
        </div>
      </div>

      <div className="col-12">
        <div className="card p-3">
          <h3 className="header mb-3">My Test Records</h3>
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
  );
}

export default Vitals;
