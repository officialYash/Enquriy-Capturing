import {google} from 'googleapis';
const {GOOGLE_SHEET_CLIENT_EMAIL,GOOGLE_SHEET_PRIVATE_KEY}= appConfig
import appConfig from '../config/appConfig.js';

const scopes =['https://www.googleapis.com/auth/spreadsheets']

const sheetClient = new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAIL, null, GOOGLE_SHEET_PRIVATE_KEY,scopes)

export const sheets = google.sheets({
    version:'v4',
    auth:sheetClient
})