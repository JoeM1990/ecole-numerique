import { UseCase } from "src/base/use-case";
import { PresenceModel } from "../../models/presence.model";
import { PresenceEntity } from "src/data/repositories/presence/entities/presence-entity";
import { PresenceRepository } from "../../repositories/presence.repository";
import { Observable } from "rxjs";

export class CreatePresenceUseCase implements UseCase<PresenceModel, PresenceEntity> {

    constructor(private presenceRepository: PresenceRepository) { }

    execute(presence:PresenceModel): Observable<any> {
        return this.presenceRepository.create(presence);
    }
    
}