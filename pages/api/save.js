import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const fromBase64 = value => {
    const buff = Buffer.from(value, 'base64')
    return buff.toString('ascii')
}

const gerarCupom = () => {
    const cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return cupom.substr(0,4) + '-' + cupom.substr(4,4) + '-' + cupom.substr(8,4)
}


export default async(req, res) => {
    try{

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
    
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        console.log(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')
        
        const mostrarPromocaoCell = sheetConfig.getCell(2,0)
        const textoCell = sheetConfig.getCell(2,1)

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocaoCell.value === 'VERDADEIRO') {
            Cupom = gerarCupom()
            Promo = textoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: 5,
            Data: moment().format('DD/MM/YYYY HH:mm:ss'),
            Cupom,
            Promo
    
        })
        res.end(req.body)
        
    
    } catch (err) {
        console.log(err)
    }
}