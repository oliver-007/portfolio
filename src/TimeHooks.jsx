import React, { useState } from "react";

function TimeHooks() {
  const [time, settime] = useState(new Date().toLocaleTimeString());

  const handelClick = () => {
    settime(new Date().toLocaleTimeString());
  };

  setInterval(handelClick, 1000);
  return (
    <div>
      <h1
        style={{
          color: "violet",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {time}
      </h1>
      {/* <button type="button" onClick={handelClick}>
        Get Time
      </button> */}
    </div>
  );
}

export default TimeHooks;
