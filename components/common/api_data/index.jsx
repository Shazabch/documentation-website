import Overview from "@/components/data/content/Overview";
import Authentication from "@/components/data/content/Authentication";
import BaseUrl from "@/components/data/content/BaseUrl";
import Endpoints from "@/components/data/content/Endpoints";
import QR_Code_Verification_Invalid from "@/components/data/content/QR-Code-Verification-Invalid";
import QR_Code_Verification_Valid from "@/components/data/content/QR-Code-Verification-Valid";
import QR_Code_Verification_Valid2 from "@/components/data/content/QR-Code-Verification-Valid2";
import Variables from "@/components/data/content/Variables";
import Events from "@/components/data/content/Events";

const API1 = {
  overview: Overview,
  authentication: Authentication,
  base_url: BaseUrl,
  endpoints: Endpoints,
  qr_code_verification_invalid: QR_Code_Verification_Invalid,
  qr_code_verification_valid: QR_Code_Verification_Valid,
  qr_code_verification_valid2: QR_Code_Verification_Valid2,
  variables: Variables,
  events: Events,
};

const APIData = [{ name: "API 1", data: API1 }];

export default APIData;
