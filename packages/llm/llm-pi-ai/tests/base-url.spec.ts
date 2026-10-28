import { describe, expect, it } from 'vitest'
import { normalizeBaseURL } from '../src/base-url.ts'

describe('normalizeBaseURL', () => {
  it('strips a trailing slash while preserving a path prefix', () => {
    expect(normalizeBaseURL('https://gateway.example/v1/')).toBe('https://gateway.example/v1')
    expect(normalizeBaseURL('https://gateway.example/v1')).toBe('https://gateway.example/v1')
    expect(normalizeBaseURL('https://gateway.example')).toBe('https://gateway.example')
  })

  it('trims surrounding whitespace from pasted endpoints', () => {
    expect(normalizeBaseURL('  https://gateway.example/v1  ')).toBe('https://gateway.example/v1')
  })

  it('rejects a malformed or non-HTTP URL', () => {
    expect(() => normalizeBaseURL('not a url')).toThrow(/valid absolute URL/)
    expect(() => normalizeBaseURL('ftp://gateway.example')).toThrow(/http or https/)
  })

  it('rejects embedded credentials, query strings, and fragments', () => {
    expect(() => normalizeBaseURL('https://user:pass@gateway.example')).toThrow(/credentials/)
    expect(() => normalizeBaseURL('https://gateway.example/v1?x=1')).toThrow(/query/)
    expect(() => normalizeBaseURL('https://gateway.example/v1#frag')).toThrow(/fragment/)
  })
})
