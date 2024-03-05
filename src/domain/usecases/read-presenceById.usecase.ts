import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { PresenceModel } from "../models/presence.model";
import { PresenceRepository } from "../repositories/presence.repository";

export class ReadPresenceByIdUseCase implements UseCase<void, PresenceModel> {

    constructor(private presenceRepository: PresenceRepository) { }

    execute(id:any):Observable<any>{
        return this.presenceRepository.readById(id);
    }
    
}