
function About(props) {

  const myStyle = {
    color: props.mode === 'grey' ? 'white' : 'black',
    backgroundColor: props.mode === 'grey' ? 'grey' : 'white',
    padding: '20px',
    borderRadius: '10px'
  }

  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="text-center mb-4">About WordCounter</h1>
      <p className="fs-5">
        <b>WordCounter</b> is a simple and powerful text utility tool built with React.js.
        It helps users analyze and manipulate text quickly and efficiently.
      </p>

      <h4 className="mt-4">✨ Features:</h4>
      <ul className="fs-5">
        <li>Convert text to <b>UPPERCASE</b> or <b>lowercase</b>.</li>
        <li><b>Copy</b> your text instantly to the clipboard.</li>
        <li><b>Clear</b> unwanted text in one click.</li>
        <li>Displays <b>word</b> and <b>character</b> count.</li>
        <li>Calculates estimated <b>reading time</b>.</li>
        <li>Supports <b>light and dark (grey)</b> mode for better readability.</li>
      </ul>

      <h4 className="mt-4">🛠️ Technology Used:</h4>
      <p className="fs-5">
        This project is developed using <b>React.js</b> with functional components, hooks like <b>useState</b>, and dynamic props-based theming.
      </p>

      <h4 className="mt-4">💡 Purpose:</h4>
      <p className="fs-5">
        The purpose of WordCounter is to simplify text analysis and provide a handy tool for students, writers, and professionals who deal with text formatting regularly.
      </p>
    </div>
  )
}

export default About
