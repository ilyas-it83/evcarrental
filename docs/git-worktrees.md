# Git Worktrees: A Visual Guide

## What is a Git Worktree?

A **worktree** is a linked working directory attached to your repository. It allows you to have multiple branches checked out simultaneously in different directories.

```
┌─────────────────────────────────────────────────────────────┐
│                     Your Git Repository                      │
│                                                              │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│   │  Worktree 1 │    │  Worktree 2 │    │  Worktree 3 │    │
│   │   (main)    │    │  (feature)  │    │  (hotfix)   │    │
│   │             │    │             │    │             │    │
│   │ /project    │    │ /project-ft │    │ /project-hf │    │
│   └─────────────┘    └─────────────┘    └─────────────┘    │
│          │                  │                  │            │
│          └──────────────────┴──────────────────┘            │
│                          │                                   │
│                    Shared .git                               │
│                   (single repo)                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Branches vs Worktrees

### 🌿 Traditional Branch Workflow

With branches alone, you switch contexts **in the same directory**:

```
📁 /my-project/
    │
    ├── .git/
    │
    └── [working files]
         │
         ▼
    ┌─────────────────────────────────────┐
    │  git checkout main                  │  ← Switch branch
    │  git checkout feature               │  ← Switch again
    │  git checkout hotfix                │  ← Switch again
    └─────────────────────────────────────┘
    
    ⚠️  Only ONE branch at a time!
    ⚠️  Must stash/commit before switching
    ⚠️  IDE reloads everything each time
```

### 🌳 Worktree Workflow

With worktrees, each branch has its **own directory**:

```
📁 /my-project/              ← Main worktree (main branch)
    ├── .git/
    └── [main branch files]

📁 /my-project-feature/      ← Linked worktree (feature branch)
    ├── .git (file → points to main)
    └── [feature branch files]

📁 /my-project-hotfix/       ← Linked worktree (hotfix branch)
    ├── .git (file → points to main)
    └── [hotfix branch files]

    ✅  Multiple branches simultaneously!
    ✅  No stashing needed
    ✅  Separate IDE windows
```

---

## Comparison Table

| Aspect | Branches Only | Worktrees |
|--------|--------------|-----------|
| **Directories** | Single directory | Multiple directories |
| **Switching** | `git checkout` / `git switch` | Open different folder |
| **Concurrent work** | ❌ One branch at a time | ✅ Multiple branches simultaneously |
| **Uncommitted changes** | Must stash or commit | Keep them in place |
| **IDE experience** | Reloads on switch | Separate windows |
| **Disk space** | Minimal | More (full copy per worktree) |
| **Build artifacts** | Overwritten on switch | Separate per worktree |
| **Long-running tasks** | Blocked while switching | Run in parallel |

---

## Common Commands

### Create a Worktree

```bash
# Create worktree with existing branch
git worktree add ../project-feature feature-branch

# Create worktree with NEW branch
git worktree add -b new-feature ../project-new-feature main
```

### List Worktrees

```bash
git worktree list
```

Output:
```
/home/user/project           abc1234 [main]
/home/user/project-feature   def5678 [feature-branch]
/home/user/project-hotfix    ghi9012 [hotfix]
```

### Remove a Worktree

```bash
# Remove worktree (after deleting directory)
git worktree remove ../project-feature

# Or force remove
git worktree remove --force ../project-feature

# Clean up stale worktree references
git worktree prune
```

---

## Visual: When to Use What

```
┌─────────────────────────────────────────────────────────────┐
│                    DECISION FLOWCHART                        │
└─────────────────────────────────────────────────────────────┘

    Need to work on multiple features at once?
                    │
          ┌────────┴────────┐
          │                 │
         YES               NO
          │                 │
          ▼                 ▼
    ┌─────────────┐   ┌─────────────┐
    │  WORKTREES  │   │  BRANCHES   │
    │             │   │   (normal)  │
    └─────────────┘   └─────────────┘


    Running long builds/tests while coding?
                    │
          ┌────────┴────────┐
          │                 │
         YES               NO
          │                 │
          ▼                 ▼
    ┌─────────────┐   ┌─────────────┐
    │  WORKTREES  │   │  BRANCHES   │
    │  (parallel) │   │   (normal)  │
    └─────────────┘   └─────────────┘


    Reviewing PRs while working on your feature?
                    │
          ┌────────┴────────┐
          │                 │
         YES               NO
          │                 │
          ▼                 ▼
    ┌─────────────┐   ┌─────────────┐
    │  WORKTREES  │   │  BRANCHES   │
    │  (clean!)   │   │   (stash)   │
    └─────────────┘   └─────────────┘
