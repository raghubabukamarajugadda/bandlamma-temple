const MANTRAS = [
  "శ్రీ బగళాముఖ్యై నమః",
  "శ్రీ బండ్లమ్మ తల్లికి జై",
  "హరిద్రా సరోవర సంభవాయై నమః",
  "శత్రు సంహారిణ్యై నమః",
  "దశమహావిద్యా స్వరూపిణ్యై నమః",
];

export default function MantraRibbon() {
  const row = MANTRAS.map((m, i) => (
    <span key={i}>
      {m} <i>◆</i>
    </span>
  ));
  return (
    <div className="mantra-ribbon" aria-hidden="true">
      <div className="mantra-ribbon__track">
        {row}
        {row}
      </div>
    </div>
  );
}
