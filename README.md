# AI-Powered QA/QC Checklist Tool

**AI-powered QA/QC checklist generator and manager for construction projects.**

ConstructCheck Pro is a web-based application designed to help construction professionals create, manage, and export Quality Assurance/Quality Control (QA/QC) inspection checklists. It features pre-defined checklists for various construction divisions, allows users to create custom checklists from scratch, and includes an AI-powered generator (using Google Gemini) to create draft checklists from specification documents.

## Features

*   **Pre-defined Checklists:** Access a library of checklists for common construction divisions (e.g., Concrete, Masonry, Structural Steel).
*   **Custom Checklist Creation:** Users can create their own divisions and checklists from a blank slate.
*   **AI Checklist Generation (Beta):**
    *   Upload specification documents (TXT, PDF, DOCX).
    *   Utilizes Google Gemini API to generate a draft checklist based on the provided specifications.
    *   *(**Note:** The current version demonstrates client-side API key input for local/private use.)*
*   **Interactive Checklist Interface:**
    *   Add/delete headers and items.
    *   Mark items as Yes, No, N/A.
    *   Add comments to items.
    *   Reorder items via drag-and-drop.
    *   Search within checklist items.
    *   Progress tracking for checklist completion.
*   **Photo Attachments:**
    *   Capture or upload photos directly to checklist items.
    *   Add descriptions and dates (user-editable) for each photo.
*   **Project Details & Sign-off:**
    *   Record project name, number, company, inspection date, and scope.
    *   Digital sign-off sections for Internal Control, External/3rd Party, and Quality Assurance.
*   **Data Management:**
    *   **Save to Browser:** Saves current checklist progress (items, meta, photos) to the browser's `localStorage`.
    *   **Persistent Custom Checklists:** Custom-created checklist structures (Division/Name) are saved to `localStorage` for availability across sessions.
    *   **Download/Upload:** Export checklist data (including photos) as a JSON file and import previously saved JSON files.
*   **PDF Export:**
    *   Generate a comprehensive PDF report of the checklist, including:
        *   Company Logo (user-selectable)
        *   Project Details
        *   Checklist Items with status
        *   Photo Attachments with descriptions
        *   Deficiencies Summary (items marked 'No')
        *   Sign-off Sections
        *   Header and Footer on each page.
*   **Responsive Design:** Usable on desktop and mobile devices.
*   **Sidebar Navigation:**
    *   Browse checklists by division.
    *   Search checklists in the sidebar.

## Tech Stack

*   HTML5
*   CSS3 (Tailwind CSS)
*   JavaScript (Vanilla JS)
*   **Libraries:**
    *   SortableJS (Drag-and-drop)
    *   jsPDF & jsPDF-AutoTable (PDF Generation)
    *   Font Awesome (Icons)
    *   Google Fonts (Inter)
    *   pdf.js (Client-side PDF text extraction - experimental)
    *   Mammoth.js (Client-side DOCX text extraction - experimental)
*   **AI Integration:** Google Gemini API (via direct client-side calls in this version)

## Getting Started (Local Development)

1.  Clone this repository or download the `index.html` file.
2.  Open the `index.html` file in a modern web browser.
3.  **For AI Features:**
    *   You will need a Google Gemini API Key.
    *   Obtain a key from [Google AI Studio](https://aistudio.google.com/) or your Google Cloud project.
    *   Enter the API key into the designated field in the "AI Checklist Generator" section of the tool.
    *   **Security Warning:** The API key is stored in your browser's `localStorage`. This is suitable for local development but **NOT secure for a publicly hosted version without a backend proxy.**

## Using the Tool

1.  **Select or Create a Checklist:**
    *   Use the sidebar to navigate through divisions and select a pre-defined checklist.
    *   Click the "+ New" button in the sidebar header to create a custom checklist. You'll be prompted for a division and name.
2.  **Fill Project Details:** Enter relevant project information.
3.  **Work with Checklist Items:**
    *   Use "Add Header" or "Add Item" buttons.
    *   Click on descriptions or comments to edit them.
    *   Check Yes/No/N/A boxes.
    *   Drag items to reorder.
4.  **AI Generation (Optional):**
    *   Enter your Gemini API Key and save it.
    *   Upload a specification document (TXT is most reliable for client-side parsing).
    *   Click "Generate Checklist with AI".
    *   Review and edit the generated items in the textarea.
    *   Use "Add to Current" or "Replace Current" to integrate AI items.
5.  **Attach Photos:** Click "Add Photo" to capture or upload images. Add descriptions and edit dates.
6.  **Complete Sign-off:** Fill in the sign-off details.
7.  **Save/Export:**
    *   Use "Save to Browser" to save your current work locally.
    *   "Download Checklist (JSON)" to save a file.
    *   "Upload Checklist (JSON)" to load a previously saved file.
    *   "Export as PDF" to generate a report. Select a company logo for the PDF if desired.

## Important Considerations for Public Hosting

*   **API KEY SECURITY IS PARAMOUNT:** The currently uses client-side handling of the Gemini API key.
*   **File Parsing:** Client-side parsing of PDF/DOCX files can be unreliable and resource-intensive. For a robust public application, consider backend file processing.
*   **Rate Limiting & Cost Control:** If using your own API key for a public tool, implement rate limiting on your backend to prevent abuse and manage costs.

## Future Enhancements (Potential)

*   Backend integration for secure API key management and robust file parsing.
*   User accounts and cloud storage for checklists.
*   More advanced AI prompting and checklist refinement options.
*   Improved UI/UX for custom checklist creation (modals instead of prompts).
*   Ability to delete/rename custom divisions.
*   Template sharing features.
