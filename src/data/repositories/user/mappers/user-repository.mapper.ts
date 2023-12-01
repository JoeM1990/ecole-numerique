import { Mapper } from '../../../../base/mapper';
import { UserModel } from '../../../../domain/models/user.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            username: param.username,
            password: param.password,
            role: param.role,
            status: param.status,
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
            id: param.id,
            username: param.username,
            password: param.password,
            role: param.role,
            status: param.status,
        }
    }
}