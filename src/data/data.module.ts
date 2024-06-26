import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserLoginUseCase } from '../domain/usecases/user/user-login.usecase';
import { UserRegisterUseCase } from '../domain/usecases/user/user-register.usecase';
import { GetUserProfileUseCase } from '../domain/usecases/user/get-user-profile.usecase';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { EnseignantRepository } from 'src/domain/repositories/enseignant.repository';
import { CreateEnseignantUseCase } from 'src/domain/usecases/enseignant/create-enseignant.usecase';
import { EnseignantImplementationRepository } from './repositories/enseignant/enseignant-implementation.repository';
import { ReadEnseignantUseCase } from 'src/domain/usecases/enseignant/read-enseignant.usecase';
import { ReadEnseignantByIdUseCase } from 'src/domain/usecases/enseignant/get-enseignant-byId.usecase';
import { NgxSecureCookieService } from 'ngx-secure-cookie';
import { DeleteEnseignantByIdUseCase } from 'src/domain/usecases/enseignant/delete-enseignantById.usecase';
import { UpdateEnseignantUseCase } from 'src/domain/usecases/enseignant/update-enseignant.usecase';
import { PresenceRepository } from 'src/domain/repositories/presence.repository';
import { PresenceImplementationRepository } from './repositories/presence/presence-implementation.repository';
import { CreatePresenceUseCase } from 'src/domain/usecases/presence/create-presence.usecase';
import { ReadPresenceUseCase } from 'src/domain/usecases/presence/read-presence.usecase';
import { UpdatePresenceUseCase } from 'src/domain/usecases/presence/update-presence.usecase';
import { DeletePresenceByIdUseCase } from 'src/domain/usecases/presence/delete-presenceById.usecase';
import { ReadPresenceByIdUseCase } from 'src/domain/usecases/presence/read-presenceById.usecase';
import { ReadPresenceByNameUseCase } from 'src/domain/usecases/presence/read-presenceByName.usecase';
import { FinanceRepository } from 'src/domain/repositories/finance.repository';
import { FinanceImplementationRepository } from './repositories/finance/finance-implementation.repository';
import { CreateFinanceUseCase } from 'src/domain/usecases/finance/create-finance.usecase';
import { UpdateFinanceUseCase } from 'src/domain/usecases/finance/update-finance.usecase';
import { DeleteFinanceByIdUseCase } from 'src/domain/usecases/finance/delete-presenceById.usecase';
import { ReadFinanceByNameUseCase } from 'src/domain/usecases/finance/read-financeByName.usecase';
import { ReadFinanceUseCase } from 'src/domain/usecases/finance/read-finance.usecase';
import { ReadFinanceByIdUseCase } from 'src/domain/usecases/finance/read-financeById.usecase';



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


const readPresenceByNameUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new ReadPresenceByNameUseCase(presenceRepo);
    export const readPresenceByNameUseCaseProvider = {
        provide: ReadPresenceByNameUseCase,
        useFactory: readPresenceByNameUseCaseFactory,
        deps: [PresenceRepository],
    };

const deletePresenceByIdUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new DeletePresenceByIdUseCase(presenceRepo);
    export const deletePresenceByIdUseCaseProvider = {
        provide: DeletePresenceByIdUseCase,
        useFactory: deletePresenceByIdUseCaseFactory,
        deps: [PresenceRepository],
    };


const updatePresenceByIdUseCaseFactory = 
    (presenceRepo: PresenceRepository) => new UpdatePresenceUseCase(presenceRepo);
    export const updatePresenceUseCaseProvider = {
        provide: UpdatePresenceUseCase,
        useFactory: updatePresenceByIdUseCaseFactory,
        deps: [PresenceRepository],
    };

//for finance
const createFinanceUseCaseFactory = 
    (financeRepo: FinanceRepository) => new CreateFinanceUseCase(financeRepo);
    export const createFinanceUseCaseProvider = {
        provide: CreateFinanceUseCase,
        useFactory: createFinanceUseCaseFactory,
        deps: [FinanceRepository],
    };

const readFinanceUseCaseFactory = 
    (financeRepo: FinanceRepository) => new ReadFinanceUseCase(financeRepo);
    export const readFinanceUseCaseProvider = {
        provide: ReadFinanceUseCase,
        useFactory: readFinanceUseCaseFactory,
        deps: [FinanceRepository],
    };

const readFinanceByIdUseCaseFactory = 
    (financeRepo: FinanceRepository) => new ReadFinanceByIdUseCase(financeRepo);
    export const readFinanceByIdUseCaseProvider = {
        provide: ReadFinanceByIdUseCase,
        useFactory: readFinanceByIdUseCaseFactory,
        deps: [FinanceRepository],
    };


const readFinanceByNameUseCaseFactory = 
    (financeRepo: FinanceRepository) => new ReadFinanceByNameUseCase(financeRepo);
    export const readFinanceByNameUseCaseProvider = {
        provide: ReadFinanceByNameUseCase,
        useFactory: readFinanceByNameUseCaseFactory,
        deps: [FinanceRepository],
    };

const deleteFinanceByIdUseCaseFactory = 
    (financeRepo: FinanceRepository) => new DeleteFinanceByIdUseCase(financeRepo);
    export const deleteFinanceByIdUseCaseProvider = {
        provide: DeleteFinanceByIdUseCase,
        useFactory: deleteFinanceByIdUseCaseFactory,
        deps: [FinanceRepository],
    };


const updateFinanceByIdUseCaseFactory = 
    (financeRepo: FinanceRepository) => new UpdateFinanceUseCase(financeRepo);
    export const updateFinanceUseCaseProvider = {
        provide: UpdateFinanceUseCase,
        useFactory: updateFinanceByIdUseCaseFactory,
        deps: [FinanceRepository],
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
        readPresenceByNameUseCaseProvider,
        updatePresenceUseCaseProvider,
        deletePresenceByIdUseCaseProvider,
        createFinanceUseCaseProvider,
        readFinanceUseCaseProvider,
        readFinanceByIdUseCaseProvider,
        readFinanceByNameUseCaseProvider,
        updateFinanceUseCaseProvider,
        deleteFinanceByIdUseCaseProvider,
        { provide: UserRepository, useClass: UserImplementationRepository },
        { provide: EnseignantRepository, useClass: EnseignantImplementationRepository},
        { provide: PresenceRepository, useClass: PresenceImplementationRepository},
        { provide: FinanceRepository, useClass: FinanceImplementationRepository}
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
