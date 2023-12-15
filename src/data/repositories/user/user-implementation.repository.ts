import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserModel } from '../../../domain/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    baseUrl='http://localhost:8080';
    
    userMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(params: {email: string, password: string}): Observable<any> {
        return this.http
            .post<UserEntity>(this.baseUrl+'/api/auth/login', {params})
            .pipe(map(this.userMapper.mapFrom));
    }

    register(user:UserModel): Observable<any> {
       return this.http
            .post<UserEntity>(this.baseUrl+'/api/auth/register', user)
            .pipe(map(this.userMapper.mapFrom));
    }
    
    getUserProfile(): Observable<UserModel>{
        return this.http.get<UserEntity>('https://example.com/user').pipe(
            map(this.userMapper.mapFrom));
    }
}
