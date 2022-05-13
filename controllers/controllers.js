import { Usuario } from "../models/models.js";

class UserController{

    static createUser(body){
        const user = new Usuario(...body)
    }
}