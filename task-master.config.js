// task-master.config.js
export default {
  ai: {
    provider: 'anthropic', // We're telling it to use Claude
    model: 'claude-3-haiku-20240307', // Using Haiku: it's fast and cost-effective for fixes
  },
  tasks: [
    {
      name: 'fix-code-from-test-log',
      // This is the core instruction for the AI agent
      prompt: `
        You are an expert software developer.
        A test has failed in my project. I will provide you with the test log, the test file, and the source file.
        Your task is to analyze the error and provide the corrected code for the source file ONLY.
        Do not provide explanations, just the full, corrected code block.
      `,
    },
  ],
}; 