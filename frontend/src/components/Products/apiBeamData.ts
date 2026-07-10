import {
  FileText,
  Truck,
  FileCheck2,
  BellRing,
  type LucideIcon,
} from "lucide-react";

export interface ApiNode {
  icon: LucideIcon;
  title: string;
  method: string;
  path: string;
  status: string;
  latency: string;
  lines: string[];
}

export const apis: ApiNode[] = [
  {
    icon: FileText,
    title: "GST API",
    method: "GET",
    path: "/v1/gstin/validate",
    status: "200",
    latency: "61ms",
    lines: [`"gstin": "27AAABM...",`, `"status": "Active"`],
  },
  {
    icon: Truck,
    title: "e-Way Bill API",
    method: "POST",
    path: "/v1/ewaybill/create",
    status: "200",
    latency: "194ms",
    lines: [`"ewb_no": "871-2026...",`, `"status": "active"`],
  },
  {
    icon: FileCheck2,
    title: "e-Invoice API",
    method: "POST",
    path: "/v1/einvoice",
    status: "200",
    latency: "182ms",
    lines: [`"irn": "a4f2c91e...",`, `"ack_no": 11251014...`],
  },
  {
    icon: BellRing,
    title: "Notice Management API",
    method: "GET",
    path: "/v1/notices/summary",
    status: "200",
    latency: "48ms",
    lines: [`"total": 24,`, `"pending": 8`],
  },
];
