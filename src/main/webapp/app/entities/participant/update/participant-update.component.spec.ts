import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { ParticipantFormService } from './participant-form.service';
import { ParticipantService } from '../service/participant.service';
import { IParticipant } from '../participant.model';

import { ParticipantUpdateComponent } from './participant-update.component';

describe('Participant Management Update Component', () => {
  let comp: ParticipantUpdateComponent;
  let fixture: ComponentFixture<ParticipantUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let participantFormService: ParticipantFormService;
  let participantService: ParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ParticipantUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(ParticipantUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ParticipantUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    participantFormService = TestBed.inject(ParticipantFormService);
    participantService = TestBed.inject(ParticipantService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const participant: IParticipant = { id: 456 };

      activatedRoute.data = of({ participant });
      comp.ngOnInit();

      expect(comp.participant).toEqual(participant);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IParticipant>>();
      const participant = { id: 123 };
      jest.spyOn(participantFormService, 'getParticipant').mockReturnValue(participant);
      jest.spyOn(participantService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ participant });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: participant }));
      saveSubject.complete();

      // THEN
      expect(participantFormService.getParticipant).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(participantService.update).toHaveBeenCalledWith(expect.objectContaining(participant));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IParticipant>>();
      const participant = { id: 123 };
      jest.spyOn(participantFormService, 'getParticipant').mockReturnValue({ id: null });
      jest.spyOn(participantService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ participant: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: participant }));
      saveSubject.complete();

      // THEN
      expect(participantFormService.getParticipant).toHaveBeenCalled();
      expect(participantService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IParticipant>>();
      const participant = { id: 123 };
      jest.spyOn(participantService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ participant });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(participantService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
