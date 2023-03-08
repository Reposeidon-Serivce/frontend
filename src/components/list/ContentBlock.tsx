import React, { useEffect, useState } from "react";

// icon
import isActive from "assets/icons/scrap_active.svg";
import isInActive from "assets/icons/scrap_inactive.svg";

// style
import "style/css/documentList.css";

/**
 * 개별 콘텐츠 블록
 * @param *data(object) : 각 content-block의 데이터
 * @param *isBookMarked(boolean) : 북마크 처리 유무
 * @returns
 */
function ContentBlock(props: any) {
  const [contentData, setContentData] = useState(props.data);

  useEffect(() => {
    setContentData(props.data);
  }, [props.data]);

  // BE API 완성되면 각 content-block 내부의 데이터 추출 방법은 수정 필요
  return (
    <div className="content-block-wrap">
      <div className="content-block-title">
        <span>{contentData.title}</span>
        <div className="content-block-bookmark">
          {props.isBookMarked ? (
            <img src={isActive} alt="bookmarked" className="bookmark-icon" />
          ) : (
            <img src={isInActive} alt="" className="bookmark-icon" />
          )}
        </div>
      </div>

      <div className="content-block-body-text">{contentData.text}</div>
      <a href={contentData.url} className="content-block-url">
        {contentData.url}
      </a>
    </div>
  );
}

export default ContentBlock;
