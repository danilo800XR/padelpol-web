import { PaddelLevelApiResponse } from '../../core/models/interfaces/paddel-level-api-response';
export interface RegisterApiResponse {
    id: number,
    name: string,
    paddle_level_id: number,
    email: string,
    updated_at: string,
    created_at: string,
    paddle_level: PaddelLevelApiResponse
}
