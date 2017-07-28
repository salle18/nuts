import {EffectsModule} from '@ngrx/effects';

import {AccountsEffects} from './accounts.effect';
import {TransactionsEffects} from './transactions.effect';

export const effects = [EffectsModule.run(AccountsEffects), EffectsModule.run(TransactionsEffects)];
