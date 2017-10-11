import * as Types from '../constants';
import Administracion from '../containers/administracion';
import Colecciones from '../containers/colecciones';
import Recursos from '../containers/recursos';

export function contenido(state = {cont: Administracion}, action: Types.Action) {
  switch (action.type) {
    case Types.ActionType.COLECCIONES_OPEN:
      return {
        ...state,
        cont: Colecciones
      }
      case Types.ActionType.RECURSOS_OPEN:
      return {
        ...state,
        cont: Recursos
      }
      case Types.ActionType.ADMINISTRACION_OPEN:
      return {
        ...state,
        cont: Administracion
      }
    default:
      return state
  }
}