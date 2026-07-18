---
title: "Getting Your Own Domain"
description: "Learn how to claim a free Hack Club subdomain for your project."
order: 3
---

# Getting Your Own Domain

Want a custom domain like **yourname.dino.icu** for your project? Hack Club gives every member free subdomains through the **hackclub/dns** repository on GitHub. All you have to do is open a pull request, and this guide walks you through every click.

Never opened a pull request before? That's completely fine. You don't need to know Git or use the command line. Everything here happens in your browser, and we'll go one step at a time.

> **Tip for beginners**
>
> If you've never contributed to GitHub before, don't worry. This guide assumes zero experience.

---

# TL;DR

| | |
|---|---|
| **What you'll do** | Fork the `hackclub/dns` repository, add one line for your subdomain, and open a pull request. A maintainer merges it and your domain goes live. |
| **What you'll need** | A GitHub account and a deployed project to point the domain at. |
| **How long it takes** | About five minutes of editing, then one or two days for a volunteer to review it. |

---

# What You'll Need

Before you start, make sure you have:

- A GitHub account.
- A deployed website, web app or project that your domain will point to.

---

# Step 1 — Fork the Repository

Go to:

```text
https://github.com/hackclub/dns
```

Click the **Fork** button in the top-right corner.

This creates your own copy of the repository under your GitHub account.

---

# Step 2 — Edit the DNS File

Once you've forked the repository, you'll be taken to your own copy.

Open:

```text
dino.icu.yaml
```

Click the **✏️ Edit** (pencil) button.

Find the correct place **alphabetically** for your subdomain and add something like:

```yaml
yourname: # your-email@example.com U012AB345CD
  - type: CNAME
    value: your-deployment-url.vercel.app.
```

Replace:

- **yourname** with the subdomain you want.
  - Example: `hello` becomes **hello.dino.icu**
- **your-deployment-url.vercel.app.** with wherever your project is hosted.
- Leave the **`.`** at the end of the hostname.
- If you're pointing directly to an IP address, change:

```yaml
type: CNAME
```

to

```yaml
type: A
```

Finally, replace the comment with your own email address, Slack ID, or both.

> **Important**
>
> CNAME records **must** end with a period (`.`). IP addresses (A records) **must not**.

---

# Step 3 — Commit Your Changes

Scroll to the bottom of the page.

Under **Commit changes**, enter a short description such as:

```text
Add yourname.dino.icu
```

Select:

> **Create a new branch for this commit and start a pull request**

Then click **Propose changes**.

---

# Step 4 — Open the Pull Request

GitHub will automatically open the Pull Request page.

Fill in:

- **Title**
  - Example:
    ```
    Add yourname.dino.icu
    ```
- **Description** (optional)

Then click:

**Create pull request**

That's it!

A Hack Club maintainer will review your pull request and, once approved, merge it. Your domain will then become active.

> **Tip**
>
> If a reviewer asks you to make changes, simply commit those changes to the **same branch** in your fork. Your existing pull request will update automatically—you do **not** need to open a new one.

---

# Vercel Users

If your project is hosted on **Vercel**, you'll also need to verify your domain ownership.

Vercel will provide you with a verification value similar to this:

```yaml
_vercel:
  ttl: 600
  type: TXT
  values:
    - vc-domain-verify=yourname.dino.icu,abc123def456
```

Copy the verification value exactly as Vercel provides it.

---

# Common Record Types

| Hosting Provider | Record Type | Example Value |
|-----------------|------------|---------------|
| Vercel | CNAME | `cname.vercel-dns.com.` |
| Netlify | CNAME | `your-site.netlify.app.` |
| GitHub Pages | CNAME | `yourusername.github.io.` |
| Nest / Custom Server | A | `123.45.67.89` |

> **Easy to miss**
>
> - **CNAME** values require a trailing `.`.
> - **A** records (IP addresses) do **not**.
>
> Forgetting this is one of the most common reasons a pull request is asked to be corrected.

---

# Helpful Tips

- Keep your entries **alphabetically ordered**.
- Only add **one subdomain per pull request**.
- Don't combine unrelated changes into the same PR.
- Be patient—Hack Club maintainers are volunteers, so reviews may take a day or two.
- If automated checks fail, read the error message carefully and fix the problem before requesting another review.

---

# Still Stuck?

If you need help, ask in **#hackanomous-help** on the Hack Club Slack. We may redirect you to other channels, but you should be able to get help here!

When asking for help, include:

- A link to your fork.
- What you've already tried.
- Any error messages or screenshots that might help explain the issue.
