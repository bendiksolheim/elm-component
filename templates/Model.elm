module %s.Model exposing (Model, initModel)

import %s.Messages exposing (..)


type alias Model =
    { entry : String
    }


initModel : Model
initModel =
    Model ""

