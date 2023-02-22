import React, { useEffect, useState } from "react";

// components
import DocumentList from "components/list/DocumentList";
import Editor from "components/editor/Editor";

// style
import "style/css/mainPage.css";

function MainPage(props: any) {
  /* 좌우 반전 기능 상태 관리 */
  const [changeDirection, setChangeDirection] = useState(false);

  /* 조회 결과 데이터 상태 관리 */
  const [resultData, setResultData] = useState([]);

  // react-query로 데이터 페칭 기능 받아오고, resultData 업데이트 처리하는 로직 추가 개발 필요
  // API 자체는 services에 넣고, react-query로 받아오는 기능은 hook 형태로 뺀뒤, 함수 자체만 가져와 쓰는 편이 좋을 것 같다는 생각!!

  return (
    <div
      className={`main-page-wrap ${
        !changeDirection ? "base-direction" : "reverse-direction"
      }`}
    >
      <Editor resultData={resultData} />
      <DocumentList />

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
