import React, { useEffect, useState } from "react";

// icon
import logoIcon from "assets/icons/logo_symbol.svg";
import searchIcon from "assets/icons/btn_search_inactive.svg";
import searchIconActive from "assets/icons/btn_search_active.svg";
import eraseIcon from "assets/icons/btn_erase.svg";

// style
import "style/css/editor.css";

function Editor(props: any) {
  /* 글자 상태 관리 */
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [bodyTextLength, setBodyTextLength] = useState(0);

  /* 검색 조회 상태 관리 */
  const [activeSearch, setActiveSearch] = useState(false);
  const [isSearchIconHover, setIsSearchIconHover] = useState(false);

  // 글자수 카운팅 기능
  useEffect(() => {
    setBodyTextLength(bodyText.length);
  }, [bodyText]);

  // 결과 데이터 여부에 따른 searchActive 기능 활성화/비활성화 처리
  useEffect(() => {
    if (props.resultData.length > 0) setActiveSearch(false);
  }, [props.resultData]);

  // 본문 에디터 초기화
  const eraseBodyText = () => {
    setBodyText("");
  };

  return (
    <div className="editor-container ">
      <header className="editor-title-contianer">
        <div className="title-text">
          <img className="logo-icon" src={logoIcon} alt="" />
          <span>REPOSEIDON</span>
        </div>
        <div className="sub-title-text">
          <span>서비스에 대한 간단한 설명(추가 필요)</span>
        </div>
      </header>
      <body className="editor-content-container">
        <div className="content-title-box">
          <div className="content-title-text">
            <label htmlFor="title-input">
              <span>제목</span>
            </label>
          </div>
          <input
            className="content-title-input"
            placeholder="제목을 입력해주세요."
            id="title-input"
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
        <img
          className="erase-icon"
          src={eraseIcon}
          alt=""
          onClick={eraseBodyText}
        />
        <div className="editor-footer">
          <button className="save-button">파일 저장하기</button>
          <div className="tool-box">
            <div>
              <span>글자수:&nbsp;</span>
              <span className="text-length">{bodyTextLength}자</span>
            </div>

            {!activeSearch && !isSearchIconHover ? (
              <img
                className="search-icon"
                onMouseOver={() => setIsSearchIconHover(true)}
                onMouseOut={() => setIsSearchIconHover(false)}
                src={searchIcon}
                alt=""
              />
            ) : (
              <img
                className="search-icon"
                onMouseOut={() => setIsSearchIconHover(false)}
                onClick={() => setActiveSearch(true)}
                src={searchIconActive}
                alt=""
              />
            )}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Editor;
