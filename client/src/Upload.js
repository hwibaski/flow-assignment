function Upload() {
  return (
    <div className='Upload'>
      <form
        action='http://localhost:8000/upload'
        method='post'
        encType='multipart/form-data'
      >
        <input type='file' name='userfile' />
        <button type='submit'>업로드</button>
      </form>
    </div>
  );
}

export default Upload;
