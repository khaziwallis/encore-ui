# How to contribute

We want to keep it as easy as possible to contribute changes to EncoreUI, while making sure not to overburden the core EncoreUI team. There are a few guidelines that we need to follow so that we can have a chance of keeping on top of things.

## Bugs & Issues

Please submit any bugs you encounter when using EncoreUI to our [Github Issues Tracker](https://github.com/rackerlabs/encore-ui/issues).

When submitting a bug report, please **include a set of steps to reproduce the issue** and any related information (browser, OS, etc). If we can't reproduce the issue then it makes fixing it much more difficult.

### Preparing an Issue for development
When an Issue is ready to move to development, make sure it includes the following:

 * Link to Invision designs (if applicable)
 * Screenshot of final visual design
 * For new visual components or visual changes, sign-off from our designers is _required_. Mark issue with `Needs Design` label to request input
 * When all technical discussion on the issue is complete, change the label to `Ready for Dev`. For visual components/changes, *only* a designer may make this change.

## Adding/Updating Code

If you plan on adding/updating code, please make sure you've first filed an issue, detailing why you think the update is necessary. This lets the EncoreUI team discuss the problem and potential solutions with you. We also want to ensure that separate teams aren't trying to do the same thing simultaneously.

## PR Types:

There are a few typical types of Pull Requests that we see:

* New Components
* DO NOT MERGE - Reserved for prototype work
* Styles
* Docs
* Bug Fixes
* Component Revisions - Update to the style or interaction
* Deprecations

The most complex PRs are usually "New Components". The "PR Steps" below describe our criteria for putting together a new component PR. For the other types, adjust the steps as necessary, let common sense be your guide!

Currently, when adding a new component, our most precious resource is the time of our designers. We want to ensure that the PR process is as streamlined for them as possible, and this is made explicit below.

## PR Steps
* **Prerequisites**:
    * New Components _must_ be created using our [Component Scaffolding](./guides/ui-setup.md#creating-a-new-module)
    * A corresponding [Issue should be present](#preparing-an-issue-for-development)
* **Step 1**: Submitter includes screenshot of new component in PR description (See ["Design Review of Pull Requests"](#design-review-of-pull-requests) below)
* **Step 2**: Comment with Design Sign-Off on final product - Design LGTM
* **Step 3**: Checklist
    * [Unit Tests](./guides/testing.md#component-tests-aka-unit-tests)
    * [Page Objects updated](./guides/testing.md#convenience-page-objects)
    * [Functional/Midway Tests updated](./guides/testing.md#midway-tests)
    * [CSS Best Practices (this document needs an update)](./guides/css-styleguide.md)
    * Component Documentation Updated (i.e. the `README.md` for the component)
    * EncoreUI Style Guide updated if applicable
* **Step 4**: Comment from submitter with their verification of Checklist
* **Step 5**: Requested Feedback:
    * Keep an eye out for Labels added by reviewers (ex. "On Hold", "Needs Design", etc.)
    * Stop the Train Criteria:
        * Breaking Changes not previously discussed & documented
        * New Technologies not previously discussed & documented
        * Major visual component not approved by Design
    * See [Providing PR Feedback](#providing-pr-feedback)
* **Step 6**: 2 Dev LGTM's
* **Step 7**: Squash Commit ([see here for more details](#finalizing-a-pull-request))
* **Step 8**: Final Travis Build Verification
* **Step 9**: MERGE IT!


### Providing PR Feedback
There are certain things we look for in PR Feedback, and certain items that can usually "wait until later".

#### Requested Feedback

 * CSS Best Practices (ie: LESS variables)
 * JavaScript / Angular Best Practices
 * Maintainability of the Code Base
 * JavaScript Documentation
 * Test Coverage Validation

#### Non-Requested Feedback

Create an issue for non-requested feedback & tag with types, for example:

 * visual design
 * architecture
 * feature request
 * etc.

Topics outside of the scope of the PR should be left for later. If a component already has design sign-off, the PR is not the place to question the design or ask for design changes

### Get feedback early and often

It's much better to ask for feedback on an unfinished idea than to receive feedback on a finished one. If you're developing a new component, or updating an old one, feel free to post code as you write it. But please add "DO NOT MERGE" to the title of the PR, to let people know it's not quite ready.

## EncoreUI Developer Setup

[EncoreUI Developer Setup](./guides/ui-setup.md) - How to install the EncoreUI codebase

## Coding Standards

[CSS Style Guide](./guides/css-styleguide.md)

[JavaScript Style Guide](./guides/js-styleguide.md)

## Code Contribution Process

The process for any code updates follows [the GitHub Flow model](http://scottchacon.com/2011/08/31/github-flow.html).

To sum up:

1. Create a new branch in your local repo
2. Commit to that branch
3. Push branch up to Github
4. Submit PR for review (according to guidelines above)
5. Once reviewed and feedback given (and implemented), we will merge the branch to master

## 3rd-party Libraries

Any libraries added to the project must be pre-approved with the UI team.

## Tips on Committing Your Code

### Update your .gitconfig to only push the current branch

Ensure that you have the following in your `.gitconfig`.
```
[push]
    default = current
```
You can add the above lines to your `.gitconfig` if they aren't there already, or do this via the command line: `git config --global push.default current`

### Diff Before Every Commit

Get into the habit of running git diff or git diff --cached before every commit. This helps ensure no unwanted changes sneak in. Also, check for unnecessary whitespace with `git diff --check`.

### Commits Should Be Granular

You should keep each commit as granular as possible. For instance, do not check in 2 bug fixes in one commit -- separate them out into 2 commits.

### Commits Follow a Common Format

We use [the same commit format that the Angular Team follows](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format). Any commits that don't follow this format will be rejected.

## Testing

* Run _all_ the tests to assure nothing else was accidentally broken.
* Unit Tested - Minimum coverage requirement - 80% (simple controllers/services may not need to be unit tested, depending on how basic their logic is)
* Midways tests also need to be created for any new components

[More on testing](./guides/testing.md)

## Submitting changes

Before submitting any changes, make sure the master branch is merged locally into your branch (using [Git rebase](http://git-scm.com/book/en/Git-Branching-Rebasing) is preferred). Once done, push your branch up to Github and [submit a Pull Request](https://help.github.com/articles/using-pull-requests).

## Design Review of Pull Requests

Many times, pull requests will touch resources that render visually. These are still changes that must be reviewed! For the sake of simplicity and transparency, it is the responsibility of the author of a pull request to also include a comment containing screenshots of the visual changes. Here is an example of a typical pull request workflow containing designer feedback and sign off.

1. A pull request author finishes some new feature that contains visual changes *already mocked-up and approved by design*.
0. The pull request author gathers the appropriate before (master branch, usually) and after screenshots of each relevant section.
0. A pull request is created.
0. A comment is created [that tags an Encore-UI designer](https://github.com/blog/821). Immediately below this "@" mention, the screenshots are [uploaded in the comment interface](https://help.github.com/articles/issue-attachments/).
0. The initial visual feedback suggestion from our team recommends changing something so it better complies with original mock-ups they provided. This change would require new screenshots!
0. The pull request author changes something about the visual aspect of the design. They capture the new, changed screenshots (the original ones remain unchanged).
0. New screenshots are added, exactly how they were outlined above. Copy any pre-existing "before" screenshots from the old screenshot collection. Tag the designer reviewing this pull request.
0. Previous screenshots are edited to no longer render inline. This prevents confusion while retaining accurate historical records of visual feedback during review.

#### Editing previous screenshots

Here is an example of how you should edit the old screenshot comments to change them from inline rendered to non-rendered.

> Before. Used to render inline.

```
![I heard you like screenshots in github](https://cloud.githubusercontent.com/assets/1214609/7869834/dcd3cada-054a-11e5-9f4f-79d35d1153db.jpg)
```

> After. Will no longer render inline.

```
[Outdated screenshot.](https://cloud.githubusercontent.com/assets/12158682/7732292/7690b012-feec-11e4-9f2c-5dd32c81ad07.png)
```

## Finalizing a Pull Request

Occasionally a PR will receive comments and/or requests for changes before we merge it in. These changes should be submitted as new commits on the existing PR.

Once we are happy with the final state of the PR, we will write "LGTM" or "Looks good to me" as a comment, and ask that you squash all of your commits down into one or two. We normally do this as follows:

 1. `git rebase -i HEAD~x` where x = number of commits you've made on the branch/PR (The Conversation/Commits/Files Changed tab on the PR page will show you how many commits you've made)
 2. Not including your original commit, mark `f` or `s` for all commits after it ([see example that follows](#example-of-step-2))
 3. Update the latest master and do `git rebase master` on your branch, now that everything has been summed up into one or two commits
  1. You may run into a merge conflict. In that case, open the conflicting file(s) and modify it so that it reflects the desired final state.
  2. `git add <filename>` will include the corrected file into the rebase
  3. `git rebase --continue` will conclude the rebase now that the conflict has been resolved
 4. `git push -f` to force push your branch up to Github

Once Travis completes the tests on the rebased branch, we'll merge in the PR.

#### Example of Step 2

```
pick 3564c3f feat(rxApp): the first of your PR commits with a good commit message
f 6d1216f fix(rxApp): typo
f 989861d fix(rxApp): another typo

# Rebase 422f14b..f6318bb onto 422f14b
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

## Right to Revert

Once the contribution has been merged into the repo, if any issues arise in the integration environment or upon subsequent feedback, the contribution may be reverted.
