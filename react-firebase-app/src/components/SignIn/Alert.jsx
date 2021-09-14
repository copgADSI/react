import React, { useState } from "react";

export function Alert(/* { props } */) {
  const [hidde, setHidde] = useState("alert alert-success alert-dismissible fade show");
  const handleHidde = (e) => {
    setHidde(
      hidde === "alert alert-success alert-dismissible fade show"
        ? "alert alert-success alert-dismissible fade show visually-hidden"
        : "alert alert-success alert-dismissible fade show"
    );    
  };
  return (
    <div className={`${hidde}`} role="alert">
      <strong>Holy guacamole!</strong> New User created successfully!
      <button
        onClick={(e) => handleHidde(e)}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
