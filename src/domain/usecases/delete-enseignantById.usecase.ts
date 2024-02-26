import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { EnseignantEntity } from "src/data/repositories/enseignant/entities/enseignant-entity";
import { EnseignantModel } from "../models/enseignant.model";
import { EnseignantRepository } from "../repositories/enseignant.repository";

export class DeleteEnseignantByIdUseCase implements UseCase<void, EnseignantModel> {

    constructor(private enseignantRepository: EnseignantRepository) { }

    execute(id:any):Observable<any>{
        return this.enseignantRepository.deleteById(id);
    }
    
}