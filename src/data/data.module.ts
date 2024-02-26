import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserLoginUseCase } from '../domain/usecases/user-login.usecase';
import { UserRegisterUseCase } from '../domain/usecases/user-register.usecase';
import { GetUserProfileUseCase } from '../domain/usecases/get-user-profile.usecase';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { EnseignantRepository } from 'src/domain/repositories/enseignant.repository';
import { CreateEnseignantUseCase } from 'src/domain/usecases/create-enseignant.usecase';
import { EnseignantImplementationRepository } from './repositories/enseignant/enseignant-implementation.repository';
import { ReadEnseignantUseCase } from 'src/domain/usecases/read-enseignant.usecase';
import { ReadEnseignantByIdUseCase } from 'src/domain/usecases/get-enseignant-byId.usecase';
import { NgxSecureCookieService } from 'ngx-secure-cookie';
import { DeleteEnseignantByIdUseCase } from 'src/domain/usecases/delete-enseignantById.usecase';



const userLoginUseCaseFactory = 
    (userRepo: UserRepository) => new UserLoginUseCase(userRepo);
    export const userLoginUseCaseProvider = {
        provide: UserLoginUseCase,
        useFactory: userLoginUseCaseFactory,
        deps: [UserRepository],
    };

const userRegisterUseCaseFactory = 
    (userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
    export const userRegisterUseCaseProvider = {
        provide: UserRegisterUseCase,
        useFactory: userRegisterUseCaseFactory,
        deps: [UserRepository],
    };

const getUserProfileUseCaseFactory = 
    (userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
    export const getUserProfileUseCaseProvider = {
        provide: GetUserProfileUseCase,
        useFactory: getUserProfileUseCaseFactory,
        deps: [UserRepository],
    };


const createEnseigantUseCaseFactory = 
    (enseigantRepo: EnseignantRepository) => new CreateEnseignantUseCase(enseigantRepo);
    export const createEnseigantUseCaseProvider = {
        provide: CreateEnseignantUseCase,
        useFactory: createEnseigantUseCaseFactory,
        deps: [EnseignantRepository],
    };

const readEnseigantUseCaseFactory = 
    (enseigantRepo: EnseignantRepository) => new ReadEnseignantUseCase(enseigantRepo);
    export const readEnseigantUseCaseProvider = {
        provide: ReadEnseignantUseCase,
        useFactory: readEnseigantUseCaseFactory,
        deps: [EnseignantRepository],
    };

const readEnseigantByIdUseCaseFactory = 
    (enseigantRepo: EnseignantRepository) => new ReadEnseignantByIdUseCase(enseigantRepo);
    export const readEnseigantByIdUseCaseProvider = {
        provide: ReadEnseignantByIdUseCase,
        useFactory: readEnseigantByIdUseCaseFactory,
        deps: [EnseignantRepository],
    };

const deleteEnseigantByIdUseCaseFactory = 
    (enseigantRepo: EnseignantRepository) => new DeleteEnseignantByIdUseCase(enseigantRepo);
    export const deleteEnseigantByIdUseCaseProvider = {
        provide: DeleteEnseignantByIdUseCase,
        useFactory: readEnseigantByIdUseCaseFactory,
        deps: [EnseignantRepository],
    };


@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        createEnseigantUseCaseProvider,
        readEnseigantUseCaseProvider,
        readEnseigantByIdUseCaseProvider,
        deleteEnseigantByIdUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
        { provide: EnseignantRepository, useClass:EnseignantImplementationRepository}
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
