import {HttpClient} from '@angular/common/http';
import {APP_INITIALIZER} from '@angular/core';
import {TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const defaultLocale = 'en';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    const date = +new Date();
    return new TranslateHttpLoader(http, 'assets/i18n/', `.json?${date}`);
}

export const translateConfig = {
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
