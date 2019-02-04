const form = document.querySelector('.comment__form'),
  nameInput = document.getElementById('name'),
  commentInput = document.getElementById('comment-field'),
  alert = document.querySelector('.comment__alert'),
  commentLength = document.querySelector('.comment__length span');

alert.style.display = 'none';

const comments = [];

form.onsubmit = function (e) {
  const now = new Date(),
    mm = now.getMonth() + 1,
    dd = now.getDate(),
    yyyy = now.getFullYear();

  const newComment = {
    name: nameInput.value,
    date: `${mm}/${dd}/${yyyy}`,
    text: commentInput.value
  }

  if (nameInput.value == '' || commentInput.value == '') {

  } else {
    comments.push(newComment);
    commentLength.textContent = comments.length;
  }

  nameInput.value = '';
  commentInput.value = '';
  //Invokes function "displayComment" and pass a newly created comment
  displayComment(newComment);
  e.preventDefault();
}

function displayComment(comment) {
  //Makes comment section to disappear from DOM
  document.querySelector('.comment__mainContent').innerHTML = '';
  //Loops through the comment array and render markup for each comment for form validation on line 57
  comments.forEach(item => {
    const commentUI = `<div class="comment__content"> 
                           <div class="comment__content--left">
                              <span class="comment__content--imageSpan"></span>
                           </div>
                           <div class="comment__content--right">
                               <span class="comment__content--name">${item.name}</span>
                               <span class="comment__content--date">${item.date}</span>
                               <p class="comment__content--text">${item.text}.</p>
                           </div>
                       </div>`;

    const div = document.createElement('div');
    div.innerHTML = commentUI;
    document.querySelector('.comment__mainContent').appendChild(div)
  });

  //if any fields are empty, show warning and disappear it after 3 seconds
  if (comment.name !== '' && comment.comment !== '') {

  } else {
    alert.textContent = 'Please enter valid name and comment';
    alert.classList.add('alert');
    alert.style.display = 'block';
    nameInput.style.border = '1.5px solid red';
    commentInput.style.border = '1.5px solid red';

    setTimeout(() => {
      alert.style.display = 'none';
      nameInput.style.border = '1.5px solid #E1E1E1';
      commentInput.style.border = '1.5px solid #E1E1E1';
    }, 3000);
  }
}


