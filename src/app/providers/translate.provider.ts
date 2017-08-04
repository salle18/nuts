import {HttpClient} from '@angular/common/http';
import {APP_INITIALIZER} from '@angular/core';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {defaultLocale, translationsExtension, translationsLocation} from '../app.config';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    const date = +new Date();
    return new TranslateHttpLoader(http, translationsLocation, `.${translationsExtension}?${date}`);
}

export const translateConfigProvider = {
    loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]}
};

export function InitTranslateService(
    translateService: TranslateService, language: string = defaultLocale): Function {
    return () => {
        translateService.setDefaultLang(defaultLocale);
        translateService.use(language);
    };
}

export const translateInitializerProvider = {
    provide: APP_INITIALIZER,
    useFactory: InitTranslateService,
    deps: [TranslateService],
    multi: true
};
