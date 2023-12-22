import { Observable } from "rxjs";
import { EnseignantModel } from "../models/enseignant.model";

export abstract class EnseignantRepository {
    abstract create(enseigant:EnseignantModel): Observable<EnseignantModel>;
    abstract read(): Observable<EnseignantModel>;
    abstract update(enseigant:EnseignantModel): Observable<EnseignantModel>;
    abstract delete(enseigant:EnseignantModel): Observable<EnseignantModel>;
   
}