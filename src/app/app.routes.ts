import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { TopicsListComponent } from './components/admin/topics/topics-list/topics-list.component';
import { TopicsCreateComponent } from './components/admin/topics/topics-create/topics-create.component';

export const routes: Routes = [

    {'path':'login',  component:  LoginComponent},
    {'path':'admin/home', component: HomeComponent},
    {'path':'admin/topics', component: TopicsListComponent},
    {'path':'admin/topics/create', component: TopicsCreateComponent},
];
