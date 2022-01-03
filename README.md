# flow-assignment

### 📗 기술 스택

---

- Client

  - React / Styled-Component

- Server
  - NodeJS / ExpressJS / MySQL / PrismaORM

<br>

### 🚀 프로젝트를 시작하는 법 및 소개

---

```bash
cd server
echo "DATABASE_URL=mysql://<dbID>:<dbPW>@<dbHost>:3306/<dbName>" > .env
source setting_up.sh

cd client
npm install
npm start
```

- http://localhost:3000/config - 파일 확장자 차단 설정 페이지
- http://localhost:3000/upload - 파일 업로드를 테스트 하기 위한 업로드 페이지
- 파일 업로드 시 `server` 디렉토리의 `uploads` 디렉토리에 저장됩니다.

<br>

### 🌈 구현 기능

---

- [x] 고정 확장자 체크 상태에 따라 해당 확장자 업로드 차단
- [x] 커스텀 확장자 추가 및 삭제 기능
- [x] 확장자 최대 입력 길이 20자리 제한
- [x] 커스텀 확장자 최대 200개 제한
- [x] 확장자 중복 체크
- [x] 확장자에 특수 문자 및 대문자 입력 시 데이터 추가 제한
- [x] 리셋 버튼 클릭 시 고정 확장자 체크 해제, 커스텀 확장자 모두 삭제 기능 구현

<br>

### 🌈 테스트 화면

--- 
![Jan-03-2022 15-23-16](https://user-images.githubusercontent.com/85930725/147904380-f6b8d258-4f28-446a-ad23-9e3bc145c0fc.gif)
![Jan-03-2022 15-31-52](https://user-images.githubusercontent.com/85930725/147904534-c46dc86b-5fb1-456f-8e61-2af1834fc28f.gif)



### DB 모델링

---

![image](https://user-images.githubusercontent.com/85930725/147905426-ca4ab00a-ae91-4c96-959c-f769e3d328c8.png)
<br>

### API 문서

---

[API 문서 링크](https://documenter.getpostman.com/view/16343905/UVRHj44E#2f4d0a9b-c8a1-4958-ba3a-9b923a71ad03)
<br>
