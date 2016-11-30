# elm-component

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
