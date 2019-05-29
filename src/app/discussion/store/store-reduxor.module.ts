import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
// -- IMPORT SERVICES --
import { DiscussionService } from './discussion/discussion.service';

@NgModule({
    imports: [
        StoreModule.forFeature('discussions-app', reducers, { metaReducers }),
        EffectsModule.forFeature([...AllEffects]),
        StoreDevtoolsModule.instrument()
    ],
    exports: [],
    providers: [
        // -- PROVIDERS --
        DiscussionService
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}
