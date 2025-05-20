import axios from "axios"

function SendData(params) {
    axios.post(`https://business-back-9rjw.onrender.com/create/user`, params)

}

export default SendData
