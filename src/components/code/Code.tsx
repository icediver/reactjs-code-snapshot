import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { Dispatch, SetStateAction } from "react";

interface Props {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

const Code = ({ code, setCode }: Props) => {
  return (
    <div className="code-input line-numbers">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) =>
          Prism.highlight(code, Prism.languages.javascript, "javascript")
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
};

export default Code;
