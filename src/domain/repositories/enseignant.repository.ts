import { Observable } from "rxjs";
import { EnseignantModel } from "../models/enseignant.model";

export abstract class EnseignantRepository {
    abstract create(enseigant:EnseignantModel): Observable<EnseignantModel>;
    abstract read():any;
    abstract readById(id:any):any;
    abstract update(enseigant:EnseignantModel): Observable<EnseignantModel>;
    abstract delete(enseigant:EnseignantModel): Observable<EnseignantModel>;
    abstract deleteById(id:any): any;
}