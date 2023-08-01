import "./Author.css";

function Avatar() {
  return (
    <img className="avatar" src="author/luiz.jfif" alt="author avatar"></img>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Luiz Massa</h1>
      <p>
        Sou um desenvolvedor de sistemas trabalhando em soluções tecnológicas
        para apoiar negócios das mais variadas áreas. Minha experiência inclui
        levantamento de requisitos, analise, arquitetura, projeto e
        desenvolvimento de software.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skill-list">
      <li className="skill">PL/SQL</li>
      <li className="skill">Java</li>
      <li className="skill">Python</li>
      <li className="skill">React</li>
    </ul>
  );
}

function Author() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default Author;
