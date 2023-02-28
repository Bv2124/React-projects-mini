import { useEffect, useRef, useState, forwardRef } from "react";
import { Application } from "@splinetool/runtime";
import ParentSize from "./ParentSize";

const Spline = forwardRef(
  (
    {
      scene,
      style,
      onMouseDown,
      onMouseUp,
      onMouseHover,
      onKeyDown,
      onKeyUp,
      onStart,
      onLookAt,
      onFollow,
      onWheel,
      onLoad,
      renderOnDemand = true,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize runtime when component is mounted
    useEffect(() => {
      setIsLoading(true);

      let speApp;
      const events = [
        {
          name: "mouseDown",
          cb: onMouseDown,
        },
        {
          name: "mouseUp",
          cb: onMouseUp,
        },
        {
          name: "mouseHover",
          cb: onMouseHover,
        },
        {
          name: "keyDown",
          cb: onKeyDown,
        },
        {
          name: "keyUp",
          cb: onKeyUp,
        },
        {
          name: "start",
          cb: onStart,
        },
        {
          name: "lookAt",
          cb: onLookAt,
        },
        {
          name: "follow",
          cb: onFollow,
        },
        {
          name: "scroll",
          cb: onWheel,
        },
      ];

      if (canvasRef.current) {
        speApp = new Application(canvasRef.current, { renderOnDemand });

        async function init() {
          await speApp.load(scene);

          for (let event of events) {
            if (event.cb) {
              speApp.addEventListener(event.name, event.cb);
            }
          }

          setIsLoading(false);
          onLoad?.(speApp);
        }

        init();
      }

      return () => {
        for (let event of events) {
          if (event.cb) {
            speApp.removeEventListener(event.name, event.cb);
          }
        }
        speApp.dispose();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scene]);

    return (
      <ParentSize
        ref={ref}
        parentSizeStyles={style}
        debounceTime={50}
        {...props}
      >
        {() => {
          return (
            <canvas
              ref={canvasRef}
              style={{
                display: isLoading ? "none" : "block",
              }}
            />
          );
        }}
      </ParentSize>
    );
  }
);

export default Spline;
