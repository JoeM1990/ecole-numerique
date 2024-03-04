import { Observable } from "rxjs";
import { PresenceRepository } from "../repositories/presence.repository";
import { UseCase } from "src/base/use-case";
import { PresenceModel } from "../models/presence.model";

export class ReadPresenceByIdUseCase implements UseCase<void, PresenceModel> {

    constructor(private presenceRepository: PresenceRepository) { }

    execute(id:any):Observable<any>{
        return this.presenceRepository.readById(id);
    }
    
}