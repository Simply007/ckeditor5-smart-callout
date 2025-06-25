/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import {
	ClassicEditor,
	Bold,
	Essentials,
	Heading,
	Italic,
	Paragraph,
	List,
	type EditorConfig,
	Link
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

// Import our custom plugin
import SmartCalloutEditing from './smartcallout/smartcalloutediting';
// Import callout styles
import './smartcallout/smartcallout.css';

const editorElement = document.querySelector('#editor') as HTMLElement;

const config: EditorConfig = {
	plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, Link, SmartCalloutEditing],
	toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList'],
	licenseKey: 'GPL'
};

ClassicEditor
	.create(editorElement, config)
	.then((editor) => {
		console.log('Editor was initialized', editor);
		
		// Expose editor on window for testing
		(window as any).editor = editor;
		console.log('Editor available at window.editor for testing');
		
		return editor;
	})
	.catch((error: Error) => {
		console.error(error.stack);
		throw error;
	});


