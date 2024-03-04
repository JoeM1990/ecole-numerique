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
import { UpdateEnseignantUseCase } from 'src/domain/usecases/update-enseignant.usecase';
import { PresenceRepository } from 'src/domain/repositories/presence.repository';
import { PresenceImplementationRepository } from './repositories/presence/presence-implementation.repository';
import { CreatePresenceUseCase } from 'src/domain/usecases/create-presence.usecase';
import { ReadPresenceUseCase } from 'src/domain/usecases/read-presence.usecase';
import { UpdatePresenceUseCase } from 'src/domain/usecases/update-presence.usecase';
import { DeletePresenceByIdUseCase } from 'src/domain/usecases/delete-presenceById.usecase';
import { ReadPresenceByIdUseCase } from 'src/domain/usecases/read-presenceById.usecase';



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


//For teacher

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
        useFactory: deleteEnseigantByIdUseCaseFactory,
        deps: [EnseignantRepository],
    };


const updateEnseigantByIdUseCaseFactory = 
    (enseigantRepo: EnseignantRepository) => new UpdateEnseignantUseCase(enseigantRepo);
    export const updateEnseigantUseCaseProvider = {
        provide: UpdateEnseignantUseCase,
        useFactory: updateEnseigantByIdUseCaseFactory,
        deps: [EnseignantRepository],
    };


//For presence

const createPresenceUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new CreatePresenceUseCase(presenceRepo);
    export const createPresenceUseCaseProvider = {
        provide: CreatePresenceUseCase,
        useFactory: createPresenceUseCaseFactory,
        deps: [PresenceRepository],
    };

const readPresenceUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new ReadPresenceUseCase(presenceRepo);
    export const readPresenceUseCaseProvider = {
        provide: ReadPresenceUseCase,
        useFactory: readPresenceUseCaseFactory,
        deps: [PresenceRepository],
    };

const readPresenceByIdUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new ReadPresenceByIdUseCase(presenceRepo);
    export const readPresenceByIdUseCaseProvider = {
        provide: ReadPresenceByIdUseCase,
        useFactory: readPresenceByIdUseCaseFactory,
        deps: [PresenceRepository],
    };

const deletePresenceByIdUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new DeletePresenceByIdUseCase(presenceRepo);
    export const deletePresenceByIdUseCaseProvider = {
        provide: DeletePresenceByIdUseCase,
        useFactory: deletePresenceByIdUseCaseFactory,
        deps: [EnseignantRepository],
    };


const updatePresenceByIdUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new UpdatePresenceUseCase(presenceRepo);
    export const updatePresenceUseCaseProvider = {
        provide: UpdatePresenceUseCase,
        useFactory: updatePresenceByIdUseCaseFactory,
        deps: [PresenceRepository],
    };


@NgModule({
    providers: [
        userLoginUseCaseProvider,
        userRegisterUseCaseProvider,
        getUserProfileUseCaseProvider,
        createEnseigantUseCaseProvider,
        readEnseigantUseCaseProvider,
        readEnseigantByIdUseCaseProvider,
        updateEnseigantUseCaseProvider,
        deleteEnseigantByIdUseCaseProvider,
        createPresenceUseCaseProvider,
        readPresenceUseCaseProvider,
        readPresenceByIdUseCaseProvider,
        updatePresenceUseCaseProvider,
        deletePresenceByIdUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
        { provide: EnseignantRepository, useClass:EnseignantImplementationRepository},
        { provide: PresenceRepository, useClass:PresenceImplementationRepository}
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
