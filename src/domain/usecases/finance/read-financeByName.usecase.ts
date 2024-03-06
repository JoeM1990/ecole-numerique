import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { FinanceModel } from "src/domain/models/finance.model";
import { FinanceRepository } from "src/domain/repositories/finance.repository";

export class ReadFinanceByNameUseCase implements UseCase<void, FinanceModel> {

    constructor(private financeRepository: FinanceRepository) { }

    execute(categorie:any):Observable<any>{
        return this.financeRepository.readByName(categorie);
    }
    
}