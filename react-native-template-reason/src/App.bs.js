// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactNative from "react-native";

var os = ReactNative.Platform.OS;

var instructions = os === "ios" ? "Press Cmd+R to reload,\nCmd+D or shake for dev menu" : (
    os === "android" ? "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu" : (
        os === "web" ? "Press Cmd+R to reload." : ""
      )
  );

var styles = ReactNative.StyleSheet.create({
      container: {
        backgroundColor: "#F5FCFF",
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      },
      welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
      },
      instructions: {
        color: "#333333",
        textAlign: "center",
        marginBottom: 5
      }
    });

function App$app(Props) {
  return React.createElement(ReactNative.View, {
              style: styles.container,
              children: null
            }, React.createElement(ReactNative.Text, {
                  style: styles.welcome,
                  children: "Welcome to (Reason) React Native!"
                }), React.createElement(ReactNative.Text, {
                  style: styles.instructions,
                  children: "To get started, edit src/App.re"
                }), React.createElement(ReactNative.Text, {
                  style: styles.instructions,
                  children: instructions
                }));
}

var app = App$app;

export {
  instructions ,
  styles ,
  app ,
  
}
/* os Not a pure module */
