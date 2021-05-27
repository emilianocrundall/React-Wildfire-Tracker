import { Tooltip } from '@material-ui/core'
import WhatshotIcon from '@material-ui/icons/Whatshot'

const LocationMarker = ({lat, lng, title}) => {
    return (
        <div className='marker' >
            <Tooltip title={title}>
                <WhatshotIcon />
            </Tooltip>
        </div>
    )
}

export default LocationMarker
