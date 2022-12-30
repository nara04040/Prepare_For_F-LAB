import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const li = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    li.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{li}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: "HTML", body: "HTML is ..." },
    { id: 2, title: "CSS", body: "CSS is ..." },
    { id: 3, title: "JavaScript", body: "JavaScript is ..." },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          alert("This is Header");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
