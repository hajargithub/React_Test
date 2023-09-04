import React from "react";

function ListUser() {
  return (
    <>
      <h3 className="my-4"> List Of Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ahmed</td>
            <td>Harkaoui</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Haroune</td>
            <td>Harkaoui</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Youssra</td>
            <td>Fakhoury</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Saad</td>
            <td>Khayate</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
