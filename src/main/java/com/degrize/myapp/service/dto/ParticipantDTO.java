package com.degrize.myapp.service.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link com.degrize.myapp.domain.Participant} entity.
 */
@Schema(description = "Participant entity.\n@author MEDA.")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class ParticipantDTO implements Serializable {

    private Long id;

    /**
     * Nom de famille.\n@author MEDA.
     */
    @NotNull
    @Schema(description = "Nom de famille.\n@author MEDA.", required = true)
    private String nom;

    @NotNull
    private String prenom;

    /**
     * Numero à 10 chiffres.\n@author MEDA.
     */
    @Schema(description = "Numero à 10 chiffres.\n@author MEDA.")
    private String contact;

    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ParticipantDTO)) {
            return false;
        }

        ParticipantDTO participantDTO = (ParticipantDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, participantDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ParticipantDTO{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", prenom='" + getPrenom() + "'" +
            ", contact='" + getContact() + "'" +
            ", email='" + getEmail() + "'" +
            "}";
    }
}
