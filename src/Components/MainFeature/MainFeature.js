import React, { useContext } from "react";

//context
import { URL } from "../../App";

//styles
import "./MainFeature.scss";

//utilities
import { shorten } from "../../Utilities/Utilities";

function MainFeature() {
  const { setLinkArray, setWebLink, webLink } = useContext(URL);

  const handleOnChange = (e) => {
    setWebLink(e.target.value);
  };

  const handleShortenLink = () => {
    shorten(webLink).then((data) => {
      if (data.ok) {
        setLinkArray((prev) => {
          return [
            ...prev,
            {
              original: data.result.original_link,
              shorten: data.result.short_link,
            },
          ];
        });
      }
    });
  };

  return (
    <div className="main-feature-container">
      <img
        alt="short"
        className="short"
        src={process.env.PUBLIC_URL + "/images/mobile/bg-shorten-mobile.svg"}
      />
      <input
        className="url-input"
        placeholder="Shorten a link here..."
        type="text"
        value={webLink}
        onChange={handleOnChange}
      />
      <button className="url-button" type="button" onClick={handleShortenLink}>
        Shorten It!
      </button>
    </div>
  );
}

export default MainFeature;
