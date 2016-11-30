module %s.Subscriptions exposing (subscriptions)

import %s.Model exposing (..)
import %s.Messages exposing (..)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
