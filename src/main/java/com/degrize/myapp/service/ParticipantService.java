package com.degrize.myapp.service;

import com.degrize.myapp.service.dto.ParticipantDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link com.degrize.myapp.domain.Participant}.
 */
public interface ParticipantService {
    /**
     * Save a participant.
     *
     * @param participantDTO the entity to save.
     * @return the persisted entity.
     */
    ParticipantDTO save(ParticipantDTO participantDTO);

    /**
     * Updates a participant.
     *
     * @param participantDTO the entity to update.
     * @return the persisted entity.
     */
    ParticipantDTO update(ParticipantDTO participantDTO);

    /**
     * Partially updates a participant.
     *
     * @param participantDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<ParticipantDTO> partialUpdate(ParticipantDTO participantDTO);

    /**
     * Get all the participants.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<ParticipantDTO> findAll(Pageable pageable);

    /**
     * Get the "id" participant.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<ParticipantDTO> findOne(Long id);

    /**
     * Delete the "id" participant.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
