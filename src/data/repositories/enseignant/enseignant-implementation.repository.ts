import { Injectable } from "@angular/core";
import { EnseignantRepository } from "src/domain/repositories/enseignant.repository";
import { EnseignantImplementationRepositoryMapper } from "./mappers/enseignant-repository.mapper";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { EnseignantModel } from "src/domain/models/enseignant.model";
import { EnseignantEntity } from "./entities/enseignant-entity";

@Injectable({
    providedIn: 'root',
})
export class EnseignantImplementationRepository extends EnseignantRepository {

    baseUrl='http://localhost:8080';
    
    
    enseignantMapper = new EnseignantImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    create(enseignant:EnseignantModel): Observable<any> {
        return this.http
            .post<EnseignantEntity>(this.baseUrl+'/api/enseigant', enseignant)
            .pipe(map(this.enseignantMapper.mapFrom));
    }

    
}
