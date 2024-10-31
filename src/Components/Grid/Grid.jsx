import PropTypes from "prop-types";
import {
  AlignContentTypes,
  AlignItemsTypes,
  GapTypes,
  JustifyContentTypes,
  LgColTypes,
  MdColTypes,
  RowSpanTypes,
  SmColTypes,
  VerticalAlignTypes,
  XlColTypes,
  XsColTypes,
} from "./Grid.enums.js";
import { cn, removeLineBreaks } from "../../lib/utils.js";

/**
 * A custom Grid component.
 *
 * @param props - Las propiedades del componente.
 * @param alignContent - Cómo se posicionan las filas en contenedores de varias filas de flex y grid.
 * @param className - Clases adicionales para aplicar al contenedor del icono.
 * @param component - El componente a renderizar.
 * @param container - Para fijar el ancho de un elemento al punto de interrupción actual.
 * @param gap - Distancia entre elementos.
 * @param item - Para controlar el comportamiento de un elemento en flexbox.
 * @param justifyContent - Cómo se posicionan los elementos flex y grid a lo largo del eje principal del contenedor.
 * @param md - Cómo se dimensionan y colocan los elementos a través de columnas de la cuadrícula usando diseño responsivo.
 * @param lg - Cómo se dimensionan y colocan los elementos a través de columnas de la cuadrícula usando diseño responsivo.
 * @param rowSpan - Cómo se dimensionan y colocan los elementos a través de filas de la cuadrícula.
 * @param sm - Cómo se dimensionan y colocan los elementos a través de columnas de la cuadrícula usando diseño responsivo.
 * @param verticalAlign - Cómo se posiciona un elemento flex o grid individual a lo largo del eje cruzado de su contenedor.
 * @param xs - Cómo se dimensionan y colocan los elementos a través de columnas de la cuadrícula usando diseño responsivo.
 * @param useScreen - Para fijar el ancho de un elemento al punto de interrupción actual, y no al ancho del contenedor Grid.
 * @returns JSX.Element El componente de Icono renderizado.
 *
 * ```
 * @example
 *
 * - Standalone usage:
 * <Grid container><Grid item>Some content</Grid></Grid>
 * ```
 */

const Grid = (props) => {
  const {
    alignContent = "",
    alignItems = "",
    children,
    className = "",
    component: Component = "div",
    container = false,
    gap = 0,
    item = false,
    justifyContent = "",
    xl,
    lg,
    md,
    rowSpan = 1,
    sm,
    xs,
    verticalAlign = "",
    useScreen = false,
    ...rest
  } = props;

  const classes = () => {
    if (container) {
      return cn(
        removeLineBreaks`grid grid-cols-12 ${!useScreen ? "@container" : ""}
      ${gap ? GapTypes[gap] : ""}
      ${alignContent ? AlignContentTypes[alignContent] : ""}
      ${alignItems ? AlignItemsTypes[alignItems] : ""}
      ${justifyContent ? JustifyContentTypes[justifyContent] : ""}
      ${RowSpanTypes[rowSpan]}
      `,
        className
      );
    }

    if (item && xs) {
      return cn(
        removeLineBreaks`${XsColTypes[xs]}
        ${xl ? XlColTypes[xl] : ""}
        ${lg ? LgColTypes[lg] : ""}
        ${md ? MdColTypes[md] : ""}
        ${sm ? SmColTypes[sm] : ""}
        ${verticalAlign ? VerticalAlignTypes[verticalAlign] : ""}
        ${alignContent ? AlignContentTypes[alignContent] : ""}
        ${alignItems ? AlignItemsTypes[alignItems] : ""}
        ${justifyContent ? JustifyContentTypes[justifyContent] : ""}
      `,
        className
      );
    }

    return "";
  };

  return (
    <Component className={classes()} {...rest}>
      {children}
    </Component>
  );
};

export default Grid;
Grid.propTypes = {
  alignContent: PropTypes.oneOf([
    "around",
    "baseline",
    "between",
    "center",
    "end",
    "evenly",
    "normal",
    "start",
    "stretch",
  ]),
  alignItems: PropTypes.oneOf([
    "baseline",
    "center",
    "end",
    "start",
    "stretch",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.oneOf([
      "div",
      "span",
      "section",
      "article",
      "main",
      "header",
      "footer",
      "form",
      "ul",
      "li",
    ]),
    PropTypes.elementType,
  ]),
  container: PropTypes.bool,
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 8, 10]),
  item: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    "around",
    "between",
    "center",
    "end",
    "evenly",
    "normal",
    "start",
    "stretch",
  ]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  rowSpan: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  verticalAlign: PropTypes.oneOf([
    "auto",
    "baseline",
    "center",
    "end",
    "start",
    "stretch",
  ]),
  useScreen: PropTypes.bool,
};
