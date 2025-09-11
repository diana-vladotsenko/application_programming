import "../style/AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="form">
        <h2>Form</h2>
        <input placeholder="Full Name"></input>
        <input placeholder="E-mail"></input>
        <textarea placeholder="Write a Message"></textarea>
        <div>
          <button
            onClick={() => {
              alert("working");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
