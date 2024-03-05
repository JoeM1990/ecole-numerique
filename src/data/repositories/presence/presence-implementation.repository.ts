import { Injectable } from "@angular/core";
import { PresenceImplementationRepositoryMapper } from "./mappers/presence-repository.mapper";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgxEncryptCookieService } from "ngx-encrypt-cookie";
import { PresenceModel } from "src/domain/models/presence.model";
import { Observable } from "rxjs";
import { PresenceEntity } from "./entities/presence-entity";
import { PresenceRepository } from "src/domain/repositories/presence.repository";

@Injectable({
    providedIn: 'root',
})
export class PresenceImplementationRepository extends PresenceRepository {

    baseUrl='http://localhost:8080/api/';
    //baseUrl2='https://61a1077b6c3b400017e69b7c.mockapi.io/enseignant'

    presenceMapper = new PresenceImplementationRepositoryMapper();

    constructor(private http: HttpClient, private cookie:NgxEncryptCookieService) {
        super();
    }

    create(presence:PresenceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        return this.http
            .post<PresenceEntity>(this.baseUrl+'presence', presence,{headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
           
    }

    read():Observable<any>{

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        // console.log(headers.get('x-access-token')+'token');
        // console.log('token :'+token);
        // console.log('key app :'+key_app);

        return this.http
            .get<PresenceEntity>(this.baseUrl+'presence', {headers: {
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

        // console.log(headers.get('x-access-token'))


        return this.http
            .get<PresenceEntity>(this.baseUrl+'presence/'+id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }


    readByName(categorie:any):Observable<any>{

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        // console.log(headers.get('x-access-token'))


        return this.http
            .get<PresenceEntity>(this.baseUrl+'presence/?categorie='+categorie, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    update(presence:PresenceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
     
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .put<PresenceEntity>(this.baseUrl+'presence/'+presence.id, presence, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    delete(presence:PresenceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
 
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .delete<PresenceEntity>(this.baseUrl+'presence/'+presence.id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
           
    }

    deleteById(id:any): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token', token);


        return this.http
            .delete<PresenceEntity>(this.baseUrl+'presence/'+id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})     
    }

    
}
