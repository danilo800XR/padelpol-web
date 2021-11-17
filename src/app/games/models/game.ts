import { User } from './../../core/models/user';
import { PaddelLevelApiResponse } from './../../core/models/interfaces/paddel-level-api-response';
export class Game {

    id?: number;
    location: string;
    date: string;
    courtPrice: number;
    duration: number;
    paddleLevel: PaddelLevelApiResponse;
    player1: User;
    player2?: User;
    player3?: User;
    player4?: User;

    constructor(data: Game) {
        Object.assign(this, data);
    }
}
