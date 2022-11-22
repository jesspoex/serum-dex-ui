import { assign } from "lodash";
import { VictoryThemeDefinition } from "victory";

// *
// * Colors
// *
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900,
];
const blueGrey50 = "#ECEFF1";
const blueGrey700 = "#455A64";
const grey900 = "#212121";
const white70 = "rgba(255, 255, 255, 0.70)"
const white50 = "rgba(255, 255, 255, 0.5)"
const white25 = "rgba(255, 255, 255, 0.05)"
// *
// * Typography
// *
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: {left: 60, bottom: 30, right: 30, top: 50},
};

const basePropsTVL = {
  padding: {left: 75, bottom: 45, right: 20, top: 35},
};

const basePropsAnalytics = {
  padding: {left: 60, bottom: 30, right: 30, top: 30},
}
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: "Inconsolata",
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export const VybeTheme: VictoryThemeDefinition = {
  area: assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: white25,
          strokeWidth: 0,
          strokeLinecap,
          strokeLinejoin,
          padding
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
        }),
        grid: {
          fill: "none",
          stroke: white25,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: 0,
          stroke: white25,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: white50
        }),
      },
    },
    baseProps,
  ),
  polarDependentAxis: assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent",
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  boxplot: assign(
    {
      style: {
        max: { padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: blueGrey700 },
        q1Labels: assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: blueGrey700 },
        q3Labels: assign({}, baseLabelStyles, { padding: 3 }),
      },
      boxWidth: 20,
    },
    baseProps,
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: blueGrey700,
        },
        labels: assign({}, baseLabelStyles, { padding: 5 }),
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700,
      },
    },
    baseProps,
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  group: assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),
  histogram: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          stroke: grey900,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: white70,
          strokeWidth: 1,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1,
        },
        labels: assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps,
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps,
  ),
  stack: assign(
    {
      colorScale: colors,
    },
    baseProps,
  ),
  tooltip: {
    style: assign({}, baseLabelStyles, { padding: 0, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none",
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: "none",
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none",
        },
      },
    },
    baseProps,
  ),
};

export const VybeThemeAnalytics: VictoryThemeDefinition = {
  area: assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    basePropsAnalytics,
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: white25,
          strokeWidth: 0,
          strokeLinecap,
          strokeLinejoin,
          padding
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
        }),
        grid: {
          fill: "none",
          stroke: "none",
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: 0,
          stroke: white25,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: white50
        }),
      },
    },
    basePropsAnalytics,
  ),
  polarDependentAxis: assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent",
      },
    },
  }),
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    basePropsAnalytics,
  ),
  chart: basePropsAnalytics,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    basePropsAnalytics,
  ),
  group: assign(
    {
      colorScale: colors,
    },
    basePropsAnalytics,
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  tooltip: {
    style: assign({}, baseLabelStyles, { padding: 0, pointerEvents: "none", center: {x: 225, y: 30 } }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none",
    },
    flyoutPadding: 10,
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: "none",
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none",
        },
      },
    },
    basePropsAnalytics,
  ),
};

export const VybeThemeTVL: VictoryThemeDefinition = {
  area: assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    basePropsTVL,
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: white25,
          strokeWidth: 0,
          strokeLinecap,
          strokeLinejoin,
          padding
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
        }),
        grid: {
          fill: "none",
          stroke: "transparent",
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: 0,
          stroke: white25,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: white50
        }),
      },
    },
    basePropsTVL,
  ),
  chart: basePropsTVL,
  tooltip: {
    style: assign({}, baseLabelStyles, { padding: 0, pointerEvents: "none" }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none",
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10,
  },
};