/**
 * @module smartcallout/smartcalloutediting
 */

import { Plugin, Widget, toWidget, toWidgetEditable } from 'ckeditor5';
import type { Editor, Element, DowncastWriter } from 'ckeditor5';

/**
 * The Smart Callout editing feature.
 * 
 * It introduces the 'callout' element in the model which renders as a widget in the editing view.
 */
export default class SmartCalloutEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'SmartCalloutEditing' as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [Widget] as const;
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		console.log('SmartCalloutEditing#init() was called');

		this._defineSchema();
		this._defineConverters();
	}

	/**
	 * Defines the schema for the smart callout feature.
	 */
	private _defineSchema(): void {
		const schema = this.editor.model.schema;

		// Register the 'callout' container element (the widget itself)
		schema.register('callout', {
			// Inherit all behavior from $blockObject (similar to other block widgets)
			inheritAllFrom: '$blockObject',
			// Define allowed attributes
			allowAttributes: ['calloutType']
		});

		// Register the 'calloutContent' element (the editable content area)
		schema.register('calloutContent', {
			// It's a limit element (content inside cannot be split out of the callout)
			isLimit: true,
			// Can only exist inside a callout
			allowIn: 'callout',
			// Can contain any content that's allowed in root (paragraphs, text, etc.)
			allowContentOf: '$root'
		});
	}

	/**
	 * Defines converters for the smart callout feature.
	 */
	private _defineConverters(): void {
		const conversion = this.editor.conversion;

		// CALLOUT CONTAINER CONVERTERS

		// Editing downcast: callout container (widget wrapper)
		conversion.for('editingDowncast').elementToElement({
			model: 'callout',
			view: (modelElement, { writer: viewWriter }) => {
				const calloutType = modelElement.getAttribute('calloutType') as string || 'info';
				
				// Create the main callout container element
				const section = viewWriter.createContainerElement('div', {
					class: `callout callout--${calloutType}`,
					'data-callout-type': calloutType
				});

				// Make it a widget
				return toWidget(section, viewWriter, { 
					label: 'callout widget',
					hasSelectionHandle: true
				});
			}
		});

		// Data downcast: callout container (clean HTML output)
		conversion.for('dataDowncast').elementToElement({
			model: 'callout',
			view: (modelElement, { writer: viewWriter }) => {
				const calloutType = modelElement.getAttribute('calloutType') as string || 'info';
				
				return viewWriter.createContainerElement('div', {
					class: `callout callout--${calloutType}`,
					'data-callout-type': calloutType
				});
			}
		});

		// CALLOUT CONTENT CONVERTERS

		// Editing downcast: callout content (editable area)
		conversion.for('editingDowncast').elementToElement({
			model: 'calloutContent',
			view: (modelElement, { writer: viewWriter }) => {
				// Create an editable div for the content
				const div = viewWriter.createEditableElement('div', {
					class: 'callout__content'
				});

				// Make it editable
				return toWidgetEditable(div, viewWriter);
			}
		});

		// Data downcast: callout content (clean HTML output)
		conversion.for('dataDowncast').elementToElement({
			model: 'calloutContent',
			view: (modelElement, { writer: viewWriter }) => {
				return viewWriter.createContainerElement('div', {
					class: 'callout__content'
				});
			}
		});

		// UPCAST CONVERTERS

		// Upcast: div.callout to callout model
		conversion.for('upcast').elementToElement({
			view: {
				name: 'div',
				classes: 'callout'
			},
			model: (viewElement, { writer: modelWriter }) => {
				// Extract the callout type from data attribute or class
				let calloutType = viewElement.getAttribute('data-callout-type');
				
				// Fallback: try to extract from class name
				if (!calloutType) {
					const classes = viewElement.getAttribute('class') || '';
					const match = classes.match(/callout--(\w+)/);
					calloutType = match ? match[1] : 'info';
				}

				// Create the callout container with type attribute
				return modelWriter.createElement('callout', {
					calloutType: calloutType || 'info'
				});
			}
		});

		// Upcast: div.callout__content (or any content inside callout) to calloutContent model
		conversion.for('upcast').elementToElement({
			view: {
				name: 'div',
				classes: 'callout__content'
			},
			model: 'calloutContent'
		});

		// ATTRIBUTE CONVERTERS

		// Handle the calloutType attribute conversion
		conversion.for('downcast').attributeToAttribute({
			model: 'calloutType',
			view: 'data-callout-type'
		});
	}
}