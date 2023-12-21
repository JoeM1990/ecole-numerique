import { Mapper } from "src/base/mapper";
import { EnseignantEntity } from "../entities/enseignant-entity";
import { EnseignantModel } from "src/domain/models/enseignant.model";

export class EnseignantImplementationRepositoryMapper extends Mapper<EnseignantEntity, EnseignantModel> {
    mapFrom(param: EnseignantEntity): EnseignantModel {
        return {
            id: param.id,
            email: param.email,
            username: param.username,
            password: param.password,
            role: param.role,
            status: param.status,
            accessToken: param.accessToken
        };
    }
    mapTo(param: EnseignantModel): EnseignantEntity {
        return {
            id: param.id,
            username: param.username,
            email: param.email,
            password: param.password,
            role: param.role,
            status: param.status,
            accessToken: param.accessToken
        }
    }
}