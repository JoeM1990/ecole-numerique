import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxEncryptCookieService } from "ngx-encrypt-cookie";
import { Observable } from "rxjs";
import { FinanceModel } from "src/domain/models/finance.model";
import { FinanceRepository } from "src/domain/repositories/finance.repository";
import { FinanceEntity } from "./entities/finance-entity";
import { FinanceImplementationRepositoryMapper } from "./mappers/finance-repository.mapper";

@Injectable({
    providedIn: 'root',
})
export class FinanceImplementationRepository extends FinanceRepository {
 

    baseUrl='http://localhost:8080/api/';
    //baseUrl2='https://61a1077b6c3b400017e69b7c.mockapi.io/enseignant'

    financeMapper = new FinanceImplementationRepositoryMapper();

    constructor(private http: HttpClient, private cookie:NgxEncryptCookieService) {
        super();
    }

    create(finance:FinanceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
       

        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);

        return this.http
            .post<FinanceEntity>(this.baseUrl+'finance', finance,{headers: {
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
            .get<FinanceEntity>(this.baseUrl+'finance', {headers: {
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
            .get<FinanceEntity>(this.baseUrl+'finance/'+id, {headers: {
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
            .get<FinanceEntity>(this.baseUrl+'finance/?categorie='+categorie, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    update(finance:FinanceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
     
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .put<FinanceEntity>(this.baseUrl+'finance/'+finance.id, finance, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})
            
    }

    delete(finance:FinanceModel): Observable<any> {

        let key_app = this.cookie.get('key_app', false);
        let token = this.cookie.get('token', true, key_app);
        
 
       
        const  headers =  new HttpHeaders();
        headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set('x-access-token',  token);


        return this.http
            .delete<FinanceEntity>(this.baseUrl+'finance/'+finance.id, {headers: {
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
            .delete<FinanceEntity>(this.baseUrl+'finance/'+id, {headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token':  token
            }})     
    }

    
}
