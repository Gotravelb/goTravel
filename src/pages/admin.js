import React, { useEffect, useState } from "react";
const baseUrl = "/api";

const Admin = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/requests`)
      .then((response) => response.json())
      .then((data) => {
        setRequests(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-10 px-20">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Pick Up</th>
            <th>Drop</th>
            <th>Distance</th>
            <th>Date</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.name}</td>
              <td>{request.phoneno}</td>
              <td>{request.pickup}</td>
              <td>{request.drop}</td>
              <td>{request.distance}</td>
              <td>{request.date}</td>
              <td>{request.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
