import { QrReader } from "react-qr-reader";
import { useState } from "react";

function App() {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%", height: "100px" }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
