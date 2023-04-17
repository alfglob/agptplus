export const mapOpenAIResponse = (response: any) => ({
  id: response.data?.id,
  message: response.data?.choices[0]?.message?.content,
  isGpt: true,
});
