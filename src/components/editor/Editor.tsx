import React, { useEffect, useState } from "react";

// style
import "style/css/editor.css";

function Editor(props: any) {
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [bodyTextLength, setBodyTextLength] = useState(0);

  useEffect(() => {
    setBodyTextLength(bodyText.length);
  }, [bodyText]);

  return (
    <div className="editor-container ">
      <header className="editor-title-contianer">
        <div className="title-text">
          <span>REPOSEIDON</span>
        </div>
        <div className="sub-title-text">
          <span>서비스에 대한 간단한 설명(추가 필요)</span>
        </div>
      </header>
      <body className="editor-content-container">
        <div className="content-title-box">
          <div className="content-title-text">
            <span>제목</span>
          </div>
          <input
            className="content-title-input"
            placeholder="제목을 입력해주세요."
            value={titleText}
            onChange={(e: any) => setTitleText(e.target.value)}
          />
        </div>
        <textarea
          className="content-body-box"
          name=""
          id=""
          placeholder="본문 내용을 입력해주세요."
          value={bodyText}
          onChange={(e: any) => setBodyText(e.target.value)}
        ></textarea>
        <div className="editor-footer">
          <button className="save-button">파일 저장하기</button>
          <div className="tool-box">
            <div>
              <span>글자수:&nbsp;</span>
              <span className="text-length">{bodyTextLength}자</span>
            </div>

            <img src="" alt="" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Editor;
