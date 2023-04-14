# 운정사주타로 관리자 웹

## 1. 개발기간
2022.12 ~ 2023.03

## 2. 개발 환경

```bash
> npm (v8.5.5)
> node (v16.15.0)
> react (v18.2.0)
```

## 3. 설치 및 실행
```bash
$ npm install
$ npm start
```

## 4. 사용기술
<img src="https://img.shields.io/badge/React.js-17b6e7?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a>&nbsp;

## 5. 구현내용
- react-jwt라이브러리를 사용하여 토큰 만료 시 메인으로 redirect함
- 로그인 시, 캘린더에 당월예약여부 api에서 예약이 존재하는 날만 활성화 한 후, 날짜를 누르면 해당일 예약 API를 호출하게끔 구현

![화면 기록 2023-03-02 오후 4 33 52](https://user-images.githubusercontent.com/68591616/231917907-19473d1b-4f51-44db-8de0-0d4ad484eeee.gif)

- 캘린더의 임의의 날짜를 눌러 휴가등록을 하면, 사용자 웹의 해당 날짜 예약이 전부 비활성화 되며, 해당 일의 예약자가 있다면 예약취소 연락조회에 뜨게 됨

![화면 기록 2023-03-02 오후 4 35 39](https://user-images.githubusercontent.com/68591616/231917911-50d6d455-33e8-4513-9b52-eedd887d031f.gif)
