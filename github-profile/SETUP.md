# GitHub profile setup

## 1. Update profile settings (github.com → Settings → Profile)

**Name**
```text
Md Masfiqur Rahman
```

**Bio** (160 chars max — paste this)
```text
Top-Rated Senior QA Engineer | 14+ Years | Manual + Playwright Automation | Web • iOS • Android • API • AI
```

**Website**
```text
https://www.masfiqur.com
```

**Social links**
- LinkedIn: `https://www.linkedin.com/in/masfique/`
- (Optional) keep Upwork off GitHub if you prefer; LinkedIn + site is enough

## 2. Create the special profile README repo

GitHub only shows a profile README if the repo name matches your username exactly:

1. Create a **public** repository named: `masfiqurr`
2. Add a file named `README.md`
3. Paste the contents of `github-profile/README.md` from this folder
4. Commit to `main`

Or with GitHub CLI (after `gh auth login`):

```bash
gh repo create masfiqurr --public --source=./github-profile --remote=origin --push
```

(Run that from a folder that contains only the profile `README.md` as the root file.)

## 3. Pin repositories

Pin these (max 6):
1. `masfiqurr` (profile README — optional to pin)
2. `masfiqur-qa-portfolio`

## 4. Improve the portfolio repo

On `masfiqur-qa-portfolio`:
- Add topics: `qa`, `playwright`, `software-testing`, `nextjs`, `portfolio`, `typescript`
- Keep the README clear (see repo root README)

## Note on contribution graph

A light graph is normal for senior QA work that happens outside public GitHub. Your profile README + portfolio repo matter more than green squares.
