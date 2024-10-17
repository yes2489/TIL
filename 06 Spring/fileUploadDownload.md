# File Upload & Download

## File Upload

### 파일 업로드

- 클라이언트가 서버로 파일을 전송하는 과정을 말함
- 여러 개의 파일을 업로드 할 수 있음

### 기존 방식의 form

- 기존에 사용하던 <form>은 문자 위주의 데이터를 사용
- enctype=”application/x-www-form-urlencoded” 기본값(생략가능)
- HTTP Body에 문자로 key=value 형태로 전송하고, 여러 개의 데이터라면 `&` 기호를 통해 구분
    
    ```html
    <h3>기존 form 사용법</h3>
    <form action="..." method="GET or POST" enctype="application/x-www-form-urlencoded">
    	<input type="text" name="...">
    	<input type="text" name="...">
    	<input type="submit">
    </form>
    ```
    

### 파일 업로드 방식의 form

- 파일은 문자가 아닌 **바이너리 데이터**를 전송
- 파일만 전송하는 것이 아니라 다른 데이터를 같이 전송하기도 함
- enctype=”multipart/form-data”, method=”POST” 필수
- 여러 개의 파일을 업로드 하고 싶다면 multiple=”multiple” 속성 추가 필요
    
    ```html
    <h3>파일 업로드 form 사용법</h3>
    <form action="..." method="POST" enctype="multipart/form-data">
    	<input type="text" name="...">
    	<input type="file" name="...">
    	<input type="submit">
    </form>
    
    <h3>파일(여러개)업로드 form 사용법</h3>
    <form action="..." method="POST" enctype="multipart/form-data">
    	<input type="text" name="...">
    	<input type="file" name="..." multiple="multiple">
    	<input type="submit">
    </form>
    ```
    

### MultipartFile

- Spring Framework에서 파일 업로드를 처리하기 위한 **인터페이스**
- 파일의 내용은 메모리에 저장되거나, 디스크에 임시로 저장
    - 용량 제한 : 1MB (파일 하나당)
    - 요청 1회당 제한 :
- 사용자가 원하는 대로 세션수준 또는 영구 저장소에 파일의 내용을 복사할 책임이 있음
- 임시 저장소는 요청이 끝나면 삭제
- getOriginalFilename() : 업로드 파일 명
- **transferTo()** : 파일 저장

## File Download

### 파일 다운로드

- 서버에 있는 파일을 클라이언트에게 전송하는 과정을 말함

### 파일 다운로드 view 생성하기

- AbstractView를 상속하여 FileDownLoadView 작성
    
    `public class FileDownLoadView extends AbstractView {`
    
- renderMergedOutputModel 메서드 재정의
    
    ```java
    private ResourceLoader resourceLoader;
    
    public FileDownloadView(ResourceLoader resourceLoader) {
    	this.resourceLoader = resourceLoader;
    }
    
    @Override
    protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request,
    							HttpServletResponse response) throws Exception {
    							
    	/////////////////////////////////////////////////////////////
    	// 사전 준비
    	String fileName = (String) model.get("fileName");
    	Resource resource = resourceLoader.getResource("classpath:/static/img");
    	File file = new File(resource.getFile(), fileName);
    	/////////////////////////////////////////////////////////////
    	
    	/////////////////////////////////////////////////////////////
    	// 파일 다운로드 설정
    	response.setContentType(getContentType());
    	response.setContentLength((int) file.length());
    	
    	fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1"); // 한글 방식을 안전하게 처리할 수 있게 해줌
    	response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\";");
    	response.setHeader("Content-Transfer-Encoding", "binary");
    	/////////////////////////////////////////////////////////////
    	
    	try(FileInputStream fis = new FileInputStream(file); 
    			OutputStream os = response.getOutputStream();) {
    			
    			FileCopyUtils.copy(fis, os);
    	}
    }
    ```
