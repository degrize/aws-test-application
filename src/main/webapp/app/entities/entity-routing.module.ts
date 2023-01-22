import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'participant',
        data: { pageTitle: 'testAwsApplicationApp.participant.home.title' },
        loadChildren: () => import('./participant/participant.module').then(m => m.ParticipantModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
