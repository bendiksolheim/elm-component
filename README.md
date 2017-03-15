# elm-component

**Warning:** please don’t use this. It is the wrong way of organizing your Elm
code, and will lead to nothing but trouble in the end. Instead, I urge you to
read the comments in the following reddit thread:
https://www.reddit.com/r/elm/comments/5jd2xn/how_to_structure_elm_with_multiple_models/

Although The Elm Architecture is one of the really nice parts of Elm, it has a
few problems with boilerplate. Creating new components is perhaps one of the
more booring tasks. `elm-component` tries to reduce some of this pain by
creating the initial code for a component for you.

## Installation

`npm install -g elm-component`

## Usage

Run `elm-component ComponentName` in the folder you want to create a new
component. This create the following structure:

```
ComponentName
├── Messages.elm
├── Model.elm
├── Subscriptions.elm
├── Update.elm
└── View.elm
```

The content of each file should be relatively self explanatory, but can
also be seen in the `templates` folder of this repository.
