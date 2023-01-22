import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IParticipant, NewParticipant } from '../participant.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IParticipant for edit and NewParticipantFormGroupInput for create.
 */
type ParticipantFormGroupInput = IParticipant | PartialWithRequiredKeyOf<NewParticipant>;

type ParticipantFormDefaults = Pick<NewParticipant, 'id'>;

type ParticipantFormGroupContent = {
  id: FormControl<IParticipant['id'] | NewParticipant['id']>;
  nom: FormControl<IParticipant['nom']>;
  prenom: FormControl<IParticipant['prenom']>;
  contact: FormControl<IParticipant['contact']>;
  email: FormControl<IParticipant['email']>;
};

export type ParticipantFormGroup = FormGroup<ParticipantFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ParticipantFormService {
  createParticipantFormGroup(participant: ParticipantFormGroupInput = { id: null }): ParticipantFormGroup {
    const participantRawValue = {
      ...this.getFormDefaults(),
      ...participant,
    };
    return new FormGroup<ParticipantFormGroupContent>({
      id: new FormControl(
        { value: participantRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      nom: new FormControl(participantRawValue.nom, {
        validators: [Validators.required],
      }),
      prenom: new FormControl(participantRawValue.prenom, {
        validators: [Validators.required],
      }),
      contact: new FormControl(participantRawValue.contact),
      email: new FormControl(participantRawValue.email),
    });
  }

  getParticipant(form: ParticipantFormGroup): IParticipant | NewParticipant {
    return form.getRawValue() as IParticipant | NewParticipant;
  }

  resetForm(form: ParticipantFormGroup, participant: ParticipantFormGroupInput): void {
    const participantRawValue = { ...this.getFormDefaults(), ...participant };
    form.reset(
      {
        ...participantRawValue,
        id: { value: participantRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ParticipantFormDefaults {
    return {
      id: null,
    };
  }
}
