import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  AreaChart,
  Area,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Define the data structure
const alertData = [
  {
    timestamp: "2019-01-02T03:53:35.752154",
    flow_id: 53054304,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "92.63.194.33",
    src_port: 55349,
    dest_ip: "138.68.3.71",
    dest_port: 58800,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:53:35.752154",
    flow_id: 53054304,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "92.63.194.33",
    src_port: 55349,
    dest_ip: "138.68.3.71",
    dest_port: 58800,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:53:35.752154",
    flow_id: 53054304,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "92.63.194.33",
    src_port: 55349,
    dest_ip: "138.68.3.71",
    dest_port: 58800,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403486,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 94",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:37.528904",
    flow_id: 53055312,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.176.27.6",
    src_port: 59927,
    dest_ip: "138.68.3.71",
    dest_port: 40498,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2008578,
      rev: 6,
      signature: "ET SCAN Sipvicious Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2008578,
      rev: 6,
      signature: "ET SCAN Sipvicious Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2011716,
      rev: 4,
      signature: "ET SCAN Sipvicious User-Agent Detected (friendly-scanner)",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2008578,
      rev: 6,
      signature: "ET SCAN Sipvicious Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2011716,
      rev: 4,
      signature: "ET SCAN Sipvicious User-Agent Detected (friendly-scanner)",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:54:44.259003",
    flow_id: 53055648,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "37.49.231.178",
    src_port: 7433,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403347,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 24",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:32.960706",
    flow_id: 53060016,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51180,
    dest_ip: "138.68.3.71",
    dest_port: 3306,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010937,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to mySQL port 3306",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.116649",
    flow_id: 53119488,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51372,
    dest_ip: "138.68.3.71",
    dest_port: 5432,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010939,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.155731",
    flow_id: 53144688,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51440,
    dest_ip: "138.68.3.71",
    dest_port: 5915,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002911,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5900-5920",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.229176",
    flow_id: 53188032,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51574,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.315220",
    flow_id: 53259600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51777,
    dest_ip: "138.68.3.71",
    dest_port: 5811,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:33.387137",
    flow_id: 53304960,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 51918,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:34.803129",
    flow_id: 53395344,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 52190,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2001219,
      rev: 19,
      signature: "ET SCAN Potential SSH Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:55:46.588852",
    flow_id: 53397360,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "205.209.162.131",
    src_port: 53787,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:03.598202",
    flow_id: 53397696,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "113.10.171.28",
    src_port: 43844,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:09.097718",
    flow_id: 52373568,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65036,
    dest_ip: "138.68.3.71",
    dest_port: 3306,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010937,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to mySQL port 3306",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.386108",
    flow_id: 52491840,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65386,
    dest_ip: "138.68.3.71",
    dest_port: 5915,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002911,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5900-5920",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.421359",
    flow_id: 52507296,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65438,
    dest_ip: "138.68.3.71",
    dest_port: 5432,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010939,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.576769",
    flow_id: 52568784,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49238,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.585758",
    flow_id: 52576512,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49269,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.621656",
    flow_id: 52589280,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49306,
    dest_ip: "138.68.3.71",
    dest_port: 5811,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:11.315110",
    flow_id: 52710912,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49678,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2001219,
      rev: 19,
      signature: "ET SCAN Potential SSH Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:51:01.124914",
    flow_id: 52713600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "61.176.222.167",
    src_port: 59947,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:51:01.124914",
    flow_id: 52713600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "61.176.222.167",
    src_port: 59947,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:51:01.124914",
    flow_id: 52713600,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "61.176.222.167",
    src_port: 59947,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403410,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 56",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:18.860928",
    flow_id: 52714944,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49720,
    dest_ip: "138.68.3.71",
    dest_port: 3306,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010937,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to mySQL port 3306",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:18.985997",
    flow_id: 52758288,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49845,
    dest_ip: "138.68.3.71",
    dest_port: 5432,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010939,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:20.129831",
    flow_id: 52851360,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 50118,
    dest_ip: "138.68.3.71",
    dest_port: 5906,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002911,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5900-5920",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:20.325889",
    flow_id: 52950816,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 50414,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:20.325900",
    flow_id: 52951824,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 50432,
    dest_ip: "138.68.3.71",
    dest_port: 5801,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:20.364261",
    flow_id: 52973328,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 50485,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:52:20.848052",
    flow_id: 53051952,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 50719,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2001219,
      rev: 19,
      signature: "ET SCAN Potential SSH Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:53:24.798186",
    flow_id: 53053968,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "80.211.246.121",
    src_port: 5130,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2008578,
      rev: 6,
      signature: "ET SCAN Sipvicious Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:53:24.798186",
    flow_id: 53053968,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "80.211.246.121",
    src_port: 5130,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2008578,
      rev: 6,
      signature: "ET SCAN Sipvicious Scan",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:53:24.798186",
    flow_id: 53053968,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "80.211.246.121",
    src_port: 5130,
    dest_ip: "138.68.3.71",
    dest_port: 5060,
    proto: "UDP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403451,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP UDP group 76",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:08.277797",
    flow_id: 53398368,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "43.227.231.129",
    src_port: 48703,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2403362,
      rev: 46061,
      signature:
        "ET CINS Active Threat Intelligence Poor Reputation IP TCP group 32",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:56:51.922127",
    flow_id: 53399376,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "176.119.4.12",
    src_port: 55068,
    dest_ip: "138.68.3.71",
    dest_port: 48968,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:57:27.555965",
    flow_id: 53400048,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "198.108.67.99",
    src_port: 21496,
    dest_ip: "138.68.3.71",
    dest_port: 3792,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:59:10.558380",
    flow_id: 53400384,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.176.27.58",
    src_port: 52248,
    dest_ip: "138.68.3.71",
    dest_port: 38046,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:00:36.741147",
    flow_id: 53402400,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "199.231.226.166",
    src_port: 48917,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:00:37.850341",
    flow_id: 53403072,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "194.28.115.243",
    src_port: 53441,
    dest_ip: "138.68.3.71",
    dest_port: 18933,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:00:56.611047",
    flow_id: 53404080,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.176.27.38",
    src_port: 57389,
    dest_ip: "138.68.3.71",
    dest_port: 2177,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:02:58.323370",
    flow_id: 53405424,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.244.25.105",
    src_port: 45683,
    dest_ip: "138.68.3.71",
    dest_port: 22,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:03:38.164055",
    flow_id: 53405760,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "194.28.115.245",
    src_port: 52301,
    dest_ip: "138.68.3.71",
    dest_port: 33897,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:03:43.523899",
    flow_id: 53406096,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.211.245.157",
    src_port: 43441,
    dest_ip: "138.68.3.71",
    dest_port: 20016,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:04:30.775337",
    flow_id: 53406432,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "176.119.4.73",
    src_port: 59538,
    dest_ip: "138.68.3.71",
    dest_port: 9503,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:05:09.327068",
    flow_id: 53407440,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "122.10.90.9",
    src_port: 42890,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:05:38.491016",
    flow_id: 53408448,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "185.253.157.100",
    src_port: 32767,
    dest_ip: "138.68.3.71",
    dest_port: 8545,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:05:59.376174",
    flow_id: 53408784,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "176.119.4.29",
    src_port: 57467,
    dest_ip: "138.68.3.71",
    dest_port: 50126,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T04:06:39.461292",
    flow_id: 53409792,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "120.52.152.16",
    src_port: 58914,
    dest_ip: "138.68.3.71",
    dest_port: 17,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2402000,
      rev: 5047,
      signature: "ET DROP Dshield Block Listed Source group 1",
      category: "Misc Attack",
      severity: 2,
    },
  },
];

