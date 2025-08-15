// 좋아요
const noLikeBtn = document.querySelector(".like-btn img:nth-child(1)"); // 하얀 하트
const likeBtn = document.querySelector(".like-btn img:nth-child(2)");   // 빨간 하트
const likeCount = document.getElementById("like-count"); // 좋아요 개수 span

// 초기 상태
noLikeBtn.style.display = "block";
likeBtn.style.display = "none";

let liked = false;

// 좋아요
noLikeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent) || 0;
    count += 1;
    likeCount.textContent = count;

    noLikeBtn.style.display = "none";
    likeBtn.style.display = "block";
    liked = true;
});

// 좋아요 취소
likeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent) || 0;
    count -= 1;
    likeCount.textContent = count;

    likeBtn.style.display = "none";
    noLikeBtn.style.display = "block";
    liked = false;
});


// 댓글 달기
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("comment-list");
const viewComments = document.querySelector(".view-comments");
const commentCount = document.getElementById("comment-count");

function addComment(text) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="username">사용자</span> ${text}`;
    commentList.appendChild(li);

    // 댓글 갯수 업데이트
    commentCount.textContent = commentList.children.length;
}

// 엔터키로 댓글 등록
commentInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const text = commentInput.value.trim();
        if (text === "") return;
        addComment(text);
        commentInput.value = "";
    }
});

// view-comments 클릭 시 댓글 토글
viewComments.addEventListener("click", function () {
    if (commentList.style.display === "block") {
        commentList.style.display = "none";
    } else {
        commentList.style.display = "block";
    }
});

// 저장
const noSaveBtn = document.querySelector(".no-save-btn img");
const saveBtn = document.querySelector(".save-btn img");

saveBtn.style.display = "none";

noSaveBtn.addEventListener("click", () => {
    // 저장 클릭 시
    noSaveBtn.style.display = "none";
    saveBtn.style.display = "block";
});

saveBtn.addEventListener("click", () => {
    // 저장 해제 클릭 시
    saveBtn.style.display = "none";
    noSaveBtn.style.display = "block";
});

