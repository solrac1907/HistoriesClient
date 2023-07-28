import Spinner from 'react-bootstrap/Spinner';
const style = { "display": "flex", "alignItems": "center", "justifyContent": "center", "height": "60vh" };
const Loader = () => {
    return (
        <div style={style}>
            <Spinner animation="border" role="status" className='gle'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;