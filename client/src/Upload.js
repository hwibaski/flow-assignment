function Upload() {
  return (
    <div className="Upload">
      <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="userfile" />
        <button type="submit">업로드</button>
      </form>
    </div>
  );
}

export default Upload;