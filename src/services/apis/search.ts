import interceptor from "services/interceptor";

// 사용자 입력 데이터 핵심어 추출 요청 API
export function getExtractKeyWord(textData: object) {
  return interceptor({
    url: "",
    method: "post",
    data: textData,
  });
}

// 사용자 입력 데이터에 대한 크롤링 정보 추출 요청 API
export function getSearchData(userToken: string, textData: object) {
  return interceptor({
    url: "",
    method: "post",
    headers: {
      Authorization: userToken,
    },
    data: textData,
  });
}
