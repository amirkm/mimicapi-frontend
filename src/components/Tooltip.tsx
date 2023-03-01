import { useState } from 'react'
import { usePopper } from 'react-popper'

const Tooltip = ({ content, children }: any) => {
  const [tooltipElement, setTooltipElement] = useState<any>(null)
  const [arrowElement, setArrowElement] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  const { styles, attributes } = usePopper(tooltipElement, arrowElement, { placement: 'auto' })

  return (
    <div>
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} ref={setTooltipElement}>
        {children}
      </div>
      {isVisible && (
        <div ref={setArrowElement} style={styles.popper} {...attributes.popper}>
          <div style={styles.arrow} />
          <div style={{ padding: '10px' }}>{content}</div>
        </div>
      )}
    </div>
  )
}

export const TooltipInfo = (props: any) => {
  return (
    <Tooltip className="p-4 text-sm rounded drop-shadow-md bg-slate-100" {...props}>
      {props.children}
    </Tooltip>
  )
}

export default Tooltip
