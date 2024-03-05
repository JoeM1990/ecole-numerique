import { Mapper } from "src/base/mapper";
import { FinanceModel } from "src/domain/models/finance.model";
import { FinanceEntity } from "../entities/finance-entity";

export class FinanceImplementationRepositoryMapper extends Mapper<FinanceEntity, FinanceModel> {
    mapFrom(param: FinanceEntity): FinanceModel {
        return {
            id: param.id,
            noms: param.noms,
            montant: param.montant,
            motif: param.motif,
            date: param.date,
            categorie: param.categorie,
        };
    }
    mapTo(param: FinanceModel): FinanceEntity {
        return {
            id: param.id,
            noms: param.noms,
            montant: param.montant,
            motif: param.motif,
            date: param.date,
            categorie: param.categorie,
        }
    }
}