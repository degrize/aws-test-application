package com.degrize.myapp.service.mapper;

import com.degrize.myapp.domain.Participant;
import com.degrize.myapp.service.dto.ParticipantDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Participant} and its DTO {@link ParticipantDTO}.
 */
@Mapper(componentModel = "spring")
public interface ParticipantMapper extends EntityMapper<ParticipantDTO, Participant> {}
