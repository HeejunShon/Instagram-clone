const inputComment = document.getElementById("input-comment");
const commentDiv = document.getElementsByClassName("comment")[0];
const uploadButton = document.getElementsByClassName("input-button")[0];


let name = "heejun_sh";

// 댓글 작성
const uploadComment = () => {
    console.log("upload comment..");

    let div = document.createElement("div");
    
    let span = document.createElement("span");
    span.innerText = name;
    div.appendChild(span);
    
    let comment = document.createElement("p");
    comment.innerText = " " + inputComment.value; 
    div.appendChild(comment);

    commentDiv.appendChild(div);
    inputComment.value = ""
    buttonOff(uploadButton)
}

// 버튼 활성화
const buttonOn = (button) => {
    button.disabled = false;
    button.style.color = "#0095F6";
    button.style.cursor = "pointer";
}

//  버튼 비활성화
const buttonOff = (button) => {
    button.disabled = true;
    button.style.color = "lightskyblue";
    button.style.cursor = "default";
}

// 댓글 입력 엔터키
const getInputComment = inputComment.addEventListener("keyup", e => {
    if (e.key === "Enter" && inputComment.value != "") {
        uploadComment();
    }

    //댓글 입력 시 버튼 활성화
    if (inputComment.value != "") {
        buttonOn(uploadButton);
    } else {
        buttonOff(uploadButton);
    }
})

// 게시 버튼 클릭
const postClick = uploadButton.addEventListener("click", uploadComment);
