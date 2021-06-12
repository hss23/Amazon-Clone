import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-446f0.cloudfunctions.net/api"

    //'http://localhost:5001/clone-446f0/us-central1/api' //Api URL
});

export default instance;