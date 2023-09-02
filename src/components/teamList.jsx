import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Modal, Button } from "react-bootstrap";

export const GET_TEAMS = gql`
  {
    getAllTeams {
      id
      name
      presidenteName
      dtName
      value
    }
  }
`;

const DELETE_TEAM = gql`
  mutation DeleteTeam($id: ID!) {
    deleteTeam(id: $id)
  }
`;

const UPDATE_TEAM = gql`
  mutation UpdateTeam($id: ID!, $team: TeamInput!) {
    updateTeam(id: $id, team: $team) {
      id
      name
      presidenteName
      dtName
      value
    }
  }
`;

function TeamModal({ team, isOpen, onClose, onSave }) {
  const [editedTeam, setEditedTeam] = useState(team);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTeam({ ...editedTeam, [name]: value });
  };

  const handleSave = () => {
    onSave(editedTeam);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Equipo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={editedTeam.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Presidente</label>
          <input
            type="text"
            name="presidenteName"
            value={editedTeam.presidenteName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Entrenador</label>
          <input
            type="text"
            name="dtName"
            value={editedTeam.dtName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Valor</label>
          <input
            type="number"
            name="value"
            value={editedTeam.value}
            onChange={handleChange}
            className="form-control"
            readOnly
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TEAMS);
  const [deleteTeam] = useMutation(DELETE_TEAM, {
    refetchQueries: [{ query: GET_TEAMS }],
  });
  const [updateTeam] = useMutation(UPDATE_TEAM, {
    refetchQueries: [{ query: GET_TEAMS }],
  });
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDeleteTeam = (id) => {
    deleteTeam({ variables: { id } })
      .then(() => {
        console.log(`Equipo con ID ${id} eliminado con éxito.`);
      })
      .catch((err) => {
        console.error(`Error al eliminar el equipo con ID ${id}:`, err);
      });
  };

  const handleUpdateTeam = (updatedTeam) => {
    const { id, ...teamData } = updatedTeam;
    updateTeam({ variables: { id, team: teamData } })
      .then(() => {
        console.log(`Equipo con ID ${id} actualizado con éxito.`);
      })
      .catch((err) => {
        console.error(`Error al actualizar el equipo con ID ${id}:`, err);
      });
  };

  const openModal = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTeam(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {data.getAllTeams.map(({ id, name, presidenteName, dtName, value }) => (
        <div key={id} className="card m-2">
          <div className="card-body">
            <h4>{name}</h4>
            <p>{presidenteName}</p>
            <p>{dtName}</p>
            <p>{value}</p>
            <button
              onClick={() => handleDeleteTeam(id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
            <button
              onClick={() =>
                openModal({ id, name, presidenteName, dtName, value })
              }
              className="btn btn-primary"
            >
              Modificar
            </button>
          </div>
        </div>
      ))}
      {selectedTeam && (
        <TeamModal
          team={selectedTeam}
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleUpdateTeam}
        />
      )}
    </div>
  );
}

export default App;
