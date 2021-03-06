---
id: apis/Event
title: Event
officialDoc: https://github.com/facebook/react-native/blob/master/Libraries/Types/CoreEventTypes.js
---

These are the types of objects returned in `Event` callbacks. Types are
instances of `syntheticEvent('a)` and `responderSyntheticEvent('a)`.

## Parametrised Types

### `syntheticEvent('a)`

```reason
type syntheticEvent('a) = {
  .
  "bubbles": Js.Nullable.t(bool),
  "cancelable": Js.Nullable.t(bool),
  "currentTarget": float,
  "defaultPrevented": Js.Nullable.t(bool),
  "dispatchConfig": {. "registrationName": string},
  "eventPhase": Js.Nullable.t(float),
  "preventDefault": unit => unit,
  "isDefaultPrevented": unit => bool,
  "stopPropagation": unit => unit,
  "isPropagationStopped": unit => bool,
  "isTrusted": Js.Nullable.t(bool),
  "nativeEvent": 'a,
  "persist": unit => unit,
  "target": Js.Nullable.t(float),
  "timeStamp": float,
  "_type": Js.Nullable.t(string),
};
```

### `responderSyntheticEvent('a)`

`responderSyntheticEvent('a)` adds the `touchHistory` key to `syntheticEvent('a)`

```reason
type responderSyntheticEvent('a) = {
  .
  // synthethicEvent keys
  "bubbles": Js.Nullable.t(bool),
  "cancelable": Js.Nullable.t(bool),
  "currentTarget": float,
  "defaultPrevented": Js.Nullable.t(bool),
  "dispatchConfig": {. "registrationName": string},
  "eventPhase": Js.Nullable.t(float),
  "preventDefault": unit => unit,
  "isDefaultPrevented": unit => bool,
  "stopPropagation": unit => unit,
  "isPropagationStopped": unit => bool,
  "isTrusted": Js.Nullable.t(bool),
  "nativeEvent": 'a,
  "persist": unit => unit,
  "target": Js.Nullable.t(float),
  "timeStamp": float,
  "_type": Js.Nullable.t(string),
  "touchHistory": {
    .
    "indexOfSingleActiveTouch": float,
    "mostRecentTimeStamp": float,
    "numberActiveTouches": float,
    "touchBank":
      array({
        .
        "touchActive": bool,
        "startPageX": float,
        "startPageY": float,
        "startTimeStamp": float,
        "currentPageX": float,
        "currentPageY": float,
        "currentTimeStamp": float,
        "previousPageX": float,
        "previousPageY": float,
        "previousTimeStamp": float,
      }),
  },
};
```

## Types

### `layoutEvent`

```reason
type layoutEvent =
  syntheticEvent({
    .
    "layout": {
      .
      "x": float,
      "y": float,
      "width": float,
      "height": float,
    },
  });
```

### `pressEvent`

```reason
type pressEvent = responderSyntheticEvent(pressEventPayload);
```

where `pressEventPayload` is defined as

```reason
type pressEventPayload = {
  .
  "changedTouches": array(pressEventPayload),
  "force": float,
  "identifier": int,
  "locationX": float,
  "locationY": float,
  "pageX": float,
  "pageY": float,
  "target": Js.Nullable.t(float),
  "timestamp": float,
  "touches": array(pressEventPayload),
};
```

### `scrollEvent`

```reason
type scrollEvent =
  syntheticEvent({
    .
    "contentInset": {
      .
      "bottom": float,
      "left": float,
      "right": float,
      "top": float,
    },
    "contentOffset": contentOffset,
    "contentSize": dimensions,
    "layoutMeasurement": dimensions,
  });
```

where `contentOffset` and `dimensions` are defined as

```reason
type contentOffset = {
  .
  "x": float,
  "y": float,
};
```

```reason
type dimensions = {
  .
  "height": float,
  "width": float,
};
```

### `switchChangeEvent`

```reason
type switchChangeEvent = syntheticEvent({. "value": bool});
```

### `targetEvent`

```reason
type targetEvent = syntheticEvent({. "target": int});

```

### `textLayoutEvent`

```reason
type textLayoutEvent = syntheticEvent({. "lines": array(textLayout)});
```

where `textLayout` is defined as

```reason
type textLayout = {
  .
  "x": float,
  "y": float,
  "width": float,
  "height": float,
  "ascender": float, // verify
  "capHeight": float, // verify
  "descender": float, // verify
  "text": string,
  "xHeight": float // verify
};
```
