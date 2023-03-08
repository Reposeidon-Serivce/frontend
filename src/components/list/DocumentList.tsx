import React, { useEffect, useState } from "react";

// info
import { documentHeaderList } from "components/list/info/documentData";

// components
import ContentBlock from "components/list/ContentBlock";

// style
import "style/css/documentList.css";

// test data
import { testData } from "components/list/test/testData";

function DocumentList(props: any) {
  /** 선택된 filter 값 제어 상태 관리 */
  const initselectedTitleType: string[] = [];
  const [selectedTitleType, setSelectedTitleType] = useState(
    initselectedTitleType
  );

  /** 서버로부터 받아온 data 상태 관리 */
  const initData: any[] = [];
  const [data, setData] = useState(initData);

  /** bookmarked data 상태 관리 */
  const initbookmarkedList: string[] = [];
  const [bookmarkedList, setBookmarkedList] = useState(initbookmarkedList);

  //  !!!테스트!!!
  useEffect(() => {
    setData(testData);
  }, []);

  useEffect(() => {
    console.log(bookmarkedList);
  }, [bookmarkedList]);

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

  // bookmark 제어 함수
  const handleBookmark = (target: string) => {
    if (bookmarkedList.indexOf(target) > -1) {
      setBookmarkedList(
        bookmarkedList.filter((el) => {
          return el !== target;
        })
      );
    } else setBookmarkedList([...bookmarkedList, target]);
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
                key={`doocument-list-header-item-${idx}`}
                onClick={() => handleSelectedTitleType(el.key)}
              >
                {el.value}
              </div>
            );
          })}
        </div>
      </div>
      <div className="document-list-body">
        {data.map((el, idx) => {
          return (
            <div
              key={`document-list-content-block-${idx}`}
              onClick={() => handleBookmark(el.key)}
            >
              <ContentBlock
                data={el}
                isBookMarked={
                  bookmarkedList.indexOf(el.key) > -1 ? true : false
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DocumentList;
