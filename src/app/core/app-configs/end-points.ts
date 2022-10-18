import {environment} from 'src/environments/environment';

export class EndPoints {
    /**
     * @description: Url end-point base
     */
    static urlBase(url: string): string {
        return environment.urlApi+ url;
    } 
}
