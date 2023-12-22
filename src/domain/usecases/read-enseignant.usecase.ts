import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { EnseignantEntity } from "src/data/repositories/enseignant/entities/enseignant-entity";
import { EnseignantModel } from "../models/enseignant.model";
import { EnseignantRepository } from "../repositories/enseignant.repository";

export class ReadEnseignantUseCase implements UseCase<void, EnseignantModel> {

    constructor(private enseignantRepository: EnseignantRepository) { }

    execute():Observable<any>{
        return this.enseignantRepository.read();
    }
    
}