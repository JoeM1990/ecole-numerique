import { Observable } from 'rxjs';
import { UseCase } from '../../../base/use-case';
import { UserModel } from '../../models/user.model';
import { UserRepository } from '../../repositories/user.repository';

export class UserLoginUseCase implements UseCase<{ email: string; password: string }, UserModel> {

    constructor(private userRepository: UserRepository) { }

    execute(
       params: { email: string, password: string },
    ): Observable<any> {
        return this.userRepository.login(params);
    }

    
}
