import { GOOGLE_SHEET_ID, GOOGLE_SHEETS_URL, GOOGLE_SHEET_NAME } from "../constants";

/**
 * Note: SpreadsheetApp is only available in Google Apps Script (GAS).
 * If you are using this in a Google Apps Script, you can set the ID in 
 * Project Settings > Script Properties and access it like this:
 * 
 * const SHEET_ID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
 * 
 * In this React environment, we use the environment variable VITE_GOOGLE_SHEET_ID.
 */

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

/**
 * Example of how you might fetch data from your Google Sheet 
 * if you have a Web App (GAS) acting as a proxy.
 */
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