// Helper function to extract time from timestamp
const getTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// Process data for charts
const processData = () => {
  // For Alert Category Distribution
  const categoryCount = {};
  alertData.forEach((alert) => {
    const category = alert.alert.category;
    categoryCount[category] = (categoryCount[category] || 0) + 1;
  });

  const categoryData = Object.keys(categoryCount).map((category) => ({
    name: category,
    value: categoryCount[category],
  }));

  // For Protocol Distribution
  const protocolCount = {};
  alertData.forEach((alert) => {
    const protocol = alert.proto;
    protocolCount[protocol] = (protocolCount[protocol] || 0) + 1;
  });

  const protocolData = Object.keys(protocolCount).map((protocol) => ({
    name: protocol,
    value: protocolCount[protocol],
  }));

  // For Alerts by Time
  const timeData = {};
  alertData.forEach((alert) => {
    const time = getTime(alert.timestamp);
    timeData[time] = (timeData[time] || 0) + 1;
  });

  const timeSeriesData = Object.keys(timeData)
    .map((time) => ({
      time,
      count: timeData[time],
    }))
    .sort(
      (a, b) =>
        new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time)
    );

  // For Target Ports
  const portCount = {};
  alertData.forEach((alert) => {
    const port = alert.dest_port;
    portCount[port] = (portCount[port] || 0) + 1;
  });

  const portData = Object.keys(portCount)
    .sort((a, b) => portCount[b] - portCount[a])
    .slice(0, 10)
    .map((port) => ({
      port: String(port),
      count: portCount[port],
    }));

  // For Source IP Distribution
  const sourceIpCount = {};
  alertData.forEach((alert) => {
    const ip = alert.src_ip;
    sourceIpCount[ip] = (sourceIpCount[ip] || 0) + 1;
  });

  const sourceIpData = Object.keys(sourceIpCount)
    .sort((a, b) => sourceIpCount[b] - sourceIpCount[a])
    .slice(0, 5)
    .map((ip) => ({
      ip,
      count: sourceIpCount[ip],
    }));

  // For Attack Signatures
  const signatureCount = {};
  alertData.forEach((alert) => {
    const signature =
      alert.alert.signature.split(" ").slice(0, 3).join(" ") + "...";
    signatureCount[signature] = (signatureCount[signature] || 0) + 1;
  });

  const signatureData = Object.keys(signatureCount)
    .sort((a, b) => signatureCount[b] - signatureCount[a])
    .slice(0, 5)
    .map((signature) => ({
      name: signature,
      value: signatureCount[signature],
    }));

  return {
    categoryData,
    protocolData,
    timeSeriesData,
    portData,
    sourceIpData,
    signatureData,
  };
};

