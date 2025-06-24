# CKEditor5 Smart Callout Plugin - Progress Tracker

## Project Overview
**Goal:** Develop a CKEditor 5 "Smart Callout" plugin featuring a block widget with type attribute, custom UI, and command functionality.

**Technologies:** TypeScript, CKEditor 5 Framework

**Total Estimated Time:** 10.5 hours

## Task Progress

| ID | Task | Description | Est. Hours | Dependencies | Status | Notes |
|----|------|-------------|------------|--------------|--------|-------|
| 1 | Bootstrap environment | Generate TypeScript package with CKEditor package generator; run initial build | 1.0h | None | ☑ Completed | Used degit to clone starter files, updated package.json, npm install & build successful |
| 2 | Define model & converters | Register 'callout' element, write upcast/downcast, make widget | 2.0h | Task 1 | ☐ Pending | SmartCalloutEditing.ts |
| 3 | Create command | Implement InsertCalloutCommand with execute/refresh logic | 1.5h | Task 2 | ☐ Pending | InsertCalloutCommand.ts |
| 4 | Glue plugin | SmartCallout.ts exposes plugin and requires editing+UI | 0.5h | Task 3 | ☐ Pending | SmartCallout.ts |
| 5 | Toolbar button | Add insertCallout button, icon, command binding | 1.0h | Task 4 | ☐ Pending | SmartCalloutUI.ts |
| 6 | Balloon form view | ContextualBalloon form to switch calloutType | 2.0h | Task 5 | ☐ Pending | SmartCalloutFormView.ts |
| 7 | Widget polish | Accessibility label, drag handle, visual tweaks | 0.5h | Task 6 | ☐ Pending | |
| 8 | Type-coverage tests | Compile-time tests for TypeScript typing completeness | 1.0h | Task 6 | ☐ Pending | |
| 9 | Manual QA | Run demo build, inspect model ↔ view conversion | 1.0h | Task 7 | ☐ Pending | |
| 10 | Package & publish | Add package entry points, publish to registry | 0.5h | Task 9 | ☐ Pending | |

## Dependency Graph
```
1 (Bootstrap) 
  ↓
2 (Model & Converters)
  ↓
3 (Command)
  ↓
4 (Glue Plugin)
  ↓
5 (Toolbar Button)
  ↓
6 (Balloon Form) ← 8 (Type Tests)
  ↓              ↙
7 (Widget Polish)
  ↓
9 (Manual QA)
  ↓
10 (Package & Publish)
```

## Progress Summary
- **Tasks Completed:** 0/10 (0%)
- **Tasks In Progress:** 0/10 (0%)
- **Tasks Pending:** 10/10 (100%)
- **Estimated Time Remaining:** 10.5 hours
- **Actual Time Spent:** 0 hours

## Current Status
🔴 **Not Started** - Project is ready to begin with Task 1 (Bootstrap environment)

## Next Steps
1. **Ready to Start:** Task 1 - Bootstrap environment
   - Run `npx @ckeditor/ckeditor5-package-generator@latest`
   - Choose TypeScript package
   - Verify `npm run build` works
   - Confirm demo editor loads

## Detailed Task Information

### Task 1: Bootstrap Environment
- **Command:** `npx @ckeditor/ckeditor5-package-generator@latest`
- **Expected Output:** Clean TS build, demo editor
- **Success Criteria:** Build passes, demo editor functional

### Task 2: Define Model & Converters (SmartCalloutEditing.ts)
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