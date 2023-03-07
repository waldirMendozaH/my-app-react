import React from "react";
import "../assets/css/TodoCounter.css";

function TodoCounter() {
  return (
    <div className="div2">
      <h1 className="frase"> Este es mi segundo div con rama todoCouenter </h1>
      <h2 className="title"> es te mi subtitulo </h2>
      <p className="parrafo">
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export { TodoCounter };
