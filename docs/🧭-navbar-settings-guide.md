---
title: 🧭 Navbar Settings Guide
---
Use this guide to manage your website’s navigation bar in Admin Hub.

- - -

## 📍 Access the Navbar Settings

1. Navigate to the sidebar.
2. Go to: `Content Manager → Navbar`.
3. Select the navbar entry to edit.

- - -

## 📝 Header Section

### title

* Internal name for the navbar configuration.

### logo (image)

* Upload or choose a logo image to display on the navbar.

### link (href)

* Set the homepage URL or logo redirection.

### target

* Decide whether the logo link opens in the same tab or a new tab. (Usually leave it empty)

- - -

## 🔗 Navbar Links

Each "Navbar Link" entry defines a navigation item.

### For Each Link:

* **label**: Text shown in the navbar.
* **href**: The destination URL.
* **target**: (Optional) Choose how the link opens.

You can add links such as:

* Home
* What & Why
* Join As Mentor
* Knowledge Hub

- - -

## 🧩 Components: Atoms vs. Molecules

You can structure the navbar using one of the following layout groups:

### atoms

* Includes simple components like:

  * `Navbar Link` (single links one by one)

### molecules

* Includes grouped components like:

  * `Navbar Landing Link Group`
  * `Navbar Link Group`\
    These allow more complex link grouping and submenu structures.

Choose one structure depending on your navbar needs by selecting the corresponding radio button.

- - -

## ⚙️ Toggles and Options

At the bottom of the page, you’ll find toggles to control specific behaviors:

| Field             | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| **themeToggler**  | Enables the light/dark theme toggle in the navbar            |
| **localeToggler** | Enables language switching                                   |
| **hostId**        | Connects the navbar config to a specific site (e.g., `GOTS`) |
| **showLogin**     | Enables a login button in the navbar                         |

Set each to `TRUE` or `FALSE` depending on your needs.

- - -

## ✅ Save and Publish Changes

Once you have finished configuring:

* Click the **Save** button at the top right.
* Your updated navbar setup will reflect on the frontend.
