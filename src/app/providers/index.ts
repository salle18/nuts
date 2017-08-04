import {mockProviders} from './mock.providers';
import {translateInitializerProvider} from './translate.provider';

export const providers = [translateInitializerProvider, ...mockProviders];

export {translateConfigProvider} from './translate.provider';
