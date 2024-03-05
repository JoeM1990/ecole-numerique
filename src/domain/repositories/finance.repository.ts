import { Observable } from "rxjs";
import { FinanceModel } from "../models/finance.model";

export abstract class FinanceRepository {
    abstract create(finance:FinanceModel): Observable<FinanceModel>;
    abstract read():any;
    abstract readById(id:any):any;
    abstract readByName(categorie:any):any;
    abstract update(finance:FinanceModel): Observable<FinanceModel>;
    abstract delete(finance:FinanceModel): Observable<FinanceModel>;
    abstract deleteById(id:any): any;
}