import React from "react";

function AdminFeed({ changeView,setMain }) {
  return (
    <div>
      <div className="main">
        <h2>Welcome Admin </h2>
        <button
          className="adminButtons"
          onClick={() => changeView("createTeacher")}
        >
          Create Teacher
        </button>
        <br></br>
        <button
          className="adminButtons"
          onClick={() => changeView("schoolstat")}
        >
          Statistics
        </button>

        <br></br>
        <button
          className="adminButtons"
          onClick={() => changeView("teacherList")}
        >
          Teachers List
        </button>
        <br></br>
        <button
          className="adminButtons"
          onClick={() => {setMain('main')  }  }
        >
          deconnection
        </button>
      </div>
    </div>
  );
}

export default AdminFeed;
