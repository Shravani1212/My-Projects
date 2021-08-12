let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");
let count = 0;

function adding(bookmarks) {
    count = count + 1;
    let sitename = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    bookmarks[count] = {
        bookmarkId: "bookmark" + (count + 1),
        name: sitename,
        url: siteUrl
    };
    console.log(bookmarks);
}

function createList(bookmarks) {
    let list = document.createElement("li");
    let u = bookmarks.url;
    let anc = document.createElement("a");
    let btnEl = document.createElement("button");
    let spa = document.createElement("span");
    spa.classList.add("span");
    anc.href = siteUrlInputEl.value;
    btnEl.textContent = "Visit";
    btnEl.classList.add("span");
    anc.appendChild(btnEl);
    let site = siteNameInputEl.value;
    spa.textContent = site;
    list.appendChild(spa);

    list.appendChild(anc);
    console.log(list)
    bookmarksListEl.appendChild(list);
}
siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});
siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    adding(bookmarks);
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "please enter name";
    } else if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "please Enter url";
    } else {
        createList(bookmarks);
    }
    console.log(bookmarksListEl);
    siteNameInputEl.textContent = "";
    siteUrlInputEl.textContent = "";
});