import React from 'react';
import Table from '../table/index';
import '../../stylesheets/app.css';

const Lobby = ({
  status,
  joined,
}) => ((!joined) ? (
  <div className="lobby-container">
    <div className="text">{ status }</div>
  </div>
) : (
  <Table/>
));

export default Lobby;
