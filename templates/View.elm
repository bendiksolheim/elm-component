module %s.View exposing (view)

import %s.Model exposing (..)
import %s.Messages exposing (..)
import Html exposing (Html, div, text)


view : Model -> Html Msg
view model =
    div [] [ text model.entry ]
