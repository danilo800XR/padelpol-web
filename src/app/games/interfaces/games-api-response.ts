import { User } from './../../core/models/user';
import { PaddelLevelApiResponse } from './../../core/models/interfaces/paddel-level-api-response';
export interface GamesApiResponse {
    id: number,
    court_price: number,
    date: string,
    duration: number,
    location: string,
    paddle_level: PaddelLevelApiResponse,
    player1: User,
    player2: User | null,
    player3: User | null,
    player4: User | null
}