```

---

## Real-World Example

### Scenario: Bug Fix While Feature Development

```
You're working on a feature when a critical bug is reported.

WITHOUT Worktrees:
─────────────────
1. git stash                    # Save current work
2. git checkout main            # Switch to main
3. git checkout -b hotfix       # Create hotfix branch
4. [fix the bug]
5. git commit & push
6. git checkout feature         # Back to feature
7. git stash pop                # Restore work
   ⚠️ Possible conflicts!
   ⚠️ Build cache invalidated!

WITH Worktrees:
───────────────
1. git worktree add ../project-hotfix -b hotfix main
2. cd ../project-hotfix
3. [fix the bug in separate directory]
4. git commit & push
5. cd ../project                # Back to feature (unchanged!)
   ✅ No stashing!
   ✅ Build cache intact!
   ✅ IDE state preserved!
```

---

## Directory Structure Example

```
~/projects/
│
├── evcarrental/                    # Main worktree
│   ├── .git/                       # Full git directory
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── ...
│
├── evcarrental-feature-api/        # Worktree for API feature
│   ├── .git                        # File pointing to main .git
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── ...
│
└── evcarrental-bugfix/             # Worktree for bugfix
    ├── .git                        # File pointing to main .git
    ├── index.html
    ├── css/
    ├── js/
    └── ...
```

---

## Key Points to Remember

1. **Shared History**: All worktrees share the same Git history and remote connections
2. **Unique Branches**: Each worktree must have a unique branch (can't checkout same branch twice)
3. **Independent State**: Uncommitted changes stay in their respective worktrees
4. **Single .git**: Only the main worktree has the full `.git` directory
5. **Cleanup**: Always remove worktrees properly with `git worktree remove`

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════╗
║                    GIT WORKTREES CHEATSHEET               ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  CREATE     git worktree add <path> <branch>              ║
║  CREATE+BR  git worktree add -b <new> <path> <base>       ║
║  LIST       git worktree list                             ║
║  REMOVE     git worktree remove <path>                    ║
║  PRUNE      git worktree prune                            ║
║  LOCK       git worktree lock <path>                      ║
║  UNLOCK     git worktree unlock <path>                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

*Created for the EV Car Rental project - January 2026*

---

## 📎 For Non-Developers: The Microsoft Word Analogy

If you're a Project Manager, Business Analyst, or anyone who works with documents, you already understand worktrees! Here's how:

### The Classic "Save As" Approach (Like Worktrees!)

You've probably done this before:

```
📁 Project Proposal/
│
├── 📄 Proposal_v1.docx              ← Original version
├── 📄 Proposal_v1_ClientReview.docx ← Copy for client feedback
├── 📄 Proposal_v1_Legal.docx        ← Copy for legal review
└── 📄 Proposal_v1_Budget.docx       ← Copy for finance team
```

**This IS the worktree concept!** You have:
- ✅ Multiple copies of the same document
- ✅ Each copy can be edited independently
- ✅ Different people can work on different versions simultaneously
- ✅ No need to "save and close" one before opening another

### The "Track Changes" Approach (Like Branches)

Alternatively, you might work in a single file:

```
📄 Proposal.docx
│
├── [Accept/Reject Changes]
├── [Switch between reviewers' comments]
└── [One person at a time editing]
```

**This is like Git branches** - one file, switching between different "views" or change sets.

---

## Real-World PM Scenarios

### Scenario 1: RFP Response with Multiple Reviewers

**Traditional Approach (Worktree-like):**
```
📁 RFP_Response_2026/
│
├── 📄 RFP_Master.docx           ← Your main working copy
│
├── 📄 RFP_TechTeam.docx         ← Sent to tech team for their section
│       └── They fill in technical specs
│
├── 📄 RFP_Finance.docx          ← Sent to finance for pricing
│       └── They add cost breakdowns
│
└── 📄 RFP_Legal.docx            ← Sent to legal for terms
        └── They review compliance

✅ Everyone works in PARALLEL on their own copy!
✅ You merge their inputs into the master later
```

**Git Equivalent:**
```bash
Main repo        = RFP_Master.docx
Worktree 1       = RFP_TechTeam.docx
Worktree 2       = RFP_Finance.docx
Worktree 3       = RFP_Legal.docx
```
