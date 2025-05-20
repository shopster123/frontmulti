import axios from "axios"

function SendData(params) {
    axios.post(`https://metaback-f8gb.onrender.com/create/user`, params)

}

export default SendData
