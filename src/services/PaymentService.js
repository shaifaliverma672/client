import axios from 'axios';

//const PAYMENT_API_BASE_URL = "http://localhost:8080/springfox/api/payments";

class PaymentService {

    getPayment(){
        return axios.get("http://localhost:8080/springfox/api/payments/all");
    }
    addPayment(payment){
        return axios.post("http://localhost:8080/springfox/api/payments/insert",payment);
    }
    deletePayment(paymentId){
        return axios.delete("http://localhost:8080/springfox/api/payments/delete"+'/'+ paymentId);
    }
    

    
}

export default new PaymentService()