# CKEditor5 Smart Callout Plugin - Progress Tracker

## Project Overview
**Goal:** Develop a CKEditor 5 "Smart Callout" plugin featuring a block widget with type attribute, custom UI, and command functionality.

**Technologies:** TypeScript, CKEditor 5 Framework (migrating from JavaScript base)

**Total Estimated Time:** 12.5 hours

## Task Progress

| ID | Task | Description | Est. Hours | Dependencies | Status | Notes |
|----|------|-------------|------------|--------------|--------|-------|
| 1 | Bootstrap environment | Generate base CKEditor5 environment and verify build process | 1.0h | None | ☑ Completed | Used degit to clone JavaScript starter files, updated package.json, npm install & build successful |
| 2 | Convert to TypeScript | Add TypeScript configuration, convert main.js to TypeScript, update dependencies | 2.0h | Task 1 | ☐ Pending | Add tsconfig.json, convert main.js to main.ts, add TypeScript dev dependencies |
| 3 | Define model & converters | Register 'callout' element, write upcast/downcast, make widget | 2.0h | Task 2 | ☐ Pending | SmartCalloutEditing.ts |
| 4 | Create command | Implement InsertCalloutCommand with execute/refresh logic | 1.5h | Task 3 | ☐ Pending | InsertCalloutCommand.ts |
| 5 | Glue plugin | SmartCallout.ts exposes plugin and requires editing+UI | 0.5h | Task 4 | ☐ Pending | SmartCallout.ts |
| 6 | Toolbar button | Add insertCallout button, icon, command binding | 1.0h | Task 5 | ☐ Pending | SmartCalloutUI.ts |
| 7 | Balloon form view | ContextualBalloon form to switch calloutType | 2.0h | Task 6 | ☐ Pending | SmartCalloutFormView.ts |
| 8 | Widget polish | Accessibility label, drag handle, visual tweaks | 0.5h | Task 7 | ☐ Pending | |
| 9 | Type-coverage tests | Compile-time tests for TypeScript typing completeness | 1.0h | Task 7 | ☐ Pending | |
| 10 | Manual QA | Run demo build, inspect model ↔ view conversion | 1.0h | Task 8 | ☐ Pending | |
| 11 | Package & publish | Add package entry points, publish to registry | 0.5h | Task 10 | ☐ Pending | |

## Dependency Graph
```
1 (Bootstrap) 
  ↓
2 (Convert to TypeScript)
  ↓
3 (Model & Converters)
  ↓
4 (Command)
  ↓
5 (Glue Plugin)
  ↓
6 (Toolbar Button)
  ↓
7 (Balloon Form) ← 9 (Type Tests)
  ↓              ↙
8 (Widget Polish)
  ↓
10 (Manual QA)
  ↓
11 (Package & Publish)
```

## Progress Summary
- **Tasks Completed:** 1/11 (9%)
- **Tasks In Progress:** 0/11 (0%)
- **Tasks Pending:** 10/11 (91%)
- **Estimated Time Remaining:** 11.5 hours
- **Actual Time Spent:** 1 hour

## Current Status
🟡 **In Progress** - Task 1 completed, ready for Task 2 (TypeScript conversion)

## Repository Status
- **GitHub Repository:** https://github.com/Simply007/ckeditor5-smart-callout.git
- **Current Branch:** main
- **Commits:** 2 commits (planning + bootstrap)
- **Current Language:** JavaScript (converting to TypeScript in Task 2)

## Next Steps
1. **Ready to Start:** Task 2 - Convert to TypeScript
   - Add TypeScript configuration (tsconfig.json)
   - Convert main.js to main.ts with proper typing
   - Add TypeScript dev dependencies
   - Update Vite configuration for TypeScript
   - Verify TypeScript build process works

## Detailed Task Information

### Task 1: Bootstrap Environment ✅ COMPLETED
- **Command Used:** `npx -y degit ckeditor/ckeditor5-tutorials-examples/timestamp-plugin/starter-files`
- **Actual Output:** JavaScript-based CKEditor5 environment
- **Success Criteria:** ✅ Build passes, demo editor functional
- **Note:** Created JavaScript base that will be converted to TypeScript in Task 2

### Task 2: Convert to TypeScript
- **Dependencies:** TypeScript, @types packages, tsconfig.json
- **Files to Convert:** main.js → main.ts
- **Configuration:** Vite TypeScript setup, proper type checking
- **Success Criteria:** TypeScript build and dev server working

### Task 3: Define Model & Converters (SmartCalloutEditing.ts)
- **Schema:** Register element 'callout' with 'calloutType' attribute
- **Converters:** Implement downcast + upcast converters
- **Widget:** Wrap view element with `toWidget`

### Task 3: Create Command (InsertCalloutCommand.ts)
- **Execute:** Insert or update callout, place caret inside
- **Refresh:** Disable when selection already in callout

### Task 4: Glue Plugin (SmartCallout.ts)
- **Requirements:** `[SmartCalloutEditing, SmartCalloutUI]`
- **Export:** `pluginName`

### Task 5: Toolbar Button (SmartCalloutUI.ts)
- **Component:** `componentFactory.add('insertCallout', …)`
- **Features:** Command binding, SVG icon

### Task 6: Balloon Form View (SmartCalloutFormView.ts)
- **UI:** ContextualBalloon with radio/dropdown for type selection
- **Action:** Execute command with new type on submit

### Task 7: Widget Polish
- **Accessibility:** Add `label` for screen readers
- **UX:** Enable drag handle, visual improvements

### Task 8: Type-Coverage Tests
- **Framework:** Jest or Vitest
- **Focus:** Compile-time checks for `calloutType`
- **Config:** Enable `noImplicitAny`

### Task 9: Manual QA
- **Command:** `npm run dev`
- **Tool:** CKEditor Inspector for model-view verification

### Task 10: Package & Publish
- **Entry Point:** Add `"main": "src/index.ts"`
- **Target:** Private registry publication

---
*Last Updated: 2025-06-24*