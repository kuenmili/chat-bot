export interface QueryPayload {
  type: string;
  message: string;
  doctorData?: Record<string, any>;
}

export async function sendQuery(payload: QueryPayload) {
  const res = await fetch("http://localhost:3000/zentis/clinical", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJraWQiOiJYOEhDN3lCaEtPVGNzNGdIRXl3OVljcDRkUVFHTDEwbWplY0J6b1wvVzlHND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkNDA4ODQ4OC1hMDQxLTcwMTEtYjAxYS03Mzk3Mzk5NGMxMTEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9uNHYzcXZTaXQiLCJjbGllbnRfaWQiOiIyMHFsNDk5dTllZnM1bmdxZzFsMXJxb28yOCIsIm9yaWdpbl9qdGkiOiI3MmExMDkxMi1jZDI3LTQ5NTctOTYzMS01NDUyMWE3YWQwMTAiLCJldmVudF9pZCI6IjAxMmUyMDUwLTIxNDYtNGYyZi04NTQ3LTVmYmIxNWQ4ZDlmMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3NDczNDU1OTUsImV4cCI6MTc0NzM0OTE5NSwiaWF0IjoxNzQ3MzQ1NTk1LCJqdGkiOiIzNGI2ZTdiZS05NmE0LTQyMTMtYTI4YS04NDJiOGRhYmE3MDYiLCJ1c2VybmFtZSI6ImQ0MDg4NDg4LWEwNDEtNzAxMS1iMDFhLTczOTczOTk0YzExMSJ9.nMLYatMiO5Rj0JKFjHWeyrFZ7s8Yeht5Lap-EW-9YrJF83ASIDzK3iPohXjfm3Ke_F2XKYGPvMT3B4GZknB-nH8Vr5jC5-CS1uZn03FEMPeciqNbSoAiQtruYN5FN6HCKNjjn9_08aY5a_Y8l4mtgw5u49KRaH4Q7U2IWWUxibE7-yql_zwPmT299s7YSPyS8JyFhZxmC9oL323TJB9AmmPOfnXJlBQgTX-0pmBEAnRoKMZ04j6H4kQm-05clp0BksIoMFhpC9cBclWGD_5Z8XIE6Bu1IKZi6Kd0pM_5w_MdddVn_Q6c1Wc4MSWAI2KNFm9vo82phVGGkzRe8YR5yQ",
    },
    body: JSON.stringify({ reason: payload.message }),
  });
  return res.json();
}
