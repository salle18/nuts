import {shouldMockHttp} from '../app.config';
import {ApiServiceMock} from '../app.mocks';
import {ApiService} from '../services/api.service';

const providers = [];

if (shouldMockHttp) {
    providers.push({provide: ApiService, useClass: ApiServiceMock});
}

export const mockProviders = providers;
