

const HamburgerButton = ({animateButton, button}) => {

    return (
        <>
        <button ref={button} onClick={animateButton} className="hamburgerButton">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </button>
        </>
    )
}

export default HamburgerButton