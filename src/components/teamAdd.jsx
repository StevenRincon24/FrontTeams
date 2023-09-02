import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useNavigate } from "react-router-dom";
import { GET_TEAMS } from "./teamList";
import Alert from "react-bootstrap/Alert";

const CREATE_TEAM = gql`
  mutation CreateTeam($team: TeamInput!) {
    createTeam(team: $team) {
      id
      name
      presidenteName
      dtName
      value
    }
  }
`;

export default function TeamForm(props) {
  const [name, setName] = useState("");
  const [presidenteName, setPresidenteName] = useState("");
  const [dtName, setDtName] = useState("");
  const [value, setValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createTeam] = useMutation(CREATE_TEAM, {
    refetchQueries: [{ query: GET_TEAMS }],
  });

  const navigate = useNavigate();

  const handleCreateTeam = async () => {
    try {
      const { data } = await createTeam({
        variables: {
          team: {
            name,
            presidenteName,
            dtName,
            value: parseFloat(value),
          },
        },
      });
      const createdTeam = data.createTeam;
      setSuccessMessage(
        `El equipo "${createdTeam.name}" se ha creado exitosamente.`
      );
      setErrorMessage(""); // Limpia el mensaje de error
    } catch (error) {
      setSuccessMessage(""); // Limpia el mensaje de éxito
      setErrorMessage(
        "Hubo un error al crear el equipo. Por favor, inténtalo de nuevo."
      ); // Establece el mensaje de error
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateTeam();
                navigate("/");
              }}
            >
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="President Name"
                  value={presidenteName}
                  onChange={(e) => setPresidenteName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Coach Name"
                  value={dtName}
                  onChange={(e) => setDtName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <input
                  type="number"
                  placeholder="Value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
