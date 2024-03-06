import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { FinanceEntity } from "src/data/repositories/finance/entities/finance-entity";
import { FinanceModel } from "src/domain/models/finance.model";
import { FinanceRepository } from "src/domain/repositories/finance.repository";

export class CreateFinanceUseCase implements UseCase<FinanceModel, FinanceEntity> {

    constructor(private financeRepository: FinanceRepository) { }

    execute(finance:FinanceModel): Observable<any> {
        return this.financeRepository.create(finance);
    }
    
}