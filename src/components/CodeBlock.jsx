const tokenPattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(?:'[^']*'|"[^"]*")|<\/?[A-Za-z][^>]*>|\b(?:import|from|export|default|const|function|return|npm|install|test|expect|describe|@media)\b|\b\d+\b)/g;
const isTokenPattern = /^(\/\/[^\n]*|\/\*[\s\S]*?\*\/|(?:'[^']*'|"[^"]*")|<\/?[A-Za-z][^>]*>|\b(?:import|from|export|default|const|function|return|npm|install|test|expect|describe|@media)\b|\b\d+\b)$/;

function tokenClass(token) {
  if (token.startsWith('//') || token.startsWith('/*')) return 'code-block__comment';
  if (token.startsWith('"') || token.startsWith("'")) return 'code-block__string';
  if (token.startsWith('<')) return 'code-block__jsx';
  if (/^\d+$/.test(token)) return 'code-block__number';
  return 'code-block__keyword';
}

const CodeBlock = ({ children, file = 'src/App.jsx' }) => {
  const code = `// Archivo: ${file}\n\n${String(children)}`;
  const parts = code.split(tokenPattern);

  return <pre className="code-block"><code>{parts.map((part, index) =>
    isTokenPattern.test(part)
      ? <span className={tokenClass(part)} key={index}>{part}</span>
      : part
  )}</code></pre>;
};

export default CodeBlock;
