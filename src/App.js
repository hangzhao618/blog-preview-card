import logo from "./logo.svg";
import "./App.css";
import pic from "./illustration-article.svg";
import authorImage from "./images/image-avatar.webp";

function App() {
  const category = "Learning";
  const publishdate = "Published 21 Dec 2023";
  const title = "HTML & CSS foundations";
  const description =
    "These languages are the backbone of every website, defining structure, content, and presentation.";
  const authorName = "Greg Hooper";

  return (
    <div className="App">
      <div className="container">
        <div className="blog-img">
          <img src={pic} className="logo" alt="logo" />
        </div>
        <div className="content">
          <div className="category">{category}</div>
          <div className="publish-date sp">{publishdate}</div>
          <div className="title sp">{title}</div>
          <div className="description sp">{description}</div>
        </div>
        <div className="author">
          <img className="author-img" src={authorImage} alt="author-img" />
          <div className="author-name">{authorName}</div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Hang</a>.
      </div>
    </div>
  );
}

export default App;
