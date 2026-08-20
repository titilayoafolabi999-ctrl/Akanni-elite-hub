import { GOOGLE_SHEET_ID, GOOGLE_SHEETS_URL, GOOGLE_SHEET_NAME } from "../constants";



export const getSheetConfig = () => {
  return {
    sheetId: GOOGLE_SHEET_ID,
    webAppUrl: GOOGLE_SHEETS_URL,
    sheetName: GOOGLE_SHEET_NAME
  };
};

export const isSheetsConfigured = () => {
  return !!GOOGLE_SHEETS_URL || !!GOOGLE_SHEET_ID;
};


export const fetchSheetData = async () => {
  if (!GOOGLE_SHEETS_URL) {
    console.warn("GOOGLE_SHEETS_URL is not set.");
    return null;
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};
