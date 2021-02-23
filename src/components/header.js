const Header = (title, date, temp) => {
  title.textcontent
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  // Created Elements for titleElement, dataElement tempElement
  let titleElement = document.createElement('h1');
  let dataElement = document.createElement('span');
  let tempElement = document.createElement('span');
  let header = document.createElement('div');
// assigned class for 'date' 'temp' 'header'
  date.classList.add('date');
  temp.classList.add('temp');
  header.classList.add('header');

//assigning content
  dataElement.textContent = date;
  titleElement.textContent = title;
  tempElement.textContent = temp;
  
//append to the hierarchy
  header.appendChild(dateElement);
  header.appendChild(tempElement);
  header.appendChild(titleElement);
//append to HTML 

}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let headerContainer = document.querySelector(selector);

  headerContainer.appendChild(Header('Lambda Times', 'January 6, 2021', '26°'))




  
}

export { Header, headerAppender }
