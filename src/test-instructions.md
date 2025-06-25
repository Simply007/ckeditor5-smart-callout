# Testing the Smart Callout Plugin

## Dev Server
The development server is running at: http://localhost:5173/

## What to Test

1. **Visual Verification**:
   - You should see 4 different callout types rendered with different colors:
     - Info (blue)
     - Warning (yellow/orange)
     - Error (red)
     - Success (green)

2. **Widget Functionality**:
   - Click on any callout - it should show a selection outline
   - The callouts should have a selection handle when selected
   - You should be able to edit the text inside callouts

3. **Console Testing**:
   Open the browser console and try:
   ```javascript
   // Check if plugin loaded
   window.editor.plugins.has('SmartCalloutEditing')
   
   // View the model structure
   window.editor.model.document.getRoot().getChildren()
   
   // Check callout elements in model
   Array.from(window.editor.model.document.getRoot().getChildren())
     .filter(child => child.name === 'callout')
     .map(callout => ({
       type: callout.getAttribute('calloutType'),
       text: Array.from(callout.getChildren()).map(c => c.data).join('')
     }))
   ```

4. **Model Operations** (for testing without UI):
   ```javascript
   // Insert a new callout
   window.editor.model.change(writer => {
     const callout = writer.createElement('callout', { calloutType: 'info' });
     const text = writer.createText('This is a programmatically created callout!');
     writer.append(text, callout);
     writer.insertElement(callout, window.editor.model.document.selection.focus);
   });
   ```

## Expected Results
- All 4 callout types should be properly styled
- Callouts should behave as widgets (selectable, editable)
- The model should contain `callout` elements with `calloutType` attributes
- Console commands should work without errors