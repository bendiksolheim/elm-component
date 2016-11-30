module %s.Update exposing (update)

import %s.Model exposing (..)
import %s.Messages exposing (..)


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Message ->
            (model, Cmd.none)
