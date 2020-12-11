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
        }
    };
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
patchRequest();

function deleteRequest() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
    };
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send();
}
deleteRequest();

function getRequest() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            for (i = 0; i < posts.length; i++) {
                console.log(JSON.parse(this.responseText));
                let textarea = document.getElementById('textarea');
                textarea.innerText += 'title: ' + posts[i].title + `\n`;
                textarea.innerText += 'message: ' + posts[i].body + `\n\n`;
            }
        }
    };
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send();
}
getRequest();

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
            console.log(JSON.parse(this.responseText));
            alert("success");
        }
    }
}
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
ajax.send();

getComments();