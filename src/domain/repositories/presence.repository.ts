import { Observable } from "rxjs";
import { PresenceModel } from "../models/presence.model";

export abstract class PresenceRepository {
    abstract create(presence:PresenceModel): Observable<PresenceModel>;
    abstract read():any;
    abstract readById(id:any):any;
    abstract update(presence:PresenceModel): Observable<PresenceModel>;
    abstract delete(presence:PresenceModel): Observable<PresenceModel>;
    abstract deleteById(id:any): any;
}