import React, { useContext } from "react";
import copy from "copy-to-clipboard";

//context
import { URL } from "../../App";

//styles
import "./LinkMods.scss";

function LinkMods() {
  const { linkArray } = useContext(URL);

  return (
    <div className="link-mods-container">
      {linkArray.map((link) => {
        return (
          <div className="link-card" key={link.shorten}>
            {link.original.length > 30 ? (
              <p>{link.original.substring(0, 29) + "..."}</p>
            ) : (
              <p>{link.original}</p>
            )}
            <hr />
            <p style={{ color: "#2bd0d0" }}>{link.shorten}</p>
            <button
              type="button"
              onClick={() => {
                copy(link.shorten);
                alert(`${link.shorten} copied`);
              }}
            >
              Copy
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default LinkMods;
