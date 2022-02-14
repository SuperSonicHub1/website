import reactive from "@maggieliu/reactive";
import * as React from "react";

const Reactive = ({ reactionText }) => {
  React.useEffect(() => {
    reactive.install({
      firebaseConfig: {
        apiKey: "AIzaSyDLHhsBoICfmOHaX4gdPuO9l9HGXmHV6Go",
        authDomain: "maggieliu-dev.firebaseapp.com",
        databaseURL: "https://maggieliu-dev-default-rtdb.firebaseio.com",
        projectId: "maggieliu-dev",
        storageBucket: "maggieliu-dev.appspot.com",
        messagingSenderId: "1058065480407",
        appId: "1:1058065480407:web:4225c4bcf453da81b30e92",
      },
      reactionText,
    });
  }, []);

  return <div id="reactive_widget" />;
};

export default Reactive;
