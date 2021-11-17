import { PaddelLevelApiResponse } from './interfaces/paddel-level-api-response';
import { Constructor } from "@angular/material/core/common-behaviors/constructor";

export class User {
    id: number;
    rol: number;
    name: string;
    email: string;
    paddle_level: PaddelLevelApiResponse;

    constructor(data: User){
        this.id = data.id;
        this.rol = data.rol;
        this.name = data.name;
        this.email = data.email;
        this.paddle_level = data.paddle_level;
        //Object.assign(this, data);
    }
}
