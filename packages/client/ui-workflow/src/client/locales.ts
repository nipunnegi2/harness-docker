/** UI strings for the live agent-run workflow view. */
export const NS = 'ui-workflow'

/** Locale keys typed for the workflow view. */
export type WorkflowKey =
  | 'view.workflow'
  | 'workflow.kicker'
  | 'workflow.title'
  | 'workflow.idle'
  | 'workflow.tool.pending'
  | 'workflow.tool.running'
  | 'workflow.tool.done'
  | 'workflow.tool.failed'
  | 'workflow.turn'
  | 'workflow.step'
  | 'workflow.tools'
  | 'workflow.noTools'

declare module '@pentest-harness/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** The live-workflow tab strings. */
    'ui-workflow': WorkflowKey
  }
}

export const zh: Record<WorkflowKey, string> = {
  'view.workflow': '工作流',
  'workflow.kicker': '实时工作流',
  'workflow.title': 'Agent 运行轨迹',
  'workflow.idle': '等待新的运行…',
  'workflow.tool.pending': '排队中',
  'workflow.tool.running': '运行中',
  'workflow.tool.done': '完成',
  'workflow.tool.failed': '失败',
  'workflow.turn': '轮次 {n}',
  'workflow.step': '步骤 {n}',
  'workflow.tools': '{n} 个工具调用',
  'workflow.noTools': '尚无工具调用',
}

export const en: Record<WorkflowKey, string> = {
  'view.workflow': 'Workflow',
  'workflow.kicker': 'LIVE WORKFLOW',
  'workflow.title': 'Agent Run',
  'workflow.idle': 'Waiting for a new run…',
  'workflow.tool.pending': 'queued',
  'workflow.tool.running': 'running',
  'workflow.tool.done': 'done',
  'workflow.tool.failed': 'failed',
  'workflow.turn': 'Turn {n}',
  'workflow.step': 'Step {n}',
  'workflow.tools': '{n} tool calls',
  'workflow.noTools': 'No tool calls yet',
}
