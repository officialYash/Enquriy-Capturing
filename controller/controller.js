import { ZodError } from 'zod'
import {enquirySchema} from '../helper/validator.js'
import { sheets } from '../service/googleSheet.js'
import appConfig from '../config/appConfig.js'
import dayjs from 'dayjs'

const {GOOGLE_SHEET_ID} = appConfig
export const enquiryController = (req,res) =>{
    try {

        // 1. Body validator
        const body = enquirySchema.parse(req.body)
        const {name,emailAddress,category, message}=body
        console.log(name , category , emailAddress , message)

        const currentDate = dayjs().format("DD-MM-YYYY");
        // 2. Google Sheet Entry
        sheets.spreadsheets.values
        .append({
            spreadsheetId: GOOGLE_SHEET_ID,
            range:"Enquiry!A:D",
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[name, emailAddress, category, message,currentDate]]
            }
        })
        .catch((err) => {
            console.error(err.response.data.error)
        })

        // 3. Response
        res.status(201).json({
            success:true,
            message:'SUCCESS'
        })
    } catch (err) {
        if( err instanceof ZodError)
        {
            return res.status(422).json({success:false,
                message:err.errors
            })
        }
        res.sendStatus(500)
    }

}