import React from "react";

function SideBar() {
  return (
    <>
      <h1>Menu</h1>
      {/*  ZenCoding Emmet :ul.list-group>(list.list-group-item>a{Item $})*10 */}
      <ul className="list-group">
        <li className="list-group-item">
          <a href="">item 1</a>
        </li>
        <li className="list-group-item">
          <a href="">item 2</a>
        </li>
        <li className="list-group-item">
          <a href="">item 3</a>
        </li>
        <li className="list-group-item">
          <a href="">item 4</a>
        </li>
        <li className="list-group-item">
          <a href="">item 5</a>
        </li>
        <li className="list-group-item">
          <a href="">item 6</a>
        </li>
        <li className="list-group-item">
          <a href="">item 7</a>
        </li>
        <li className="list-group-item">
          <a href="">item 8</a>
        </li>
        <li className="list-group-item">
          <a href="">item 9</a>
        </li>
        <li className="list-group-item">
          <a href="">item 10</a>
        </li>
      </ul>
    </>
  );
}

export default SideBar;
