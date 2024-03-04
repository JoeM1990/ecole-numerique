import { Mapper } from "src/base/mapper";
import { PresenceEntity } from "../entities/presence-entity";
import { PresenceModel } from "src/domain/models/presence.model";


export class PresenceImplementationRepositoryMapper extends Mapper<PresenceEntity, PresenceModel> {
    mapFrom(param: PresenceEntity): PresenceModel {
        return {
            id: param.id,
            noms: param.noms,
            date: param.date,
            heureA: param.heureA,
            heureS: param.heureS,
            categorie: param.categorie,
        };
    }
    mapTo(param: PresenceModel): PresenceEntity {
        return {
            id: param.id,
            noms: param.noms,
            date: param.date,
            heureA: param.heureA,
            heureS: param.heureS,
            categorie: param.categorie,
        }
    }
}