export interface QueryPayload {
  type:
    | "clinical"
    | "differential"
    | "drugs-interaction"
    | "drugs-side-effects"
    | "drugs-by-condition";
  message: string;
  doctorData?: Record<string, any>;
}

export async function sendQuery(payload: QueryPayload, apiKey: string) {
  const res = await fetch(`http://localhost:3000/zentis/${payload.type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({ reason: payload.message }),
  });
  return res.json();
}
