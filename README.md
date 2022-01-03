# flow-assignment

### 📗 기술 스택

---

- Front End

  - React / Styled-Component

- Back End - NodeJS / ExpressJS / MySQL / PrismaORM
  <br>

### 📗 프로젝트를 시작하는 법

---

```bash
cd server
echo "DATABASE_URL=mysql://<dbID>:<dbPW>@<dbHost>:3306/<dbName>" > .env
source setting_up.sh

cd client
npm install
```

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

### DB 모델링

---

![image](https://user-images.githubusercontent.com/85930725/147902873-be9d9e07-6665-4087-a915-f5755723cc05.png)
<br>

### API 문서

---

[API 문서 링크](https://documenter.getpostman.com/view/16343905/UVRHj44E#2f4d0a9b-c8a1-4958-ba3a-9b923a71ad03)
<br>
