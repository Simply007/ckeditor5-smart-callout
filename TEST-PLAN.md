# Smart Callout Plugin - Automated Test Plan

## Overview
This document outlines the automated testing strategy to replace manual test-instructions.md with comprehensive automated tests.

## Testing Framework
- **Unit Tests**: Vitest (fast, TypeScript native)
- **Integration Tests**: Vitest with CKEditor5 test utilities
- **E2E Tests**: Playwright (browser automation)

## Test Structure

### 1. Unit Tests (`tests/unit/`)

#### Schema Tests (`schema.test.ts`)
```typescript
describe('SmartCallout Schema', () => {
  test('registers callout element with correct properties')
  test('registers calloutContent element with correct properties')
  test('allows callout where $block is allowed')
  test('allows calloutContent only inside callout')
  test('supports calloutType attribute')
})
```

#### Converter Tests (`converters.test.ts`)
```typescript
describe('SmartCallout Converters', () => {
  test('upcast: converts HTML div.callout to model')
  test('downcast editing: creates widget with toWidget')
  test('downcast data: creates clean HTML output')
  test('handles calloutType attribute conversion')
  test('preserves nested content structure')
})
```

#### Widget Tests (`widget.test.ts`)
```typescript
describe('SmartCallout Widget', () => {
  test('creates selectable widget')
  test('creates editable content area')
  test('applies correct CSS classes')
  test('handles widget selection')
})
```

### 2. Integration Tests (`tests/integration/`)

#### Plugin Loading (`plugin-loading.test.ts`)
```typescript
describe('Plugin Integration', () => {
  test('SmartCalloutEditing loads without errors')
  test('plugin registers in editor.plugins')
  test('schema elements are properly registered')
  test('converters are properly registered')
})
```

#### Editor Integration (`editor-integration.test.ts`)
```typescript
describe('Editor Integration', () => {
  test('editor initializes with plugin')
  test('no console errors on initialization')
  test('callouts render properly in editor')
  test('callouts are editable')
})
```

### 3. E2E Tests (`tests/e2e/`)

#### Widget Interaction (`widget-interaction.spec.ts`)
```typescript
describe('Widget Interaction', () => {
  test('callouts are visually rendered')
  test('clicking callout selects widget')
  test('clicking inside content enters edit mode')
  test('typing in callout updates content')
  test('different callout types have correct styling')
})
```

#### Model Operations (`model-operations.spec.ts`)
```typescript
describe('Model Operations', () => {
  test('programmatic callout insertion works')
  test('model structure is correct')
  test('data output matches expected HTML')
})
```

## Test Scripts

### package.json scripts
```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:all": "npm run test && npm run test:e2e",
    "test:verify": "npm run build && npm run test:all"
  }
}
```

## Verification Commands

### After Each Task
```bash
# Quick verification
npm run test:verify

# Specific test suites
npm run test -- schema
npm run test -- converters
npm run test:e2e widget-interaction
```

### Continuous Integration
```bash
# Full test suite
npm run build
npm run test:all
npm run lint
npm run typecheck
```

## Success Criteria

Each test category must pass:
- ✅ All unit tests pass
- ✅ All integration tests pass  
- ✅ All E2E tests pass
- ✅ No console errors
- ✅ TypeScript compilation succeeds
- ✅ Build process completes

## Implementation Plan

1. **Setup Phase** (Task 5):
   - Install Vitest and Playwright
   - Configure test environments
   - Create basic test structure

2. **Unit Tests** (Task 5):
   - Implement schema tests
   - Implement converter tests
   - Implement widget tests

3. **Integration Tests** (Task 5):
   - Implement plugin loading tests
   - Implement editor integration tests

4. **E2E Tests** (Task 5):
   - Implement widget interaction tests
   - Implement model operation tests

5. **Verification** (Ongoing):
   - Run after each task completion
   - Update tests as features are added
   - Maintain test coverage

This replaces the manual test-instructions.md with automated, reliable, and repeatable tests.