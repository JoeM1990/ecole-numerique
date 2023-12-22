import { Injectable } from "@angular/core";
import { EnseignantRepository } from "src/domain/repositories/enseignant.repository";
import { EnseignantImplementationRepositoryMapper } from "./mappers/enseignant-repository.mapper";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { EnseignantModel } from "src/domain/models/enseignant.model";
import { EnseignantEntity } from "./entities/enseignant-entity";
import { NgxSecureCookieService } from "ngx-secure-cookie/lib/ngx-secure-cookie.service";

@Injectable({
    providedIn: 'root',
})
export class EnseignantImplementationRepository extends EnseignantRepository {

    baseUrl='http://localhost:8080';
    baseUrl2='https://61a1077b6c3b400017e69b7c.mockapi.io/enseignant'

    enseignantMapper = new EnseignantImplementationRepositoryMapper();

    constructor(private http: HttpClient, private cookie:NgxSecureCookieService) {
        super();
    }

    create(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .post<EnseignantEntity>(this.baseUrl+'/api/enseigant', enseignant, {headers: headers})
            .pipe(map(this.enseignantMapper.mapTo));
    }

    read(): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .get<EnseignantEntity>(this.baseUrl2)
            .pipe(map(this.enseignantMapper.mapFrom));
    }

    update(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .put<EnseignantEntity>(this.baseUrl+'/api/enseigant/'+enseignant.id, enseignant, {headers: headers})
            .pipe(map(this.enseignantMapper.mapFrom));
    }

    delete(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .delete<EnseignantEntity>(this.baseUrl+'/api/enseigant'+enseignant.id, {headers: headers})
            .pipe(map(this.enseignantMapper.mapFrom));
    }

    
}
