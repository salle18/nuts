import {EffectsModule} from '@ngrx/effects';

import {AccountsEffects} from './accounts.effect';
import {MessagesEffects} from './messages.effect';
import {TransactionsEffects} from './transactions.effect';
import {UserEffects} from './user.effect';

export const effects = [
    EffectsModule.run(AccountsEffects), EffectsModule.run(MessagesEffects),
    EffectsModule.run(TransactionsEffects), EffectsModule.run(UserEffects)
];
