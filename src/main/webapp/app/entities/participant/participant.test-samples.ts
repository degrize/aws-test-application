import { IParticipant, NewParticipant } from './participant.model';

export const sampleWithRequiredData: IParticipant = {
  id: 35428,
  nom: 'Plastic wireless',
  prenom: 'optical',
};

export const sampleWithPartialData: IParticipant = {
  id: 5031,
  nom: 'Executif Agent magnetic',
  prenom: 'Handmade bypassing',
  contact: 'Russie Chips',
};

export const sampleWithFullData: IParticipant = {
  id: 52678,
  nom: 'expedite',
  prenom: 'e-business Steel b',
  contact: 'systems transmitter Bretagne',
  email: 'Stanislas_Blanc93@hotmail.fr',
};

export const sampleWithNewData: NewParticipant = {
  nom: 'auxiliary',
  prenom: 'Grocery circuit',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
