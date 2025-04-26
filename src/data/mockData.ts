// src/data/mockData.ts
import { Incident } from "../types/Incident";

export const mockData: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "An AI-powered recommendation system exhibited significant demographic bias, disproportionately favoring specific user groups in content visibility. Investigations revealed the training dataset lacked diversity, causing skewed model behavior. Potential impacts include loss of user trust and unfair treatment of minority populations. Mitigation steps are being evaluated, including dataset rebalancing and bias detection audits.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "A large language model (LLM) integrated into a healthcare advisory chatbot generated hallucinated, factually incorrect medical safety procedures during interactions. This misinformation, if acted upon by users, could have led to serious health risks. The root cause was traced to insufficient domain-specific fine-tuning. Immediate measures included disabling certain unsafe prompts and implementing retrieval-augmented generation (RAG) techniques.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "A customer support chatbot inadvertently exposed non-sensitive but private user metadata (such as account creation dates and partial email addresses) due to improper masking during dynamic response generation. No highly sensitive information (passwords, financial data) was leaked. The incident was classified as low severity, but additional data sanitization layers were deployed to prevent future exposures.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Unauthorized Model Access via Jailbreak Prompts",
    description: "An internal security audit discovered that users could exploit adversarial prompts to bypass safeguards on a generative AI model, accessing restricted system-level functions. Though no real-world harm was reported, the vulnerability posed serious security and compliance risks. As a response, prompt injection defenses were enhanced and reinforcement learning with human feedback (RLHF) updates were prioritized.",
    severity: "High",
    reported_at: "2025-04-10T11:00:00Z"
  },
  {
    id: 5,
    title: "Deepfake Misinformation Spread",
    description: "A social media monitoring tool identified that a deep learning-based image generation system was misused to create realistic but fabricated images of public figures, leading to misinformation campaigns. The incident underlined the risks of unrestricted model use in open-access platforms. Countermeasures included watermarking outputs, stricter usage policies, and integration of deepfake detection algorithms.",
    severity: "Medium",
    reported_at: "2025-04-05T08:45:00Z"
  }
];
