import { Observable } from "rxjs";
import { PresenceModel } from "../../models/presence.model";
import { PresenceRepository } from "../../repositories/presence.repository";
import { UseCase } from "src/base/use-case";
import { PresenceEntity } from "src/data/repositories/presence/entities/presence-entity";

export class UpdatePresenceUseCase implements UseCase<PresenceModel, PresenceEntity> {

    constructor(private presenceRepository: PresenceRepository) { }

    execute(presence:PresenceModel): Observable<any> {
        return this.presenceRepository.update(presence);
    }
    
}