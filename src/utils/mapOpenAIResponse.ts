export const mapOpenAIResponse = (response: any) => ({
  id: response.data?.id,
  message: response.data?.choices[0]?.message?.content,
  isGpt: true,
});

export const mapKpiResponse = (response: any) => {
  const message = response.data?.choices[0]?.message?.content ?? '';
  const results: { summary: string; value: string; asignee: null }[] = [];
  const regex = /`SD:KPI` `ST`([\s\S]*?)`ET`[\s\S]*?`SDESC`([\s\S]*?)`EDESC` `ED:KPI`/g;

  let matches;
  // eslint-disable-next-line no-cond-assign
  while ((matches = regex.exec(message)) !== null) {
    const title = matches[1];
    const description = matches[2];
    results.push({ summary: title, value: description, asignee: null });
  }

  return results;
};
