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

const editorElement = document.querySelector('#editor') as HTMLElement;

const config: EditorConfig = {
	plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, Link],
	toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList'],
	licenseKey: 'GPL'
};

ClassicEditor
	.create(editorElement, config)
	.then((editor) => {
		console.log('Editor was initialized', editor);
		return editor;
	})
	.catch((error: Error) => {
		console.error(error.stack);
		throw error;
	});