export default function SecurityDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processedData = processData();
    setData(processedData);
    setLoading(false);
  }, []);

  // Pie chart colors
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">
            Security Alert Dashboard
          </h1>
          <p className="text-gray-400">Real-time network security monitoring</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 rounded-lg px-4 py-2">
            <span className="text-gray-400 mr-2">Last Updated:</span>
            <span className="text-white">Jan 02, 2019 03:56:08</span>
          </div>
          <div className="bg-red-500 rounded-lg px-4 py-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-white mr-2 animate-pulse"></div>
            <span className="font-bold">20 Active Alerts</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Alert Category Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Alerts by Protocol
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.protocolData}>
                <XAxis dataKey="name" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Legend />
                <Bar dataKey="value" name="Alerts" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Alerts Timeline
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data.timeSeriesData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorCount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Top Target Ports
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.portData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" stroke="#ffffff" />
                <YAxis dataKey="port" type="category" stroke="#ffffff" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Legend />
                <Bar dataKey="count" name="Attempts" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Top Attacking IPs
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={data.sourceIpData}>
                <PolarGrid stroke="#444" />
                <PolarAngleAxis dataKey="ip" stroke="#ffffff" />
                <PolarRadiusAxis stroke="#ffffff" />
                <Radar
                  name="Alerts"
                  dataKey="count"
                  stroke="#FF8042"
                  fill="#FF8042"
                  fillOpacity={0.6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-300">
            Alert Signatures
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.signatureData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.signatureData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Network Security Monitoring Dashboard | © 2025 SecureNet</p>
      </footer>
    </div>
  );
}
