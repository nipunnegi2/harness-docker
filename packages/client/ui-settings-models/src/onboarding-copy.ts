/** Durable settings namespace for product-wide GUI onboarding facts. */
export const WELCOME_NOTICE_SETTINGS_NAMESPACE = 'ui-onboarding'

/** Field storing the last welcome notice version the user acknowledged. */
export const WELCOME_NOTICE_ACK_FIELD = 'welcomeNoticeVersion'

/**
 * Bump only when the notice changes materially and every user should see it
 * again. The acknowledgement is compared for exact equality.
 */
export const WELCOME_NOTICE_VERSION = '2026-08-26.1'

/** The complete welcome notice in both supported GUI locales. */
export const WELCOME_NOTICE_COPY = {
  zh: {
    title: '欢迎使用 Pentest Harness',
    body: 'Pentest Harness 是一个面向授权渗透测试、漏洞赏金研究与安全实验室的专业工作区。仅在你拥有或获得明确授权的目标上进行测试。\n\n开源、开放、可复用、可组合——欢迎加入安全研究者社区。',
    continueLabel: '继续',
  },
  en: {
    title: 'Welcome to Pentest Harness',
    body: 'Pentest Harness is a professional security testing workspace for authorized penetration tests, bug bounty research, security labs, and CTF engagements. Test only targets you own or are explicitly authorized to assess.\n\nOpen source, open, reusable, and composable — welcome to the community.',
    continueLabel: 'Continue',
  },
} as const
