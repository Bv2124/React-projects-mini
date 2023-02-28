// Modified version of
// https://github.com/airbnb/visx/blob/master/packages/visx-responsive/src/components/ParentSize.tsx
import debounce from "lodash.debounce"
import { forwardRef, useEffect, useMemo, useRef, useState } from "react"
import { mergeRefs } from "react-merge-refs"

const defaultIgnoreDimensions = []
const defaultParentSizeStyles = { width: "100%", height: "100%" }

export default forwardRef(function ParentSize(
  {
    className,
    children,
    debounceTime = 300,
    ignoreDimensions = defaultIgnoreDimensions,
    parentSizeStyles,
    enableDebounceLeadingCall = true,
    resizeObserverPolyfill,
    ...restProps
  },
  ref
) {
  const target = useRef(null)
  const animationFrameID = useRef(0)

  const [state, setState] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  })

  const resize = useMemo(() => {
    const normalized = Array.isArray(ignoreDimensions)
      ? ignoreDimensions
      : [ignoreDimensions]

    return debounce(
      incoming => {
        setState(existing => {
          const stateKeys = Object.keys(existing)
          const keysWithChanges = stateKeys.filter(
            key => existing[key] !== incoming[key]
          )
          const shouldBail = keysWithChanges.every(key =>
            normalized.includes(key)
          )

          return shouldBail ? existing : incoming
        })
      },
      debounceTime,
      { leading: enableDebounceLeadingCall }
    )
  }, [debounceTime, enableDebounceLeadingCall, ignoreDimensions])

  useEffect(() => {
    const LocalResizeObserver = resizeObserverPolyfill || window.ResizeObserver

    const observer = new LocalResizeObserver(entries => {
      entries.forEach(entry => {
        const { left, top, width, height } = entry?.contentRect ?? {}
        animationFrameID.current = window.requestAnimationFrame(() => {
          resize({ width, height, top, left })
        })
      })
    })
    if (target.current) observer.observe(target.current)

    return () => {
      window.cancelAnimationFrame(animationFrameID.current)
      observer.disconnect()
      resize.cancel()
    }
  }, [resize, resizeObserverPolyfill])

  return (
    <div
      style={{ ...defaultParentSizeStyles, ...parentSizeStyles }}
      ref={mergeRefs([ref, target])}
      className={className}
      {...restProps}
    >
      {children({
        ...state,
        ref: target.current,
        resize
      })}
    </div>
  )
})
