import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

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

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_TEAMS);
  const [deleteTeam] = useMutation(DELETE_TEAM, {
    refetchQueries: [{ query: GET_TEAMS }],
  });

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
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <DisplayLocations />
    </div>
  );
}

export default App;
