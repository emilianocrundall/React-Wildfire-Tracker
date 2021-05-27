import Whatshot from "@material-ui/icons/Whatshot"

const Header = () => {
    return (
        <div className='header'>
            <h2>
                <Whatshot fontSize='medium' />
                Wildfire Tracker
            </h2>
            <p>Powered by NASA</p>
        </div>
    )
}
export default Header
