import React from "react";

const Index = () => {
  return <div>Index</div>;
};

export default Index;

//  Philippines Verification
// This documentation provides a guide on how to use the API endpoints available in the Philippines verification service. Each endpoint allows verification of different types of documents. The common setup and request structure are detailed below, followed by specific endpoint instructions.

// Common Setup
// Base URL
// All API requests should be made to the following base URL:

// Copy code
// {{baseUrl}}
// Authentication
// All requests require an Authorization header with a valid access token:

// css
// Copy code
// Authorization: {{accessToken}}
// Headers
// The following headers must be included in all requests:

// makefile
// Copy code
// accept: application/json
// Content-Type: application/json
// Authorization: {{accessToken}}
// Endpoints
// 1. Driving License Verification
// Endpoint: POST /v1/verification/philippines/drivinglicense

// Request:

// json
// Copy code
// {
//   "licenseNumber": "N01-23-456789",
//   "expirationDate": "1999-12-31",
//   "serialNumber": "123456789"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/drivinglicense' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "licenseNumber": "N01-23-456789",
//     "expirationDate": "1999-12-31",
//     "serialNumber": "123456789"
//   }'
// 2. UMID SSN Verification
// Endpoint: POST /v1/verification/philippines/umidssn

// Request:

// json
// Copy code
// {
//   "documentNumber": "0111-2345678-9"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/umidssn' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "documentNumber": "0111-2345678-9"
//   }'
// 3. PRC Verification
// Endpoint: POST /v1/verification/philippines/prc

// Request:

// json
// Copy code
// {
//   "documentNumber": "0123456",
//   "profession": "CRIMINOLOGIST",
//   "dateOfBirth": "1999-12-31"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/prc' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "documentNumber": "0123456",
//     "profession": "CRIMINOLOGIST",
//     "dateOfBirth": "1999-12-31"
//   }'
// 4. National Police Verification
// Endpoint: POST /v1/verification/philippines/nationalpolice

// Request:

// json
// Copy code
// {
//   "documentNumber": "23456789",
//   "profession": "user"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/nationalpolice' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "documentNumber": "23456789",
//     "profession": "user"
//   }'
// 5. NBI Clearance Verification
// Endpoint: POST /v1/verification/philippines/nbiclearance

// Request:

// json
// Copy code
// {
//   "documentNumber": "U000ABCD12-EF3456789",
//   "firstName": "user",
//   "lastName": "user",
//   "dateOfBirth": "1999-12-31"
// }
// Responses:

// 200 OK: Verification successful.
// 401 Unauthorized: Invalid or missing access token.
// Example cURL:

// bash
// Copy code
// curl -X 'POST' \
//   '{{baseUrl}}/v1/verification/philippines/nbiclearance' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -H 'Authorization: {{accessToken}}' \
//   -d '{
//     "documentNumber": "U000ABCD12-EF3456789",
//     "firstName": "user",
//     "lastName": "user",
//     "dateOfBirth": "1999-12-31"
//   }'
// Error Handling
// Common Error Responses
// 401 Unauthorized: This error indicates that the access token provided is invalid or missing. Ensure that the Authorization header is correctly set with a valid token.
// This documentation should help you to utilize the Philippines verification API endpoints effectively. If you encounter any issues or need further assistance, please refer to the API support team.
