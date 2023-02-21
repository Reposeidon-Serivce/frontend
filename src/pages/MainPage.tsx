import React, { useEffect, useState } from "react";

// components
import DocumentList from "components/list/DocumentList";
import Editor from "components/editor/Editor";

// style
import "style/css/mainPage.css";

function MainPage(props: any) {
  const [changeDirection, setChangeDirection] = useState(false);

  useEffect(() => {
    console.log(changeDirection);
  }, [changeDirection]);

  return (
    <div
      className={`main-page-wrap ${
        !changeDirection ? "base-direction" : "reverse-direction"
      }`}
    >
      <DocumentList />
      <Editor />
      <button
        className="change-direction-button"
        onClick={() => setChangeDirection(!changeDirection)}
      >
        change
      </button>
    </div>
  );
}

export default MainPage;
