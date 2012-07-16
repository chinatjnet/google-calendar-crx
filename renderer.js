// Copyright 2010 and onwards Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines a Renderer that generates HTML to be inserted
 * into the page.
 *
 * @author manas@google.com (Manas Tungare)
 */

/**
 * Renders (generates HTML for) various events and stuff to be inserted into
 * the page.
 */
var Renderer = {};

/**
 * Return HTML for an inline "Add to Calendar" button in small size.
 * @param {CalendarEvent} event The calendar event model for this view.
 * @return {string} Generated HTML.
 */
Renderer.getInlineIconSmall = function(event) {
  return [
      '<a style="float: right;" href="',
      event.fields.gcal_url,
      '" target="_blank"><img src="',
      chrome.extension.getURL('icons/calendar_add_19.png'),
      '" alt="',
      chrome.i18n.getMessage('add_to_google_calendar'),
      '"/></a>'
      ].join('');
};


/**
 * Returns HTML for a button for a single event, which when clicked, will
 * add that event to the user's Google Calendar.
 * @param {CalendarEvent} event The calendar event.
 * @param {boolean} opt_UseDefaultAnchorText True to ignore event title and use
 *     standard anchor text instead. Used in single event mode.
 * @return {string} HTML for the 'Add to Calendar' button.
 */
Renderer.getEventButton = function(event, opt_UseDefaultAnchorText) {
  opt_UseDefaultAnchorText = opt_UseDefaultAnchorText || false;
  return [
      '<a class="singleEvent" href="',
      event.fields.gcal_url,
      '" title="',
      chrome.i18n.getMessage('add_to_google_calendar'),
      '" target="_blank">',
      opt_UseDefaultAnchorText ?
          chrome.i18n.getMessage('add_to_google_calendar') :
          event.fields.title,
      '</a>'].join('');
};