


const BSButton = ({ text, href, disabled, handleClick, type = 'link' }) => {
  const disabledClasses = disabled ? 'button__disabled' : 'button__primary'
  const buttonSelector = {
    'link': (<a className="button__holder" href={href}>
      <span className="text-shadow">{text}</span>
      <div className="button__bg">
        <div className="button-bg__shadow"></div>
        <div className="button-bg__background"></div>
        <div className="button-bg__background--hover"></div>
        <div className="button-bg__underline"></div>
      </div>
    </a>),
    'button': (<button className={`search--field__button ${disabledClasses}`} type="button" disabled={disabled} onClick={handleClick}>
      <span className="text-shadow">
        {text}
      </span>
    </button>)
  }
  return buttonSelector[type]
}

export default BSButton;