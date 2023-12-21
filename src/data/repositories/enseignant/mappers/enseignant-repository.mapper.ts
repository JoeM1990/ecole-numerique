import { Mapper } from "src/base/mapper";
import { EnseignantEntity } from "../entities/enseignant-entity";
import { EnseignantModel } from "src/domain/models/enseignant.model";

export class EnseignantImplementationRepositoryMapper extends Mapper<EnseignantEntity, EnseignantModel> {
    mapFrom(param: EnseignantEntity): EnseignantModel {
        return {
            id: param.id,
            nom: param.nom,
            postnom: param.postnom,
            prenom: param.prenom,
            lieu: param.lieu,
            date: param.date,
            etat: param.etat,
            sexe: param.sexe,
            telephone: param.telephone,
            adresse: param.adresse,
        };
    }
    mapTo(param: EnseignantModel): EnseignantEntity {
        return {
            id: param.id,
            nom: param.nom,
            postnom: param.postnom,
            prenom: param.prenom,
            lieu: param.lieu,
            date: param.date,
            etat: param.etat,
            sexe: param.sexe,
            telephone: param.telephone,
            adresse: param.adresse,
        }
    }
}