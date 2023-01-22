export interface IParticipant {
  id: number;
  nom?: string | null;
  prenom?: string | null;
  contact?: string | null;
  email?: string | null;
}

export type NewParticipant = Omit<IParticipant, 'id'> & { id: null };
