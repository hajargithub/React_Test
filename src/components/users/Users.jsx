import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const getAllUsers = () => {
    fetch("https://api.github.com/users")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        setUsers(response);
      })
      .catch((err) => console.log(err));
  };
  const goToCompte = (link) => {
    window.location.assign(link);
  };
  const deleteUser = (user) => {
    if (!confirm("Vous voulez vraiment supprimer le user!") == true) {
      return;
    }
    const index = users.indexOf(user);
    if (index !== -1) {
      const userdeleted = users.splice(index, 1);
      console.log(userdeleted);
      const newList = users.filter((user) => user != userdeleted);
      setUsers(newList);
    }
  };
  const supprimer = (idUser) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newListUsers = users.filter((item) => item.id != idUser);
        setUsers(newListUsers);
        Swal.fire({
          title: "Deleted",
          text: "User has been deleted",
          icon: "success",
          timerProgressBar: true,
          timer: 3000,
        });
      }
    });
    // if (confirm("Vous voulez vraiment supprimer le user!") == true) {
    //   const newListUsers = users.filter((item) => item.id != idUser);
    //   setUsers(newListUsers);
    // }
  };
  const findUser = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);

    if (inputValue.trim() === "") {
      setSearchResults([]);
    } else {
      // Fetch data and update searchResults
      fetch(`https://api.github.com/search/users?q=${inputValue}`)
        .then((res) => res.json())
        .then((response) => {
          const results = response.items;
          setSearchResults(
            results.filter((item) => item.login.startsWith(inputValue))
            // results.filter((item) => item.login==inputValue))
          );
          console.log(searchResults);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    console.log("Loading...");
    getAllUsers();
  }, []);

  return (
    <>
      <div className="row my-3">
        <div className="col-md-6">
          <h1>List of users</h1>
        </div>
        <div className="col-md-6 text-end">
          <input
            onChange={findUser}
            className="form-control"
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder="Search"
            //value={userlogin}
          ></input>
        </div>
        <div className="row my-3">
          {(searchResults.length > 0 ? searchResults : users).map(
            (user, index) => (
              <div className="col-md-3 my-2" key={index}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={user.avatar_url}
                    alt="Photo"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{user.login}</h4>
                    <button
                      className="btn btn-success my-1"
                      onClick={() => goToCompte(user.html_url)}
                    >
                      Visit compte
                    </button>

                    <a
                      className="btn btn-info"
                      href={user.html_url}
                      target="_blank"
                      // rel="noreferrer"
                    >
                      Read more...
                    </a>

                    <button
                      id={user.id}
                      className="btn btn-danger my-1"
                      onClick={() => supprimer(user.id)}
                    >
                      Supprimer
                    </button>
                    <button
                      id={user.id}
                      className="btn btn-danger m-1"
                      onClick={() => deleteUser(user)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
