import { UseCase } from "src/base/use-case";
import { EnseignantRepository } from "../repositories/enseignant.repository";
import { EnseignantModel } from "../models/enseignant.model";
import { Observable } from "rxjs";
import { EnseignantEntity } from "src/data/repositories/enseignant/entities/enseignant-entity";

export class UpdateEnseignantUseCase implements UseCase<EnseignantModel, EnseignantEntity> {

    constructor(private enseignantRepository: EnseignantRepository) { }

    execute(enseigant:EnseignantModel): Observable<any> {
        return this.enseignantRepository.update(enseigant);
    }
    
}