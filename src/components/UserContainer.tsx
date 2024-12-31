import { useState } from "react";
import type { CustomError, User } from "../types";
import { UserList } from "./UserList";
import { CustomButton } from "./CustomButton";

export const UserContainer = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [urlAPI, setUrlAPI] = useState<string>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [urlRota, setUrlRota] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);

    fetch(urlAPI)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.map((user: User) => user));
      })
      .catch((error: CustomError) => {
        error.message = "Ops! Algo salio mal durante el fetching!🫠";
        error.wasModified = true;
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleShowUsers = () => {
    setShowUsers(true);
  };

  const handleGetUsers = () => {
    getUsers();
  };

  const handleReiniciar = () => {
    setUsers(null);
    setShowUsers(false);
    setUrlAPI("https://jsonplaceholder.typicode.com/users");
    setUrlRota(false);
  };

  const handleRomperURL = () => {
    setUrlAPI("https://jsonplaceholder.typicode.XXX/users");
    setUrlRota(true);
  };

  if (error) {
    console.log(error);
    throw error;
  }

  return (
    <>
      <div className="user-container">
        {loading && <h3>Cargando...</h3>}
        {!showUsers && !users?.length && !loading && (
          <h3>No hay usuarios aún...</h3>
        )}
        {(users?.length as number) > 0 && !showUsers && (
          <h3>Usuarios cargados.</h3>
        )}
        {showUsers && <UserList userList={users} />}
      </div>
      <div className="boton-container">
        <CustomButton onClick={handleShowUsers}>
          {users?.length
            ? "Mostrar lista de usuarios"
            : "Mostrar lista vacia (ROMPER)"}
        </CustomButton>
        <CustomButton onClick={handleGetUsers}>Obtener usuarios</CustomButton>
        <CustomButton onClick={handleRomperURL} disabled={urlRota}>
          Modificar URL(ROMPER)
        </CustomButton>
        <CustomButton onClick={handleReiniciar}>Reiniciar</CustomButton>
      </div>
    </>
  );
};
