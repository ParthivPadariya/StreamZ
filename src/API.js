export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2MGYwMDY2OC1hNDFmLTQxZGQtYjczMS1mZDNhZGMxYmI3ZDUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5NjgyNTA0OSwiZXhwIjoxNzI4MzYxMDQ5fQ.qMslcO4vFSbdHAYYmpUbfiqelQjfCfcMu-PrwMh0834";

export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};