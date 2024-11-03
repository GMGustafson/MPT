const Gallery = () => {
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../MPTimages/Gallery", false, /\.(png|jpe?g|svg$)/)
    );

    return(
        <div> 
            <h1> Gallery</h1>
            <image src={images} alt={images} />
        </div>
    )
};
    
export default Gallery; 