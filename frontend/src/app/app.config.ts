import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter }        from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzI18n, en_US }  from 'ng-zorro-antd/i18n';
import { FormsModule }           from '@angular/forms';
import { provideNzIcons }        from 'ng-zorro-antd/icon';
import {
  GithubOutline, LinkedinOutline, MailOutline, DownloadOutline,
  ProjectOutline, UserOutline, EnvironmentOutline, CodeOutline,
  StarOutline, ReadOutline, FileTextOutline, LinkOutline,
  CalendarOutline, SendOutline, EyeOutline, GithubFill,
  TrophyOutline, FireOutline, PhoneOutline, CheckCircleOutline,
} from '@ant-design/icons-angular/icons';

import { routes }               from './app.routes';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';

const icons = [
  GithubOutline, LinkedinOutline, MailOutline, DownloadOutline,
  ProjectOutline, UserOutline, EnvironmentOutline, CodeOutline,
  StarOutline, ReadOutline, FileTextOutline, LinkOutline,
  CalendarOutline, SendOutline, EyeOutline, GithubFill,
  TrophyOutline, FireOutline, PhoneOutline, CheckCircleOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpErrorInterceptor])),
    provideAnimationsAsync(),
    provideNzI18n(en_US),
    provideNzIcons(icons),
    importProvidersFrom(FormsModule),
  ],
};
