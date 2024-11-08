import {google} from 'googleapis';
import config from '../config/config';
const {GOOGLE_SHEET_CLIENT_EMAIL,GOOGLE_SHEET_PRIVATE_KEY}=config

const scopes =['https://www.googleapis.com/auth/spreadsheets']

const sheetClient = new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAIL,null, GOOGLE_SHEET_PRIVATE_KEY,scopes)

export const sheets = google.sheets({
    version:"v4",
    auth:sheetClient
})