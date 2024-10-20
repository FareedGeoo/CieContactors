import axios from "axios";

function handleApiResponse(response) {

    let res;
    if (response.status == 200 || response.status == 400) {
      res = response.data;
    } else if (response.status == 401) {
      res = {
        status: false,
        code: -1,
        message: "Unauthorized",
      };
    } else {
  
      res = {
        status: false,
        code: -1,
        message: "an error has been occured",
      };
    }
    return res;
  }


export default class ApiCaller {
    constructor (url){
        this.url = url;
    }

    async getData(){
        try{
      
            const response = await axios.get(this.url)
            return handleApiResponse(response)
        }catch(error){
            return handleApiResponse(error)
        }
    }

    async postData(body){
        try{
            const response = await axios.post(this.url,body)
            return handleApiResponse(response)
        }catch(error){
            return handleApiResponse(error)
        }
    }

    async putData(body){
        try{
            const response = await axios.put(this.url,body)
            return handleApiResponse(response)
        }catch(error){
            return handleApiResponse(error)
        }
    }
}