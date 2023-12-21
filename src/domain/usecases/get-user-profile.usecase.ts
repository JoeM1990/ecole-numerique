import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, UserModel> {

    constructor(private userRepository: UserRepository) { }

    execute(): Observable<UserModel> {
        return this.userRepository.getUserProfile();
    }
    
}
