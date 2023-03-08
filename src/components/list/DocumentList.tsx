import React, { useState } from "react";

// info
import { documentHeaderList } from "components/list/info/documentData";

// style
import "style/css/documentList.css";

function DocumentList(props: any) {
  const initselectedTitleType: string[] = [];
  const [selectedTitleType, setSelectedTitleType] = useState(
    initselectedTitleType
  );

  // 검색 필터 선택 제어 함수
  const handleSelectedTitleType = (target: string) => {
    if (selectedTitleType.indexOf(target) > -1) {
      setSelectedTitleType(
        selectedTitleType.filter((el) => {
          return el !== target;
        })
      );
    } else setSelectedTitleType([...selectedTitleType, target]);
  };

  return (
    <div className="document-list-container">
      <div className="document-list-header">
        <span className="title">DOCUMENT</span>
        <div className="document-list-header-container">
          {documentHeaderList.map((el, idx) => {
            return (
              <div
                className={`document-list-header-item ${
                  selectedTitleType.indexOf(el.key) > -1 ? "isSelected" : ""
                }`}
                key={`doocument-list-header-item-${el.key}`}
                onClick={() => handleSelectedTitleType(el.key)}
              >
                {el.value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DocumentList;
