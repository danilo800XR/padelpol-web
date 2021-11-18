import { Permission } from './../models/permission';
export class PermissionManager {

    private static roles: { [key: string]: Permission[] } = {
        "1": ["SEE_PLAYERS"],
        "2": ["SEE_PLAYERS"],
        "3": ["SEE_PLAYERS"],
        "4": ["SEE_PLAYERS"],
        "5": ["SEE_PLAYERS"],
        "6": ["UPDATE_GAME","SEE_PLAYERS"],
        "7": ["UPDATE_GAME","SEE_PLAYERS"],
        "8": ["UPDATE_GAME","SEE_PLAYERS"],
        "9": ["UPDATE_GAME","SEE_PLAYERS"],
        "10": ["UPDATE_GAME", "DELETE_GAME", "SEE_PLAYERS"]
    }

    static allow(rol: string, permission: Permission): boolean {
        return this.roles[rol].includes(permission);
    }

}
