import { Injectable } from "@angular/core";
import { EnseignantRepository } from "src/domain/repositories/enseignant.repository";
import { EnseignantImplementationRepositoryMapper } from "./mappers/enseignant-repository.mapper";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { EnseignantModel } from "src/domain/models/enseignant.model";
import { EnseignantEntity } from "./entities/enseignant-entity";
import { NgxEncryptCookieService } from "ngx-encrypt-cookie";

@Injectable({
    providedIn: 'root',
})
export class EnseignantImplementationRepository extends EnseignantRepository {

    baseUrl='http://localhost:8080/api/';
    //baseUrl2='https://61a1077b6c3b400017e69b7c.mockapi.io/enseignant'

    enseignantMapper = new EnseignantImplementationRepositoryMapper();

    constructor(private http: HttpClient, private cookie:NgxEncryptCookieService) {
        super();
    }

    create(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        return this.http
            .post<EnseignantEntity>(this.baseUrl+'enseigant', enseignant, {headers: headers})
           
    }

    read():Observable<any>{

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       
        // const  headers =  new HttpHeaders();
        // headers.set('Content-Type', 'application/json; charset=utf-8');
        // headers.set('x-access-token',  token);

        // console.log(headers.get('x-access-token')+'token');
        console.log('token :'+token);
        console.log('key app :'+key_app);


        return this.http
            .get<EnseignantEntity>(this.baseUrl+'enseignant', {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    readById(id:any):Observable<any>{

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        console.log(headers.get('x-access-token'))


        return this.http
            .get<EnseignantEntity>(this.baseUrl+'enseignant/'+id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    update(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
     
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .put<EnseignantEntity>(this.baseUrl+'enseigant/'+enseignant.id, enseignant, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    delete(enseignant:EnseignantModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
 
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .delete<EnseignantEntity>(this.baseUrl+'enseigant/'+enseignant.id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
           
    }

    
}
