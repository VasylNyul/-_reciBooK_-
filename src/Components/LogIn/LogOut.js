import axios from 'axios';

function LogOut() {

    axios.get(`http://127.0.0.1:9091/LogOut.php`, { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', } })

}

export default LogOut