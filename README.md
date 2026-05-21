# GrowEasy CRM Dashboard

A modern CRM dashboard built using **Next.js 16**, **React**, **TailwindCSS**, and **Zustand** as part of the GrowEasy AI frontend assignment.

The project was designed with a scalable SaaS architecture mindset focusing on:

- modular frontend structure
- reusable UI components
- optimized rendering
- clean state management
- scalable folder organization
- realistic CRM workflows
- production-style UI architecture

---

# Tech Stack

## Frontend

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Lucide React Icons

## State Management

- Zustand

---

# Features

## CRM Dashboard Layout

- Responsive dashboard shell
- Sidebar navigation
- Dashboard header
- Dynamic workspace layout
- Lead details panel

---

# Zustand Store Architecture

## Lead Store

Handles:

- leads data
- selected lead
- lead details
- activities timeline
- loading states
- lead panel visibility

---

## Organization Store

Handles:

- organizations
- active organization
- loading states
- organization switching

---

## Filter Store

Handles:

- search query
- status filters
- source filters
- owner filters
- date filters
- quick filters

---

## Modal Store

Handles:

- followup modal state
- selected followup lead

---

# Dynamic Organization Workflow

When organization changes:

- leads update automatically
- statistics update automatically
- lead panel resets
- filters continue working dynamically

Supports:

- organizations with no leads
- empty states
- fallback UI

---

# Leads Table System

Built a scalable CRM-style table with:

- large data grid
- reusable badges
- reusable actions
- activity workflows
- horizontal scrolling
- optimized rendering

---

# Lead Details Panel

Features:

- dynamic lead detail rendering
- timeline activities
- fallback handling
- loading states
- no-data states

---

# Timeline Activity Types

Supports:

- outbound calls
- WhatsApp messages
- campaign activities
- lead generation events

---

# Follow-up Workflow

Implemented reusable follow-up modal system.

Features:

- open from table row
- lead-linked followup workflow
- centralized modal state

---

# Mock API Architecture

Simulated APIs using local JSON files.

## APIs

### Organizations API

```js
getOrganizations()
```

### Leads API

```js
getLeads()
```

### Lead Details API

```js
getLeadDetails(leadId)
```

---

# CRM Data Structure

## Organizations

Includes multiple organizations such as:

- GrowEasy AI
- Sales AI
- VK Test
- Test Corp

---

## Leads

Generated realistic CRM leads with:

- names
- emails
- phone numbers
- companies
- acquisition sources
- CRM metadata
- timestamps

---

## Lead Details

Each lead detail contains:

- full lead data
- activity timeline
- CRM activity metadata
- realistic CRM interactions

---

# Performance Optimizations

Implemented several frontend optimizations:

- reduced barrel imports
- minimized unnecessary client components
- memoized heavy table rows
- optimized Zustand subscriptions
- improved render flow
- centralized loading system

---

# Performance Result

Initial development load improved from:

```txt
11s+
```

to approximately:

```txt
185ms–335ms
```

---

# Utility System

## classMerge Utility

Uses:

- clsx
- tailwind-merge

for safe Tailwind class merging.

### Example

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classMerge(...inputs) {
  return twMerge(clsx(inputs));
}
```

---

# Folder Structure

```txt
src/
├── app/
├── components/
│   ├── dashboard/
│   ├── filters/
│   ├── layout/
│   ├── lead-panel/
│   ├── modals/
│   ├── sidebar/
│   ├── table/
│   ├── ui/
├── hooks/
├── services/
│   ├── apis/
├── store/
├── data/
├── utils/
```

---

# Loading Experience

Implemented application-level loader to prevent:

- UI blinking
- partial rendering
- empty table flashes
- broken initial rendering

---

# Empty State Handling

Gracefully handles:

- no leads
- no activities
- no organizations
- no timeline data

---

# Real-World CRM Behaviors

Implemented realistic CRM workflows:

- organization switching
- lead filtering
- lead timeline tracking
- followup workflows
- lead detail management
- loading states
- activity handling

---

# Future Improvements

Potential future upgrades:

- authentication
- real backend integration
- pagination
- React Query
- websocket updates
- optimistic UI
- role-based access
- analytics dashboard
- calendar integrations
- notifications system
- advanced CRM workflows

---

# Getting Started

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Open Application

```txt
http://localhost:3000
```

---

# Conclusion

This project evolved from a frontend assignment into a scalable CRM dashboard architecture inspired by real-world SaaS applications.

Primary focus areas included:

- scalability
- maintainability
- performance
- UI consistency
- reusable architecture
- production-level frontend practices

The project is now structured in a way that can scale into a full production CRM platform.