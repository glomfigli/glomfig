function parseConfiguration (sourceText: string): ConfiurationEntry[] {
  return sourceText.split("\n")
    .map((sourceLine) => {
      const [id, value] = sourceLine.split(" ");
      return { id, value };
    });
}

export default parseConfiguration;
