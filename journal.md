# 2026-01-11 14:17:08

# TaskIt! Journal

## Project Planning:

1. Why am I making this project?

Personal Project to learn Full Stack Development. Basic React features, incorporated w/express and MongoDB. First project that I have taken on by myself. I would like to create a task app that implements the features that I like from other apps into one.

2. Who is it for?

This app will be for my own personal use, but more importantly, will be used for educational purposes. Users of task apps that are looking for a more minimal look with plenty of features for task management.

3. What makes it valuable?

Minimal layout with maximum features. Ability to create projects from tasks. Different categories of lists, i.e. Favorites, recipe/shopping list, and more.

## User Stories (10 -20)

As a user...

- I can add a task to the list open on the screen
- I can check off the task to complete it so I can track my progress
- I can edit a task’s title and description so I can refine requirements over time.
- I can see all task details on separate page to get overview of task and a more efficient way to edit task.
- I can delete tasks so I can remove work that is no longer needed.
- I can assign tags (e.g., “Bug”, “Feature”, “Research”) to tasks so I can group similar work.
- I can filter tasks by tag so I can focus on a specific type of work.
- I can change a task’s tag so it stays accurate as work evolves.
- I can organize my tasks in a list by categories
- I can delete a category without deleting the tasks inside
- I can view completed and incomplete tasks separately so I can focus on active work.
- I want my task lists to persist after refresh so I don’t lose work when I leave the app.
- I want tasks to maintain their order within a project so I can prioritize work manually.
- I can create folders so I can group related task lists in one place.
- I can rename folders so I can reorganize my workspace as projects evolve.
- I can delete folders so I can remove outdated or abandoned workspaces.
- I can create projects inside folders so I can separate major efforts by area or client.
- I can create tasks within a project so I can track actionable work items.
- I can move projects between folders so I can reorganize without recreating data.
- I can see all tasks within a project in one view so I can understand project scope.
- I can see how many tasks are completed vs. total in a project so I can measure progress.
- I can delete a project and all its tasks so I can cleanly remove completed initiatives.

## Data Model

Task - {
id: Object_id,
projectId: Task(Object_id),
list: List(Object_id),
category: String,
title: String,
description: String,
status: Array("todo" | "done"),
tags: Array,
createdAt: Date,
completedAt: Date
}

Project - {
id: Object_id,
folderId: Folder(Object_id),
title: String,
description: String,
totalTasks: Number,
completedTasks: Number,
createdAt: Date,
completedAt: Date
}

List - {
id: Object_id,
folderId: Folder(Object_id),
title: String,
categories: Array
}

Folder - {
id - Object_id,
title - String,
color - String
}

## MVP - Does the app require this feature to work?

- I can add a task to a list so I can track todo items
- I can check off tasks to focus on active items.
- I can edit a task’s title and description so I can refine requirements over time.
- I can delete tasks so I can remove work that is no longer needed.
- I can see all task details on separate page to get overview of task and a more efficient way to edit task.
- I can view completed and incomplete tasks separately so I can focus on active work.
- I want my task lists to persist after refresh so I don’t lose work when I leave the app.
- I can create folders so I can group related task lists in one place.
- I can rename folders so I can reorganize my workspace as projects evolve.
- I can delete folders so I can remove outdated or abandoned workspaces.

## Simple Prototype Wireframe - User Flow

### TASK PAGE FLOW -

-> clicks diff list -> DIFF LIST PAGE

-> clicks create new list -> CREATE LIST MODAL -> create -> NEW LIST PAGE

-> clicks create folder -> CREATE FOLDER MODAL -> create -> folder appears in s/b

-> clicks task -> TASK DETAILS PAGE

### TASK FLOW

-> creates new task -> task appears in current list

-> checks box -> task status changes to 'done' -> completed task list

-> clicks task -> opens TASK DETAILS MODAL(TDM) -> closes -> back to list

TDM -> details edited -> title, descr. -> details updated -> return to list

TDM -> list edited -> task switches to specified list -> return to prev list

-> delete task -> task is removed from list/app -> does not go to completed task list

## What The Future of the App Looks Like?

Since this is only a practice project there will not be any features added in the future. After MVP, tags, filters, categories, and projects will be added. No need for extensive DB integration, auth not needed, scaling not needed.

## Drill into Components - High level Arch., BE? FE?, Packaging

taskPage, sidebar, directoryNav, createTaskForm, taskList, createTaskModal, taskDetailsModal, createListModal, createFolderModal

## What Stack are we Using?

- Frontend - React
- Backend - NodeJS/Express
- Storage - MongoDB?
- Frameworks/Libraries - tailwindcss, React, Express, mongoose
- Can I Deploy This as of now? - not going to be deploying. Will research the required setup to deploy.

## Overall Dev Process

- Project Skeleton
- DB/Models
- BE roots/API routes
- FE interface -> BE
- Iteration
  - Add
  - Test
  - Deploy

01/14/2026 17:01:40

- added tailwind @apply utility style to put on div#root tag in HTML to have a better looking prototype.
-
