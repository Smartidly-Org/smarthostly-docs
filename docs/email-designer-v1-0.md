---
title: Email Designer v1.0
---
### Detailed Documentation for the Email Designer Feature

#### Overview
The **Email Designer** is a powerful and user-friendly tool to create, customize, and manage email templates. Designed to cater to event-related communication such as bookings, announcements, and updates, the Email Designer features a drag-and-drop interface, dynamic content integration, and a wide variety of customizable components. This document provides a step-by-step guide to using the tool effectively, referencing specific blocks for each feature.

---

### Features of the Email Designer

#### 1. **Template Management**
   - **Accessing Templates**: 
     - Navigate to the **Email Designer** tab within the Admin Hub.
     - Choose between **Custom Templates** or **Default Templates**.
   - **Custom Templates**:
     - Create and save templates tailored to specific needs.
     - Examples: 
       - Booking Confirmation emails.
       - Event Announcements.
       - Show Updates.
   - **Default Templates**:
     - Use pre-built templates as a starting point.
     - Customize to suit your branding and messaging.
   - **Actions** (associated icons displayed in template lists):
     - **Edit (Pencil Icon)**: Open the template in the designer to modify content and layout.
     - **Duplicate (Clone Icon)**: Clone an existing template for variations.
     - **Delete (Trash Icon)**: Permanently remove a template.

   **Example Reference Block**: The screenshot showing the list of templates with edit, duplicate, and delete actions.

---

#### 2. **Design Interface**
The **Email Designer Interface** allows you to build templates using drag-and-drop blocks and fine-tune them using the settings panel. Below are the major sections and their components:

   - **Blocks Panel (Right Sidebar)**:
     - **Dynamic Components**:
       - **Booking QR Code**: Automatically generate QR codes for booking details.
       - **Event Banner Image**: Upload and position an image banner for the event.
       - **Host Logo**: Include the logo of the event organizer for branding.
     - **Content Blocks**:
       - **Text Block**: Add headings, paragraphs, or stylized text with customizable fonts, sizes, and colors.
       - **Image Block**: Insert images such as banners, logos, or icons. Adjust dimensions and alignment in the settings panel.
       - **Columns Block**: Organize content in 1-column, 2-column, or 3-column layouts.
       - **Button Block**: Add call-to-action buttons, such as "Buy Tickets," "Check Details," or "RSVP Now."
     - **Booking Details Block**: Displays details like booking ID, attendee name, and ticket information.
     - **Booking Summary Block**: Shows a summary of ticket costs, quantities, and any transaction fees.
     - **Seat Numbers Block**: Include seat assignments if applicable.

   - **Canvas (Central Work Area)**:
     - Drag blocks from the right sidebar and drop them onto the email design canvas.
     - Rearrange blocks using drag-and-drop gestures.

   - **Settings Panel (Right Sidebar)**:
     - Modify properties of the selected block:
       - **Dimensions**: Adjust the size and spacing of the block.
       - **Typography**: Change fonts, colors, sizes, and line spacing for text.
       - **Decorations**: Add borders, shadows, or background colors to enhance visual appeal.

   **Example Reference Block**: Screenshot showing the canvas with an email design, blocks on the right, and component settings for customization.

---

#### 3. **Dynamic Content Integration**
Personalize your email templates with dynamic content placeholders:
   - **Event Details**:
     - Insert event-specific information like name, date, time, and venue.
     - Placeholder: `[Event Name]`, `[Event Date]`, `[Event Venue]`.
   - **Booking Information**:
     - Include booking ID, attendee name, and ticket quantity.
     - Placeholder: `[Booking ID]`, `[Attendee Name]`, `[Ticket Quantity]`.
   - **QR Codes**:
     - Use the **Booking QR Code** block to automatically generate scannable codes for bookings.
   - **Custom Fields**:
     - Add placeholders for recipient-specific data, such as `[First Name]` or `[Email Address]`.

   **Example Reference Block**: Screenshot showing a Booking Confirmation template with placeholders for event and booking details.

---

#### 4. **Preview and Test**
   - **Live Preview**:
     - Use the **Preview Button** to view a real-time version of the email, with dynamic data placeholders replaced by actual values.
   - **Send Test Email**:
     - Click on **Send Test Email** to send a sample email to any specified address. This ensures the design renders correctly across email clients.
   - **Responsive View**:
     - Preview how the email appears on different screen sizes (desktop, tablet, mobile).

   **Example Reference Block**: Screenshot of the preview window with a populated email design.

---

#### 5. **Event Integration**
   - Select an event or booking to integrate details directly into the email:
     - Dropdown menus allow you to pick the relevant **Event** or **Booking** from your database.
     - Dynamic content (e.g., Event Banner Image, Booking Summary) is automatically populated.
   - Example Use Case:
     - Select the event "Gothenburg Tamil Sangam" to auto-fill the banner image, date, and booking details in the email template.

   **Example Reference Block**: Screenshot showing the event selection dropdown and integrated event-specific data.

---

#### 6. **Component Library**
The following blocks can be dragged onto the canvas from the right sidebar:
   - **Dynamic Image Block**: Displays images linked to events or bookings.
   - **Text Block**: Add headings, body text, or disclaimers.
   - **Booking Details Block**: Auto-fill details like attendee name, email, and ticket information.
   - **Booking Summary Block**: Show a detailed breakdown of ticket costs, transaction fees, and totals.
   - **QR Code Block**: Generate QR codes for bookings.
   - **Columns Block**: Arrange content in multiple columns for a structured layout.
   - **Button Block**: Add clickable buttons for actionable links.
   - **Seat Numbers Block**: Include seat assignments if available.

   **Example Reference Block**: Screenshot of the blocks panel showing all available components.

---

#### 7. **Saving and Deployment**
   - Save your design by clicking the **Save Design** button. 
   - Assign a template type (e.g., **Booking Confirmation** or **Event Announcement**) for categorization.
   - Deploy the email by integrating it into the Admin Hub’s notification or marketing system.

   **Example Reference Block**: Screenshot showing the "Save Design" button and template type dropdown.

---

### Best Practices
   - **Consistency**:
     - Use similar branding elements (logos, colors) across templates for uniformity.
   - **Testing**:
     - Always send a test email to check design alignment across devices and email clients.
   - **Responsive Design**:
     - Preview designs in mobile view to ensure readability and proper alignment.
   - **Dynamic Content**:
     - Utilize placeholders for scalable and personalized communication.
   - **Visual Hierarchy**:
     - Use headings and spacers to organize content for readability.

---

### Example Use Cases
1. **Booking Confirmation Email**:
   - Include booking ID, attendee details, event name, and a QR code.
   - Use the **Booking QR Code**, **Booking Details**, and **Event Banner Image** blocks.
   
2. **Event Announcement Email**:
   - Highlight event details such as date, time, and venue.
   - Use the **Dynamic Image**, **Text**, and **Button** blocks.

3. **Payment Receipt Email**:
   - Show payment details with ticket cost, fees, and quantity.
   - Use the **Booking Summary** block.

---
