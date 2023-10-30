import CampsiteCard from './CampsiteCard';
import { Col, Row } from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';

const CampsiteLists = ({ setCampsiteId }) => {
    const campsites = selectAllCampsites();

    return(
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col 
                    md='5' c
                    lassName='m-4' 
                    key={campsite.id}
                    onClick={() => setCampsiteId(campsite.id)}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsiteLists;