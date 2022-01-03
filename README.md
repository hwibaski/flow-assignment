# flow-assignment

### 📗 기술 스택
---
- Front End
    - React / Styled-Component

- Back End
    - NodeJS / ExpressJS / MySQL / PrismaORM
<br>

### 📗 프로젝트를 시작하는 법
---
```bash
cd server
echo "DATABASE_URL=mysql://<dbID>:<dbPW>@<dbHost>:3306/<dbName>" > .env
souce setting_up.sh

cd client
npm install
```
<br>

### 🌈 Back-end 구현 기능
---
회원가입 / 로그인
- Kakao Login API를  활용한 소셜 로그인 기능 구현
- JWT, Bcrypt를 활용한 인증/인가 기능 구현 
- Express-Validator를 활용한 로그인 validation 미들웨어 구현

상세 페이지
- 각 상품의 상세페이지를 위한 API 제작
- 각 상품별 구매후기 API 제작 및 구매후기의 정렬 및 페이지네이션 구현

<br>

### DB 모델링
---
![image](https://user-images.githubusercontent.com/85930725/147902873-be9d9e07-6665-4087-a915-f5755723cc05.png)
<br>

### API 문서
---
[API 문서 링크](https://documenter.getpostman.com/view/16343905/UVRHj44E#2f4d0a9b-c8a1-4958-ba3a-9b923a71ad03)
<br>


