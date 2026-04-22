import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter }        from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzI18n, en_US }  from 'ng-zorro-antd/i18n';
import { FormsModule }           from '@angular/forms';
import { provideNzIcons }        from 'ng-zorro-antd/icon';
import {
  GithubOutline, LinkedinOutline, MailOutline, DownloadOutline,
  ProjectOutline, UserOutline, EnvironmentOutline, CodeOutline,
  StarOutline, ReadOutline, FileTextOutline, LinkOutline,
  CalendarOutline, SendOutline, EyeOutline, GithubFill,
  TrophyOutline, FireOutline, PhoneOutline, CheckCircleOutline, ClockCircleOutline, RocketOutline,
} from '@ant-design/icons-angular/icons';

import { routes }               from './app.routes';

const icons = [
  GithubOutline, LinkedinOutline, MailOutline, DownloadOutline,
  ProjectOutline, UserOutline, EnvironmentOutline, CodeOutline,
  StarOutline, ReadOutline, FileTextOutline, LinkOutline,
  CalendarOutline, SendOutline, EyeOutline, GithubFill,
  TrophyOutline, FireOutline, PhoneOutline, CheckCircleOutline, ClockCircleOutline, RocketOutline,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNzI18n(en_US),
    provideNzIcons(icons),
    importProvidersFrom(FormsModule),
  ],
};
