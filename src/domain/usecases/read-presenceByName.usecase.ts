import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { PresenceModel } from "../models/presence.model";
import { PresenceRepository } from "../repositories/presence.repository";

export class ReadPresenceByNameUseCase implements UseCase<void, PresenceModel> {

    constructor(private presenceRepository: PresenceRepository) { }

    execute(categorie:any):Observable<any>{
        return this.presenceRepository.readByName(categorie);
    }
    
}