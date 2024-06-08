import Overview from "@/components/data/content/QR_Code_Verification/Overview";
import Authentication from "@/components/data/content/QR_Code_Verification/Authentication";
import BaseURL from "@/components/data/content/QR_Code_Verification/BaseURL";
import Endpoints from "@/components/data/content/QR_Code_Verification/Endpoints";
import QR_Code_Verification_Invalid from "@/components/data/content/QR_Code_Verification/QR_Code_Verification_Invalid";
import QR_Code_Verification_Valid from "@/components/data/content/QR_Code_Verification/QR_Code_Verification_Valid";
import QR_Code_Verification_Valid2 from "@/components/data/content/QR_Code_Verification/QR_Code_Verification_Valid2";
import Variables from "@/components/data/content/QR_Code_Verification/Variables";
import Events from "@/components/data/content/QR_Code_Verification/Events";

import API_Documentation_for_Philippines_Verification_API2 from "@/components/data/content/Phillippines_Verification/API_Documentation_for_Philippines_Verification_API2";
import Driving_Liscence_Verification from "@/components/data/content/Phillippines_Verification/Driving_Liscense_Verification";
import Error_Handling from "@/components/data/content/Phillippines_Verification/Error_Handling";
import National_Police_Verification from "@/components/data/content/Phillippines_Verification/National_Police_Verification";
import NBI_Clearance_Verification from "@/components/data/content/Phillippines_Verification/NBI_Clearance_Verification";
import PRC_Verification from "@/components/data/content/Phillippines_Verification/PRC_Verification";
import UMID_SSN_Verification from "@/components/data/content/Phillippines_Verification/UMID_SSN_Verification";

const API1 = {
  Overview,
  Authentication,
  BaseURL,
  Endpoints,
  QR_Code_Verification_Invalid,
  QR_Code_Verification_Valid,
  QR_Code_Verification_Valid2,
  Variables,
  Events,
};

const API2 = {
  API_Documentation_for_Philippines_Verification_API2,
  Driving_Liscence_Verification,
  UMID_SSN_Verification,
  PRC_Verification,
  National_Police_Verification,
  NBI_Clearance_Verification,
  Error_Handling,
};
const APIData = [
  { name: "QR Code Verification", data: API1 },
  { name: "Phillipines Verification", data: API2 },
];

export default APIData;
