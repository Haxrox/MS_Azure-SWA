import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      /*
      console.log("FETCH");
      const response = await fetch("https://haxtech.azurewebsites.net/api/ping",
        {
          method: "GET"
        }
      );
      console.log(response.json());
      setData("Hello World!");
      */
      (async function () {
        const { text } = await( await fetch(`/api/message`)).json();
        setData(text);
      })();
    })();
  });

  return <div>{data}</div>;
}

export default App;
