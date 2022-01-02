import styled from 'styled-components';

function Upload() {
  return (
    <UploadWrapper>
      <form
        action='http://localhost:8000/upload'
        method='post'
        encType='multipart/form-data'
      >
        <input type='file' name='userfile' />
        <button type='submit'>업로드</button>
      </form>
    </UploadWrapper>
  );
}

export default Upload;

const UploadWrapper = styled.div`
  padding: 30px;
  font-family: 'Noto Sans KR', 'Roboto', 'Malgun Gothic', '맑은 고딕', helvetica,
    'Apple SD Gothic Neo', sans-serif;
`;
