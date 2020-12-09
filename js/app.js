var tweetArea = document.getElementById("text-area");
var tweetSend = document.getElementById("tweet-submit");

function postRequest() {
    console.log('post-request');
    let tweetTitle = document.getElementById('title-input');
    let tweetBody = document.getElementById('body-input');
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            alert('success');
        }
    }
    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));

}
let tweetButton = document.getElementById('tweet-submit');
tweetButton.addEventListener('click', postRequest);

function patchRequest() {
    console.log("patch-request");
    let tweetTitle = document.getElementById("title-input");
    let tweetBody = document.getElementById("body-input");
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1,
    };
    let ajax = new XMLHttpRequest();
    ajax.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            alert("success");
        }
    };
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
tweetButton.addEventListener("click", patchRequest);

function deleteRequest() {
    console.log("delete-request");
    let tweetTitle = document.getElementById("title-input");
    let tweetBody = document.getElementById("body-input");
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1,
    };
    let ajax = new XMLHttpRequest();
    ajax.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            alert("success");
        }
    };
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
tweetButton.addEventListener("click", deleteRequest);

function getRequest() {
    console.log("get-request");
    let tweetTitle = document.getElementById("title-input");
    let tweetBody = document.getElementById("body-input");
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1,
    };
    let ajax = new XMLHttpRequest();
    ajax.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            renderHTML((ourData = JSON.parse(this.responseText)));
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };
    ourRequest.onerror = function() {
        console.log("Connection error");
    };
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].posts + ".</p>"

    };
    tweetButton.addEventListener("click", getRequest);

    function getComments() {
        console.log("get-comments");
        let tweetTitle = document.getElementById("title-input");
        let tweetBody = document.getElementById("body-input");
        let tweetData = {
            title: tweetTitle,
            body: tweetBody,
            userId: 1,
        };
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.status);
                alert("success");
            }
        };
        ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments", true);
        ajax.setRequestHeader("Content-type", "application/json");
        ajax.send(JSON.stringify(tweetData));
    }
    tweetButton.addEventListener("click", getComments);
    tweetArea.insertAdjacentHTML("beforeend", htmlString)
}