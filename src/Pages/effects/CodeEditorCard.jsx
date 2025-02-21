import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditorCard = () => {
  const [code, setCode] = useState('');
  const fullCode = `const wizard = () => {
  console.log("Crafted from scratch with magic!");
};
wizard();`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullCode]);

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      value={code}
      readOnly
      style={{ width: '100%', height: '200px' }}
    />
  );
};

export default CodeEditorCard;