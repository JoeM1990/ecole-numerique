import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
    abstract login(params: {email: string, password: string}): Observable<UserModel>;
    abstract register(params: {email: string, password: string}): Observable<UserModel>;
    abstract getUserProfile(): Observable<UserModel>;
}
