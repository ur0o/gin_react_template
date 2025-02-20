import { useEffect, useState } from "react";
import { fetchContent } from "../utils/api";

type TextResponse = {
  text: string
}

export function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text !== "") return;
    (async function() {
      const t = await fetchContent<TextResponse>("/");
      if (t) setText(t.text);
    })();
  }, [])

  return (<>
    <h2>{text}</h2>
  </>);
}
