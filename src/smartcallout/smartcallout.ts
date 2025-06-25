/**
 * @module smartcallout/smartcallout
 */

import { Plugin } from 'ckeditor5';
import SmartCalloutEditing from './smartcalloutediting';

/**
 * The Smart Callout plugin.
 * 
 * This is the main (glue) plugin that loads all other Smart Callout features.
 * 
 * For now, it only loads the editing feature. The UI feature will be added later.
 */
export default class SmartCallout extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get pluginName() {
		return 'SmartCallout' as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get requires() {
		// For now, only the editing part is required
		// SmartCalloutUI will be added in Task 6
		return [SmartCalloutEditing] as const;
	}
}