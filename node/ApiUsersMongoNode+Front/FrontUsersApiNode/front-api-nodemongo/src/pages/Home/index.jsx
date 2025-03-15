import { useEffect, useState, useRef, use } from "react";

import "./Style.css";

import Trash from "../../assets/icons8-lixo.svg";

import api from "../../services/api";

//-----------------------------------------------------------

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  //Funcao Get - Buscar Usuarios

  const getUsers = async () => {
    const usersFromApi = await api.get("/usuarios");

    setUsers(usersFromApi.data);

    console.log(users);
  };

  // Funcao Post - Criar usuário

  const postUsers = async () => {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })

    getUsers();
  };

  // Funcao Delete

  const deleteUsers = async (id) => {
    console.log(id);
    
    await api.delete(`/usuarios/${id}`);
    getUsers()
  };

  // UseEffect

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>

        <input placeholder="Nome" type="text" name="name" ref={inputName} />
        <input placeholder="Idade" type="number" name="age" ref={inputAge} />
        <input placeholder="Email" type="text" name="email" ref={inputEmail} />

        <button onClick={postUsers} type="button">
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
