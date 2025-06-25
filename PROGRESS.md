# CKEditor5 Smart Callout Plugin - Progress Tracker

## Project Overview
**Goal:** Develop a CKEditor 5 "Smart Callout" plugin featuring a block widget with type attribute, custom UI, and command functionality.

**Technologies:** TypeScript, CKEditor 5 Framework

**Total Estimated Time:** 12.5 hours

## Task Progress

| ID | Task | Description | Est. Hours | Dependencies | Status | Notes |
|----|------|-------------|------------|--------------|--------|-------|
| 1 | Bootstrap environment | Generate base CKEditor5 environment and verify build process | 1.0h | None | ☑ Completed | Used degit to clone JavaScript starter files, updated package.json, npm install & build successful |
| 2 | Convert to TypeScript | Add TypeScript configuration, convert main.js to TypeScript, update dependencies | 2.0h | Task 1 | ☑ Completed | Added tsconfig.json, converted main.js to main.ts with proper typing, fixed top-level await issue |
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
- **Tasks Completed:** 2/11 (18%)
- **Tasks In Progress:** 0/11 (0%)
- **Tasks Pending:** 9/11 (82%)
- **Estimated Time Remaining:** 9.5 hours
- **Actual Time Spent:** 3 hours

## Current Status
🟢 **Ready** - Task 2 completed, ready for Task 3 (Define model & converters)

## Repository Status
- **GitHub Repository:** https://github.com/Simply007/ckeditor5-smart-callout.git
- **Current Branch:** main
- **Commits:** 3 commits (planning + bootstrap + TypeScript conversion)
- **Current Language:** TypeScript

## Next Steps
1. **Ready to Start:** Task 3 - Define model & converters
   - Create SmartCalloutEditing.ts plugin
   - Register 'callout' element in schema
   - Implement upcast/downcast converters
   - Make element a widget using toWidget
   - Add 'calloutType' attribute support

## Detailed Task Information

### Task 1: Bootstrap Environment ✅ COMPLETED
- **Command Used:** `npx -y degit ckeditor/ckeditor5-tutorials-examples/timestamp-plugin/starter-files`
- **Actual Output:** JavaScript-based CKEditor5 environment
- **Success Criteria:** ✅ Build passes, demo editor functional
- **Note:** Created JavaScript base that will be converted to TypeScript in Task 2

### Task 2: Convert to TypeScript ✅ COMPLETED
- **Dependencies:** TypeScript, @types packages, tsconfig.json
- **Files Converted:** main.js → main.ts with proper typing
- **Configuration:** Added tsconfig.json with strict mode
- **Success Criteria:** ✅ TypeScript build and dev server working
- **Issues Resolved:** Fixed top-level await compatibility issue

### Task 3: Define Model & Converters (SmartCalloutEditing.ts)
- **Schema:** Register element 'callout' with 'calloutType' attribute
- **Converters:** Implement downcast + upcast converters
- **Widget:** Wrap view element with `toWidget`

### Task 4: Create Command (InsertCalloutCommand.ts)
- **Execute:** Insert or update callout, place caret inside
- **Refresh:** Disable when selection already in callout

### Task 5: Glue Plugin (SmartCallout.ts)
- **Requirements:** `[SmartCalloutEditing, SmartCalloutUI]`
- **Export:** `pluginName`

### Task 6: Toolbar Button (SmartCalloutUI.ts)
- **Component:** `componentFactory.add('insertCallout', …)`
- **Features:** Command binding, SVG icon

### Task 7: Balloon Form View (SmartCalloutFormView.ts)
- **UI:** ContextualBalloon with radio/dropdown for type selection
- **Action:** Execute command with new type on submit

### Task 8: Widget Polish
- **Accessibility:** Add `label` for screen readers
- **UX:** Enable drag handle, visual improvements

### Task 9: Type-Coverage Tests
- **Framework:** Jest or Vitest
- **Focus:** Compile-time checks for `calloutType`
- **Config:** Enable `noImplicitAny`

### Task 10: Manual QA
- **Command:** `npm run dev`
- **Tool:** CKEditor Inspector for model-view verification

### Task 11: Package & Publish
- **Entry Point:** Add `"main": "src/index.ts"`
- **Target:** Private registry publication

---
*Last Updated: 2025-06-25*