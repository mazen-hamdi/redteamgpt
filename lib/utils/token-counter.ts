/**
 * Estimates the number of tokens in a text string.
 * This is a rough approximation - GPT tokenization is more complex.
 * A better approach would use a proper tokenizer, but this gives a reasonable estimate.
 */
export function estimateTokenCount(text: string): number {
  if (!text) return 0;
  
  // Simple approximation: roughly 4 characters per token for English text
  // GPT's actual tokenization is more complex, but this provides a reasonable estimate
  return Math.ceil(text.length / 4);
}

/**
 * Returns a formatted string representation of the token count
 */
export function formatTokenCount(count: number): string {
  return count.toLocaleString();
}
