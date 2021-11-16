import { PaddelLevelApiResponse } from './interfaces/paddel-level-api-response';
import { Constructor } from "@angular/material/core/common-behaviors/constructor";

export class User {
    id: number;
    rol: number;
    name: string;
    email: string;
    paddle_level: PaddelLevelApiResponse;

    constructor(){}
}
