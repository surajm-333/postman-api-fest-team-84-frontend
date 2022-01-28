import './UploadFormStyle.css'

function UploadBook() {
    return (
        <>
            <div class="center">
                <h1>Upload Book</h1>
                <form>
                    <div class="inputbox">
                        <input type="text" id='bookName' required="required" />
                        <span>Book Name</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" id='genera' required="required" />
                        <span>Genera</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" id='author' required="required" />
                        <span>Author</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" id='downloadURL' required="required" />
                        <span>Download URL</span>
                    </div>
                    <div class="inputbox">
                        <input type="text" id='thumbnailURL' required="required" />
                        <span>Thumbnail URL</span>
                    </div>
                    <div class="inputbox">
                        <input type="button" value="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default UploadBook;